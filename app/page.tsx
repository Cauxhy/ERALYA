import Link from "next/link";
import {SiteShell,Arrow} from "./site-shell";

export default function Home(){return <SiteShell active="accueil"><main>
 <section className="hero"><div className="hero-shape"/><div className="container hero-grid"><div className="hero-copy"><p className="pill">↗ Elevate Performance System</p><h1><span>Learn, Transform,</span>Perform</h1><p className="lead">Empowering the next generation of ambitious professionals in Casablanca and beyond. We bridge the gap between academic theory and corporate reality through high-impact training and strategic coaching.</p><div className="actions"><Link className="button primary" href="/contact">Rejoindre le Programme <Arrow/></Link><Link className="button outline" href="/programmes">Découvrir</Link></div></div>
 <div className="hero-photo"><div className="hero-photo-bg"/><div className="photo-shade"/><div className="stat-card"><div><small>Taux de Réussite</small><strong>94%</strong></div><span className="award-icon" aria-label="Excellence"><i>★</i></span></div></div></div></section>
 <section className="expertise" id="formations"><div className="container"><div className="section-title"><h2>Notre Expertise</h2><p>Des solutions sur mesure conçues pour accélérer votre trajectoire professionnelle.</p></div><div className="expert-grid">
  <article className="expert-card training"><div><span className="icon">🎓</span><h3>Formations d&apos;Excellence</h3><p>Programmes intensifs axés sur les compétences techniques et soft skills recherchées par les entreprises de premier plan.</p></div><Link href="/programmes">En savoir plus <Arrow/></Link></article>
  <article className="expert-card coaching"><div><span className="icon gold-icon">◎</span><h3>Coaching Stratégique</h3><p>Accompagnement individuel pour débloquer votre potentiel.</p></div><Link href="/solutions">Découvrir <Arrow/></Link></article>
  <article className="expert-card consulting"><div className="consult-copy"><p className="pill slate">▣ Pour les Entreprises</p><h3>Conseil en Performance</h3><p>Nous aidons les organisations à structurer leurs équipes, optimiser leurs processus et intégrer les talents de la nouvelle génération avec succès.</p><Link className="button outline slate-button" href="/solutions">Solutions Entreprises</Link></div><div className="consult-photo"/></article>
 </div></div></section>
 </main></SiteShell>}
