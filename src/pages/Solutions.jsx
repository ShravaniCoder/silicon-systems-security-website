import { ArrowRight, Building2, ShieldCheck, Network, Server, Workflow, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import CTA from "../components/CTA";
import { solutions } from "../data/siteData";

export default function Solutions() {
 return <>
  <PageHero eyebrow="Integrated solutions" title="Connected systems. Considered as one environment." text="When infrastructure, security and digital services are planned together, businesses gain a clearer and more manageable technology foundation." image="/images/solutions-page.svg" />
  <section className="section"><div className="container"><SectionTitle eyebrow="Solution areas" title="Designed around how your organisation actually works." text="Different environments need different priorities. We adapt the technology plan to the people, space and operational rhythm of the site."/><div className="solution-feature-grid">{solutions.map((s,i)=>{const I=s.icon;return <article key={s.title}><div className="solution-number">0{i+1}</div><I/><h3>{s.title}</h3><p>{s.text}</p><a href="/contact">Discuss this environment <ArrowRight size={14}/></a></article>})}</div></div></section>
  <section className="section dark-panel"><div className="container split"><div><p className="eyebrow light">Integrated thinking</p><h2>Build the foundation once. Make every connected system easier to manage.</h2><p className="muted-light">Networks carry business systems. Cabling supports connectivity. Access and surveillance protect physical spaces. Websites and hosting represent the digital side of the organisation. We plan these layers with their relationships in mind.</p><a href="/contact" className="button button-gold">Discuss a project <ArrowRight size={17}/></a></div><div className="solution-stack"><div><ShieldCheck/> Security & safety</div><div><Network/> Connectivity</div><div><Server/> Infrastructure</div><div><Workflow/> Operational flow</div></div></div></section>
  <section className="section"><div className="container split"><div><p className="eyebrow">Project mindset</p><h2>What a well-planned technology environment should give you.</h2></div><div className="check-list"><div><CheckCircle2 size={18}/>Clearer visibility</div><div><CheckCircle2 size={18}/>Less operational friction</div><div><CheckCircle2 size={18}/>Cleaner expansion paths</div><div><CheckCircle2 size={18}/>A simpler support relationship</div></div></div></section>
  <CTA />
 </>;
}
