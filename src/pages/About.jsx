import { ArrowRight, CheckCircle2, Target, Eye, ShieldCheck, Users, Layers3 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import CTA from "../components/CTA";
import { advantages } from "../data/siteData";

export default function About() {
 return (
   <>
     <PageHero
       eyebrow="About Silicon Systems & Securities"
       title="A technology partner built around reliability."
       text="We bring IT infrastructure, security systems, safety solutions and digital services together with a practical, business-first approach."
       image="/images/AboutH.png"
     />
     <section className="section">
       <div className="container split about-split">
         <div>
           <p className="eyebrow">Who we are</p>
           <h2 style={{ color: "#000000" }}>
             We connect the technology behind the work with the security around
             it.
           </h2>
         </div>
         <div>
           <p>
             Silicon Systems & Securities helps businesses create technology
             environments that are easier to use, easier to maintain and better
             prepared for change.
           </p>
           <p>
             Our work spans workplace IT, surveillance, access control, fire
             detection, networking, websites, hosting and maintenance. Instead
             of treating each requirement as an isolated purchase, we consider
             how the systems will operate together.
           </p>
           <p>
             That means clearer recommendations before installation, cleaner
             execution on site and a practical support path after handover.
           </p>
           <a href="/contact" className="text-link">
             Plan your requirement <ArrowRight size={15} />
           </a>
         </div>
       </div>
     </section>
     <section className="section soft">
       <div className="container">
         <SectionTitle
           eyebrow="How we work"
           title="A straightforward process, without unnecessary complexity."
           text="Good technology decisions start with understanding the environment. We keep that process clear from the first conversation to ongoing support."
         />
         <div className="principle-grid">
           <div>
             <Target />
             <h3>Understand first</h3>
             <p>
               We look at your site, users, workflow and practical priorities
               before recommending equipment or systems.
             </p>
           </div>
           <div>
             <Layers3 />
             <h3>Design the whole picture</h3>
             <p>
               We consider infrastructure, connectivity, security, safety and
               future expansion rather than designing each piece in isolation.
             </p>
           </div>
           <div>
             <ShieldCheck />
             <h3>Support after handover</h3>
             <p>
               Installation is only one part of the relationship. We remain
               available for maintenance, troubleshooting and improvements.
             </p>
           </div>
         </div>
       </div>
     </section>
     <section className="section">
       <div className="container split">
         <div>
           <p className="eyebrow">Why businesses work with us</p>
           <h2 style={{ color: "#000000" }}>
             Clear communication. Professional execution. Long-term
             accountability.
           </h2>
           <p className="muted-light" style={{ color: "var(--muted)" }}>
             Our role is to make technology decisions easier to understand and
             easier to manage, whether you need one service or a complete setup.
           </p>
         </div>
         <div className="check-list">
           {advantages.map((x) => (
             <div key={x}>
               <CheckCircle2 size={18} />
               {x}
             </div>
           ))}
         </div>
       </div>
     </section>
     <section className="section soft">
       <div className="container about-values">
         <div>
           <Users />
           <p className="eyebrow">Our promise</p>
           <h2>Technology should support your people—not slow them down.</h2>
         </div>
         <p>
           From the device on a desk to the camera at an entry point, every
           system affects the way a business operates. We focus on dependable
           foundations, sensible configurations and service that stays
           understandable after the installation team leaves.
         </p>
       </div>
     </section>
     <CTA dark />
   </>
 );
}
