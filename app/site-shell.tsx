import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow(){return <span className="arrow" aria-hidden="true">→</span>}
const nav=[["accueil","/","Home"],["programmes","/programmes","Formations"],["solutions","/solutions","Coaching"],["apropos","/a-propos","À Propos"],["contact","/contact","Contact"]];

export function SiteShell({children,active}:{children:ReactNode;active:string}){return <>
 <header className="site-header"><div className="container nav-wrap">
  <Link className="brand" href="/"><Image src="/veralya-logo-hq.png" alt="Logo Veralya" width={56} height={56} priority/><strong>VERALYA</strong></Link>
  <nav className="desktop-nav" aria-label="Navigation principale">{nav.map(([id,url,label])=><Link className={active===id?"active":""} href={url} key={id}>{label}</Link>)}</nav>
  <Link className="button primary nav-cta" href="/contact">Rejoindre</Link>
  <details className="mobile-menu"><summary aria-label="Ouvrir le menu">☰</summary><nav><div className="menu-brand"><Image src="/veralya-logo-hq.png" alt="" width={44} height={44}/><strong>VERALYA</strong></div>{nav.map(([id,url,label])=><Link className={active===id?"active":""} href={url} key={id}>{label}</Link>)}<Link className="mobile-join" href="/contact">Rejoindre <Arrow/></Link></nav></details>
 </div></header>{children}<Footer/></>}

function Footer(){return <footer><div className="container footer-grid"><div><Link className="brand" href="/"><Image src="/veralya-logo-hq.png" alt="Logo Veralya" width={48} height={48}/><strong>VERALYA</strong></Link><p>Elevate Performance System.</p></div><div className="footer-links"><a href="https://www.instagram.com/veralyaltp" target="_blank" rel="noreferrer">Instagram</a><a href="https://ma.linkedin.com/in/veralya-learn-transform-perform-7188a0407" target="_blank" rel="noreferrer">LinkedIn</a><Link href="/contact">Newsletter</Link><Link href="/a-propos">Mentions Légales</Link></div><p className="copyright">© 2026 VERALYA — Elevate Performance System. Tous droits réservés. Casablanca, Maroc.</p></div></footer>}

export function PageHero({eyebrow,title,intro}:{eyebrow:string;title:ReactNode;intro:string}){return <section className="page-hero"><div className="container"><p className="pill">↗ {eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p></div></section>}
export function ContactBand(){return <section className="contact-band"><div className="container"><p className="pill gold">Votre prochaine étape</p><h2>Prêt à élever votre performance ?</h2><p>Échangeons sur vos objectifs et construisons le programme adapté.</p><Link className="button primary" href="/contact">Démarrer la conversation <Arrow/></Link></div></section>}
