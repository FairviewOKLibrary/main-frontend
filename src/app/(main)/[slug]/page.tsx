import content from "@/lib/legacy-content.json";
import Link from "next/link";
import { notFound } from "next/navigation";
const titles: Record<string,string> = {about:"About the Library", "library-board":"Library Board",faq:"Frequently Asked Questions","join-fol":"Friends of the Library","book-club":"Book Club",blog:"Library News & Programs","public-sites":"Community & Public Resources",contact:"Contact the Library",services:"Library Services"};
export function generateStaticParams(){return Object.keys(titles).map(slug=>({slug}));}
export default async function ContentPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; if(!(slug in titles))notFound();
 const blocks=content[slug as keyof typeof content];
 return <main className="content-page"><div className="page-intro"><p className="eyebrow">Fairview City Library</p><h1>{titles[slug]}</h1><p>Explore information and resources from your local library.</p></div><div className="content-shell"><article className="legacy-content">{blocks.map((block,i)=>{const text=block.text; if(block.type==='h1'||block.type==='h2')return <h2 key={i}>{text}</h2>;if(block.type==='h3'||block.type==='h4')return <h3 key={i}>{text}</h3>;if(block.href)return <p key={i}><a href={block.href} target={block.href.startsWith('http')?'_blank':undefined} rel="noopener noreferrer">{text} ↗</a></p>;if(block.type==='li')return <p className="resource-item" key={i}>{text}</p>;return <p key={i}>{text}</p>})}</article><aside className="content-sidebar"><h2>Quick links</h2><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/public-sites">Public resources</Link><Link href="/contact">Contact</Link><a href="https://catalog.fairviewoklibrary.org/">Search the catalog ↗</a></aside></div></main>
}
