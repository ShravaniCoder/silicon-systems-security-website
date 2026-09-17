
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../data/siteData";
export default function CTA({ dark=false }) {
 return <section className={`cta ${dark ? "cta-dark" : ""}`}><div><p className="eyebrow">Start a conversation</p><h2>Ready to build a more secure, connected business?</h2><p>Tell us what you need. Our team will help you plan the right technology solution.</p></div><div className="cta-actions"><a className="button button-gold" href="/contact">Request Assistance <ArrowRight size={17}/></a><a className="button button-outline-light" href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a></div></section>
}
