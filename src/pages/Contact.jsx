import { Mail, MapPin, Phone, MessageCircle, ArrowRight, Clock3 } from "lucide-react";
import { WHATSAPP_LINK } from "../data/siteData";
import PageHero from "../components/PageHero";
import CTA from "../components/CTA";

export default function Contact() {
 return <>
  <PageHero eyebrow="Contact Silicon Systems & Securities" title="Let's turn your requirement into a practical plan." text="Tell us what you are trying to improve, install or protect. We can help you define the right technology scope before work begins." image="/images/contact-page.svg" />
  <section className="section"><div className="container contact-grid"><div><p className="eyebrow">Start a conversation</p><h2>Tell us what needs to work better.</h2><p>Whether you are planning a new office setup, upgrading security, resolving recurring IT issues or building a digital presence, start with the requirement. We will help shape the next step.</p><div className="contact-details"><a href="tel:+918080495101"><span><Phone/></span><div><b>Call our team</b><small>+91 8080495101</small></div></a><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><b>WhatsApp</b><small>Quick project conversation</small></div></a><a href="mailto:info@sstm.in"><span><Mail/></span><div><b>Email</b><small>info@sstm.in</small></div></a><div><span><MapPin/></span><div><b>Service area</b><small>India</small></div></div><div><span><Clock3/></span><div><b>Enquiries</b><small>Business hours • response focused</small></div></div></div></div>
  <form className="contact-form" onSubmit={e=>{e.preventDefault(); alert("Thank you. Please call or WhatsApp us to complete your enquiry.");}}><p className="eyebrow">Project enquiry</p><h3>Give us a little context.</h3><label>Full name<input required placeholder="Your name"/></label><label>Business email<input required type="email" placeholder="you@company.com"/></label><label>Phone number<input required placeholder="+91"/></label><label>What do you need help with?<textarea required rows="5" placeholder="For example: CCTV for an office, network setup, website development..."/></label><button className="button button-dark" type="submit">Send enquiry <ArrowRight size={17}/></button><small>Your details are used only to respond to this enquiry.</small></form></div></section>
  <section className="section soft"><div className="container contact-note"><p className="eyebrow">Before you contact us</p><h2>Useful details make the first conversation more productive.</h2><div><span>01</span><p>What are you installing, upgrading or fixing?</p><span>02</span><p>What kind of site or business is involved?</p><span>03</span><p>Is there an existing system we need to work with?</p></div></div></section>
  <CTA dark />
 </>;
}
