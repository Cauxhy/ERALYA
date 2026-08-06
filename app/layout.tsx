import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({variable:"--font-sans",subsets:["latin"]});
const mono = JetBrains_Mono({variable:"--font-mono",subsets:["latin"],weight:["500","700"]});

export const metadata: Metadata = {
 metadataBase:new URL("https://veralya.ma"),
 title:"Veralya | Learn. Transform. Perform.",
 description:"Formation, coaching et conseil pour les entreprises, managers et talents au Maroc.",
 openGraph:{title:"Veralya | Learn. Transform. Perform.",description:"Les compétences qui transforment les ambitions en impact.",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"Veralya — Le potentiel ne suffit pas. Il faut le révéler."}]},
 twitter:{card:"summary_large_image",title:"Veralya | Learn. Transform. Perform.",description:"Les compétences qui transforment les ambitions en impact.",images:["/og.png"]},
 icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body className={`${manrope.variable} ${mono.variable}`}>{children}</body></html>}
