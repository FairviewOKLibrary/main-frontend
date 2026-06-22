// app/api/proxy/route.ts
import { NextRequest, NextResponse } from "next/server";

const TARGET_BASE = process.env.PROXY_TARGET_BASE ?? "https://example.com"; // e.g. https://api.example.com
const FORWARD_IP = process.env.PROXY_FORWARD_IP === "1";

function buildTargetUrl(req: NextRequest) {
  const pathname = req.nextUrl.pathname.replace(/^\/api\/proxy/, "") || "/";
  const search = req.nextUrl.search ?? "";
  return `${TARGET_BASE}${pathname}${search}`;
}

function filterHopByHopHeaders(headers: Headers) {
  // remove hop-by-hop headers as required by the spec
  const hopByHop = [
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
  ];
  for (const h of hopByHop) headers.delete(h);
}

// copy incoming headers to outbound, optionally removing Host
function buildForwardHeaders(req: NextRequest) {
  const out = new Headers();

  // copy all headers from the incoming request
  for (const [key, value] of req.headers) {
    // skip host header to let fetch set it for the target
    if (key === "host") continue;
    out.set(key, value);
  }

  // forward client IP optionally
  if (FORWARD_IP) {
    const clientIp = req.ip ?? req.headers.get("x-forwarded-for") ?? "";
    if (clientIp) out.set("x-forwarded-for", clientIp);
  }

  return out;
}

export async function handler(req: NextRequest) {
  const url = buildTargetUrl(req);
  const headers = buildForwardHeaders(req);

  // If you need to modify or add auth header:
  // headers.set("authorization", `Bearer ${process.env.UPSTREAM_API_KEY}`);

  filterHopByHopHeaders(headers);

  const init: RequestInit = {
    method: req.method,
    headers,
    // body: only include body for methods that support it
    body:
      req.method !== "GET" && req.method !== "HEAD"
        ? await req.arrayBuffer()
        : undefined,
    // credentials omitted; adjust redirect mode if needed
    redirect: "manual",
  };

  const upstream = await fetch(url, init);

  // Build response headers
  const responseHeaders = new Headers(upstream.headers);
  filterHopByHopHeaders(responseHeaders);

  // Optionally, rewrite CORS headers for browser requests
  // responseHeaders.set("access-control-allow-origin", "*");
  // responseHeaders.set("access-control-allow-credentials", "true");

  const body = await upstream.arrayBuffer();
  return new NextResponse(Buffer.from(body), {
    status: upstream.status,
    headers: responseHeaders,
  });
}

// Next.js app router expects default export named GET/POST/etc or exported handler for all methods.
// Export all methods to use the same handler:
export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
export const HEAD = handler;
                              