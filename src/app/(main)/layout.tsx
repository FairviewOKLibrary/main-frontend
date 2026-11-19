import type {ReactNode} from "react";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
export default function MainLayout({children}:{children:ReactNode}){return <><Navigation/>{children}<Footer/></>}
