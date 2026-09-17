import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import CTA from "../components/CTA";
import { services } from "../data/siteData";

export default function Services() {
 return <>
  <PageHero eyebrow="Our services" title="Professional systems for the places where business happens." text="From workplace IT to surveillance, safety, networking and digital presence, our services are designed to work in the real world." image="/images/services-page.svg" />
  <section className="section"><div className="container"><SectionTitle eyebrow="Capabilities" title="One portfolio. Multiple technology needs." text="Choose a focused service or combine several capabilities into a coordinated project. Each engagement starts with the environment, not a generic package."/><div className="service-directory">{services.map(s=>{const I=s.icon; return (
    <a className="directory-card" href={`/services/${s.slug}`} key={s.slug}>
      <div className="directory-media">
        <img
          src={s.image}
          alt={s.title}
          className="w-full h-58 object-cover"
        />
      </div>
      <div className="directory-content">
        <div className="service-icon">
          <I size={21} />
        </div>
        <h3>{s.title}</h3>
        <p>{s.description}</p>
        <span>
          Explore service <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );})}</div></div></section>
  <section className="section soft"><div className="container split"><div><p className="eyebrow">How to choose</p><h2>Start with the business problem, then choose the technology.</h2></div><div className="check-list"><div><CheckCircle2 size={18}/>Need a new installation</div><div><CheckCircle2 size={18}/>Upgrading an existing system</div><div><CheckCircle2 size={18}/>Reducing recurring IT issues</div><div><CheckCircle2 size={18}/>Connecting multiple systems</div></div></div></section>
  <CTA />
 </>;
}
