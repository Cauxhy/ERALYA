import Link from "next/link";
import {Arrow, SiteShell} from "../site-shell";

const offers=[
 {icon:"◆",title:"Coaching Individuel Managers",text:"Un accompagnement ciblé pour les leaders souhaitant affiner leur posture, gérer la complexité et catalyser l’intelligence collective.",items:["Leadership authentique","Gestion des conflits et intelligence émotionnelle","Décision en environnement incertain"]},
 {icon:"◎",title:"Coaching Collectif Équipes",text:"Des sessions dynamiques pour aligner les visions, fluidifier la communication et transformer les groupes en équipes performantes.",items:["Cohésion et confiance","Culture du feedback constructif","Conduite du changement"]}
];

const stories=[
 ["Yasmine B.","Directrice Générale, secteur bancaire","Le coaching VERALYA a transformé notre comité de direction. L’équipe décide mieux, communique plus clairement et avance avec une vision commune."],
 ["Karim T.","Fondateur, Tech Startup","L’accompagnement individuel m’a permis de structurer mon leadership pendant une phase de croissance critique."],
 ["Nadia M.","Cheffe de Projet Senior","La cohésion s’est renforcée et nous avons développé des réflexes de communication qui nous font gagner un temps précieux."]
];

export default function Coaching(){return <SiteShell active="coaching"><main className="coaching-page">
 <section className="container coaching-hero"><div><p className="page-kicker">Élévation Professionnelle</p><h1>Libérez le Potentiel de <span>Vos Équipes</span></h1><p>Des programmes de coaching sur mesure pour développer le leadership, renforcer la cohésion d’équipe et maîtriser l’intelligence émotionnelle.</p><div className="actions"><Link className="button primary" href="/contact">Réserver une session <Arrow/></Link><a className="button outline" href="#approche">Découvrir l’approche</a></div></div><div className="coaching-image"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4qLCCWHMWh02XOkSFmN5XnkX8AWFwOZbugxc3Phtl4JT6Ep7SGuwz9_pJFLJ2f0gTJvFo5-JXUMiJt3UrsbSZ8wStDRiFDyqGEhqtD01MQfQhjgZ0Sr4okCRmndolGNIUQHU3bqihrF4bKocTcqva9Vt_xkVGVbENiZvKE3wKI5NL9_1EOS9JJtq7AGTWK0GLMIu7IAZobchvMuRQOau_VZwMVWWjl1wxxbFuixVQC-tjEQ2T3MS" alt="Équipe de professionnels en séance de coaching"/></div></section>
 <section className="coaching-offers" id="approche"><div className="container"><div className="new-section-title"><p className="page-kicker">Une approche sur mesure</p><h2>Nos Modalités d’Intervention</h2><p>Un accompagnement adapté à vos objectifs, de l’individu à l’organisation.</p></div><div className="coaching-grid">{offers.map(o=><article key={o.title}><span className="offer-icon">{o.icon}</span><h3>{o.title}</h3><p>{o.text}</p><ul>{o.items.map(i=><li key={i}>✓ <span>{i}</span></li>)}</ul><Link href="/contact">En savoir plus <Arrow/></Link></article>)}</div></div></section>
 <section className="container coaching-impact"><div className="new-section-title"><p className="page-kicker">Résultats concrets</p><h2>Impact Démontré</h2></div><div className="story-grid">{stories.map(([name,role,quote])=><blockquote key={name}><span className="quote-mark">“</span><p>{quote}</p><footer><strong>{name}</strong><small>{role}</small></footer></blockquote>)}</div></section>
 <section className="coaching-cta"><div className="container"><div><p className="page-kicker">Votre prochaine étape</p><h2>Construisons votre parcours de coaching.</h2></div><Link className="button primary" href="/contact">Parler à un conseiller <Arrow/></Link></div></section>
 </main></SiteShell>}
