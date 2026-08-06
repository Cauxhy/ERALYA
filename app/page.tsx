import Link from "next/link";
import {SiteShell,Arrow} from "./site-shell";

export default function Home(){return <SiteShell active="accueil"><main>
 <section className="hero"><div className="hero-shape"/><div className="container hero-grid"><div className="hero-copy"><p className="pill">↗ Elevate Performance System</p><h1><span>Learn, Transform,</span>Perform</h1><p className="lead">Empowering the next generation of ambitious professionals in Casablanca and beyond. We bridge the gap between academic theory and corporate reality through high-impact coaching.</p><div className="actions"><Link className="button primary" href="/contact">Rejoindre le Programme <Arrow/></Link><Link className="button outline" href="/coaching">Découvrir</Link></div></div>
 <div className="hero-photo"><div className="hero-photo-bg"/><div className="photo-shade"/><div className="stat-card"><div><small>Taux de Réussite</small><strong>94%</strong></div><span className="award-icon" aria-label="Excellence"><i>★</i></span></div></div></div></section>
 <section className="expertise" id="formations"><div className="container"><div className="section-title"><h2>Notre Expertise</h2><p>Des solutions sur mesure conçues pour accélérer votre trajectoire professionnelle.</p></div><div className="expert-grid">
  <article className="expert-card training"><div><span className="icon">◆</span><h3>Coaching Individuel</h3><p>Un accompagnement ciblé pour développer votre leadership, votre posture et votre prise de décision.</p></div><Link href="/coaching">En savoir plus <Arrow/></Link></article>
  <article className="expert-card coaching"><div><span className="icon gold-icon">◎</span><h3>Coaching Collectif</h3><p>Des sessions dynamiques pour renforcer la cohésion et transformer les équipes.</p></div><Link href="/coaching">Découvrir <Arrow/></Link></article>
  <article className="expert-card consulting"><div className="consult-copy"><p className="pill slate">▣ Pour les Entreprises</p><h3>Conseil en Performance</h3><p>Nous aidons les organisations à structurer leurs équipes, optimiser leurs processus et intégrer les talents de la nouvelle génération avec succès.</p><Link className="button outline slate-button" href="/coaching">Solutions Entreprises</Link></div><div className="consult-photo"/></article>
 </div></div></section>
 </main></SiteShell>}
