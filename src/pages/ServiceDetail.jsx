import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { services } from "../data/siteData";
import CTA from "../components/CTA";

const serviceCopy = {
 "it-sales-support": { intro:"A reliable IT environment starts with the right devices, sensible configuration and accessible support.", detail:"We help businesses select, set up and maintain everyday technology so users can get on with their work instead of repeatedly troubleshooting the tools they depend on." },
 "cctv-surveillance": { intro:"Surveillance is most useful when the camera plan reflects how the site is actually used.", detail:"We assess entry points, movement patterns, critical areas and viewing requirements before shaping a practical surveillance setup with recording and remote access." },
 "fire-alarm-systems": { intro:"Life-safety systems need clarity, coverage and disciplined maintenance.", detail:"Our approach focuses on detector and notification placement, zoning, control equipment and ongoing testing so the system remains understandable and serviceable." },
 "access-control": { intro:"Control who enters, where they enter and how access is managed.", detail:"We configure biometric and door access solutions around authorised users, operating hours, attendance needs and the physical layout of the premises." },
 "website-development": { intro:"A business website should explain what you do before asking visitors to do anything else.", detail:"We create responsive websites with clear content hierarchy, professional visual direction, mobile-friendly layouts and an implementation path suited to the business." },
 "domain-hosting": { intro:"Your digital presence needs a stable technical home.", detail:"We support domain management, hosting, business email and migration tasks so your website and digital communications have a dependable foundation." },
 "structured-cabling": { intro:"Good connectivity starts below the devices—with a clean physical network layer.", detail:"We plan network points, cable routes, racks and patching with attention to organisation, maintainability and future expansion." },
 "voice-evacuation": { intro:"Emergency communication must be heard clearly and understood quickly.", detail:"We plan speaker coverage, amplification, zones and announcement paths for environments where clear instructions are essential." },
 "it-maintenance": { intro:"Maintenance is about preventing small technology issues from becoming business interruptions.", detail:"We combine routine health checks, preventive actions and responsive troubleshooting to keep supported systems stable and easier to manage." }
};

export default function ServiceDetail({ slug }) {
 const service=services.find(s=>s.slug===slug) || services[0]; const I=service.icon; const copy=serviceCopy[service.slug] || serviceCopy["it-sales-support"];
 return <>
  <section className="detail-hero"><div className="container detail-grid"><div><p className="eyebrow">Service detail</p><div className="detail-icon"><I/></div><h1>{service.title}</h1><p>{copy.intro}</p><a className="button button-dark" href="/contact">Discuss your requirement <ArrowRight size={17}/></a></div><div className="detail-image"><img src={service.image} alt={service.title}/></div></div></section>
  <section className="section"><div className="container detail-body"><div><p className="eyebrow">Our approach</p><h2>{copy.detail}</h2><p>We keep scope clear, explain the important decisions and build a practical handover path so the system remains usable after installation.</p></div><div className="detail-points">{service.points.map(p=><div key={p}><CheckCircle2 size={18}/>{p}</div>)}</div></div></section>
  <section className="section soft"><div className="container process"><div><span>01</span><h3>Understand</h3><p>Review the site, users, workflow and current technology.</p></div><div><span>02</span><h3>Recommend</h3><p>Define a suitable scope with clear priorities and options.</p></div><div><span>03</span><h3>Implement</h3><p>Install, configure, test and hand over the system professionally.</p></div><div><span>04</span><h3>Support</h3><p>Stay available for maintenance, changes and future needs.</p></div></div></section>
  <section className="contact-band"><div className="container"><ShieldCheck/><h2>Need {service.title.toLowerCase()} for your business?</h2><a href="tel:+918080495101">Call +91 8080495101</a></div></section>
  <CTA />
 </>;
}
