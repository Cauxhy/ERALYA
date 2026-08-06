import Link from "next/link";
import { SiteShell, Arrow, ContactBand } from "./site-shell";

const pillars = [
  { n: "01", title: "Apprendre", text: "Des méthodes utiles, ancrées dans vos réalités métier." },
  { n: "02", title: "Transformer", text: "Des déclics qui deviennent de nouveaux réflexes au quotidien." },
  { n: "03", title: "Performer", text: "Des équipes plus autonomes, alignées et responsables." },
];

export default function Home() {
  return <SiteShell active="accueil">
    <main>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Formation & conseil · Maroc</p>
          <h1>Le potentiel ne suffit pas.<br/><em>Il faut le révéler.</em></h1>
          <p className="lead">Nous aidons les entreprises, les managers et les talents à transformer leurs défis en compétences durables.</p>
          <div className="actions"><Link className="button primary" href="/contact">Parler de votre projet <Arrow/></Link><Link className="text-link" href="/solutions">Découvrir nos solutions</Link></div>
        </div>
        <div className="hero-art" aria-label="Les trois étapes de la méthode Veralya">
          <div className="orbit orbit-one"><span>01</span><b>Apprendre</b></div>
          <div className="orbit orbit-two"><span>02</span><b>Transformer</b></div>
          <div className="orbit orbit-three"><span>03</span><b>Performer</b></div>
          <div className="core">V</div>
        </div>
      </section>

      <section className="manifesto dark-section">
        <div className="container narrow"><p className="eyebrow light">Notre conviction</p><h2>Une formation réussie ne se mesure pas au nombre de slides. Elle se voit dans les comportements qui changent.</h2></div>
      </section>

      <section className="section container">
        <div className="section-head"><div><p className="eyebrow">Notre approche</p><h2>De la compréhension<br/>à l’action.</h2></div><p>Chaque intervention part de votre contexte, implique les participants et se termine par un plan d’action observable.</p></div>
        <div className="pillar-grid">{pillars.map((p)=><article className="pillar" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
      </section>

      <section className="section soft-section">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Pour qui ?</p><h2>Des réponses à chaque enjeu.</h2></div></div>
          <div className="audience-grid">
            <Link href="/solutions#entreprises" className="audience-card coral"><span>Entreprises</span><h3>Faire grandir les compétences qui font avancer votre organisation.</h3><Arrow/></Link>
            <Link href="/solutions#managers" className="audience-card blue"><span>Managers</span><h3>Prendre sa place, mobiliser son équipe et décider avec clarté.</h3><Arrow/></Link>
            <Link href="/solutions#talents" className="audience-card cream"><span>Jeunes talents</span><h3>Construire les codes, la confiance et l’élan d’une carrière.</h3><Arrow/></Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  </SiteShell>;
}
