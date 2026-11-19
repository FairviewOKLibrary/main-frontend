import type {Metadata} from "next";
import "@styles/globals.scss";
export const metadata:Metadata={title:{default:"Fairview City Library",template:"%s | Fairview City Library"},description:"Explore books, library services, digital resources, community news, and local history at Fairview City Library in Fairview, Oklahoma."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
