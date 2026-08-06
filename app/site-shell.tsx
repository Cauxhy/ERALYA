import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow(){ return <span className="arrow" aria-hidden="true">↗</span> }

const nav = [["accueil","/","Accueil"],["solutions","/solutions","Solutions"],["programmes","/programmes","Programmes"],["apropos","/a-propos","À propos"]];

export function SiteShell({children,active}:{children:ReactNode;active:string}){
 return <><header className="site-header"><div className="container nav-wrap"><Link className="logo" href="/" aria-label="Veralya, accueil"><span>V</span><div>VERALYA<small>LEARN · TRANSFORM · PERFORM</small></div></Link><nav className="desktop-nav" aria-label="Navigation principale">{nav.map(([id,url,label])=><Link className={active===id?"active":""} key={id} href={url}>{label}</Link>)}<Link className="nav-cta" href="/contact">Nous contacter <Arrow/></Link></nav><details className="mobile-menu"><summary aria-label="Ouvrir le menu">Menu</summary><nav>{nav.map(([id,url,label])=><Link key={id} href={url}>{label}</Link>)}<Link href="/contact">Nous contacter</Link></nav></details></div></header>{children}<Footer/></>
}

function Footer(){return <footer><div className="container footer-grid"><div><Link className="logo footer-logo" href="/"><span>V</span><div>VERALYA<small>LEARN · TRANSFORM · PERFORM</small></div></Link><p>Les compétences qui transforment<br/>les ambitions en impact.</p></div><div><b>Explorer</b><Link href="/solutions">Solutions</Link><Link href="/programmes">Programmes</Link><Link href="/a-propos">À propos</Link></div><div><b>Nous trouver</b><p>Casablanca, Maroc</p><a href="https://www.instagram.com/veralyaltp" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://ma.linkedin.com/in/veralya-learn-transform-perform-7188a0407" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div className="container legal"><span>© 2026 Veralya</span><span>Apprendre · Transformer · Performer</span></div></footer>}

export function PageHero({eyebrow,title,intro}:{eyebrow:string;title:ReactNode;intro:string}){return <section className="page-hero container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p></section>}

export function ContactBand(){return <section className="contact-band"><div className="container"><p className="eyebrow light">Un projet, un défi, une ambition ?</p><h2>Parlons de ce que vous voulez<br/><em>faire bouger.</em></h2><Link className="button white" href="/contact">Démarrer la conversation <Arrow/></Link></div></section>}
