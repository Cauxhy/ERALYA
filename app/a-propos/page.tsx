import Link from "next/link";
import {SiteShell} from "../site-shell";

const values=[
 {icon:"✦",title:"Innovation",text:"Nous repensons constamment les méthodes d’apprentissage pour les adapter aux réalités d’un marché en perpétuelle évolution, en intégrant les dernières technologies éducatives."},
 {icon:"★",title:"Excellence",text:"Un standard de qualité non négociable. Nos programmes sont rigoureusement conçus pour garantir des résultats mesurables et une progression tangible de carrière."},
 {icon:"◇",title:"Intégrité",text:"La transparence et l’éthique professionnelle sont au cœur de nos relations avec nos apprenants, nos partenaires et notre équipe."}
];
export default function About(){return <SiteShell active="apropos"><main className="about-new">
 <section className="container about-hero"><div><p className="page-kicker">Notre Histoire</p><h1>Élever la <span>Performance</span>, Transformer les Carrières.</h1><p>Née au cœur de Casablanca, VERALYA est plus qu’un centre de formation. C’est un écosystème conçu pour les professionnels ambitieux du Maroc qui cherchent à allier stabilité corporate et dynamisme moderne.</p><div className="about-actions"><Link className="button primary" href="/programmes">Découvrir nos programmes</Link><Link className="button outline" href="/contact">Contactez-nous</Link></div></div><div className="about-photo"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIQVedrcHsTZ_nGJBiNrchFHEsTkUFJR5rvZLP1YrHsvPVO-v_mxE3EhuT4CU1PVfobmdk7E-mgukc4szYWU9umBzg8Oc8WLZzi9M581g9KFsMjmUWbR59RroCE-QEGrgRQotZR2b8DXx7hljmybjfNblmJhVhcXi9FklVrcHJzzwX-cY6wPEvvx24KNKVdWSEzF3R-ETrvaE3V_MP6zL27uKK2_-87VSTFP8JQCR5Kq6KvpvHr1FD" alt="Professionnels collaborant dans un bureau moderne à Casablanca"/><div><strong>Casablanca-Settat</strong><span>Notre Hub Stratégique</span></div></div></section>
 <section className="container about-values"><div className="new-section-title"><h2>Nos Valeurs Fondamentales</h2><p>Les principes qui guident chaque aspect de notre méthodologie d’apprentissage et de développement.</p></div><div className="new-value-grid">{values.map((v,i)=><article className={i===0?"gold-top":""} key={v.title}><span className={`value-icon v${i}`}>{v.icon}</span><h3>{v.title}</h3><p>{v.text}</p></article>)}</div></section>
 </main></SiteShell>}
