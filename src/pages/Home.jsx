
import { ArrowRight, CheckCircle2, ShieldCheck, Headphones, Network, MessageCircle } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import CTA from "../components/CTA";
import { services, advantages, solutions, WHATSAPP_LINK } from "../data/siteData";

export default function Home() {
 return (
   <>
     <section className="hero">
       <picture>
         <source media="(max-width: 767px)" srcSet="/Mobilehero.png" />

         <img
           src="/Hero.png"
           alt="IT, security and ELV solutions for businesses in Mulund, Mumbai and Thane"
         />
       </picture>

       <div className="hero-shade" />

       <div className="hero-content container">
         {/* SEO-friendly eyebrow */}
         <p className="eyebrow light">
           <span />
           IT & Security Solutions Provider in India
         </p>

         {/* Main H1 */}
         <h1>
           Technology that works.
           <br />
           <em>Security you can trust.</em>
         </h1>

         {/* SEO-friendly introduction */}
         <p className="hero-copy">
           Complete IT, domain registration, website development, web hosting,
           business email and IT support solutions, built to keep modern
           businesses connected, secure and supported. From CCTV surveillance,
           fire alarm systems, biometric & access control, structured cabling,
           voice evacuation and IT maintenance to integrated ELV projects, we
           deliver dependable technology and security solutions.
         </p>

         {/* CTA buttons */}
         <div className="hero-actions">
           <a className="button button-gold" href="/services">
             Explore Services
             <ArrowRight size={17} />
           </a>

           <a
             className="button button-glass"
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Contact Silicon Systems and Securities on WhatsApp"
           >
             <MessageCircle size={17} />
             Chat on WhatsApp
           </a>
         </div>

         {/* Business highlights */}
         <div className="hero-stats">
           <div>
             <b>12+</b>
             <span>Years Experience</span>
           </div>

           <div>
             <b>9</b>
             <span>Core Services</span>
           </div>

           <div>
             <b>ELV</b>
             <span>Project Solutions</span>
           </div>
         </div>
       </div>
     </section>

     <section className="intro section">
       <div className="container intro-grid">
         <div>
           <p className="eyebrow">Silicon Systems & Securities</p>
           <h2>One roof. Total technology & security.</h2>
         </div>
         <p>
           We bring everyday IT, physical security, safety systems, networking
           and digital services together under one accountable team—so your
           business can operate with confidence.
         </p>
       </div>
     </section>

     <section className="section services-preview">
       <div className="container">
         <SectionTitle
           eyebrow="What we do"
           title="Solutions built around your business"
           text="From infrastructure to security, every service is planned for practical performance and long-term value."
         />
         <div className="service-grid">
           {services.slice(0, 6).map((s) => {
             const I = s.icon;
             return (
               <a
                 className="service-card"
                 href={`/services/${s.slug}`}
                 key={s.slug}
               >
                 <div className="service-icon">
                   <I size={23} />
                 </div>
                 <h3>{s.title}</h3>
                 <p>{s.description}</p>
                 <span>
                   Discover service <ArrowRight size={14} />
                 </span>
               </a>
             );
           })}
         </div>
         <div className="center">
           <a href="/services" className="text-link">
             View all services <ArrowRight size={15} />
           </a>
         </div>
       </div>
     </section>

     <section className="section dark-panel">
       <div className="container split">
         <div>
           <p className="eyebrow light">Why choose us</p>
           <h2>A single team for the systems your business depends on.</h2>
           <p className="muted-light">
             Our approach combines professional installation, straightforward
             advice and responsive technical support.
           </p>
           <a className="button button-gold" href="/about">
             About our approach <ArrowRight size={17} />
           </a>
         </div>
         <div className="advantage-list">
           {advantages.map((x, i) => (
             <div key={x}>
               <span>0{i + 1}</span>
               <CheckCircle2 size={17} />
               <b>{x}</b>
             </div>
           ))}
         </div>
       </div>
     </section>

     <section className="section">
       <div className="container">
         <SectionTitle
           eyebrow="Built for business"
           title="Where technology meets real-world operations"
         />
         <div className="solution-grid">
           {solutions.map((s) => {
             const I = s.icon;
             return (
               <div className="solution-card" key={s.title}>
                 <I />
                 <h3>{s.title}</h3>
                 <p>{s.text}</p>
               </div>
             );
           })}
         </div>
       </div>
     </section>
     <CTA />
   </>
 );
}
