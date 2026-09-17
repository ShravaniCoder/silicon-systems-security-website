import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { services, WHATSAPP_LINK } from "../data/siteData";

export default function Footer() {
  return <footer className="footer">
    <div className="footer-main">
      <div className="footer-brand">
        <div className="footer-logo-wrap"><Logo className="footer-logo" /></div>
        <p>Integrated IT, security, infrastructure and digital solutions for organisations that value dependable technology and clear support.</p>
        <div className="footer-badge">12+ years of dependable technology</div>
      </div>
      <div><h4>Services</h4>{services.slice(0,5).map(s => <a key={s.slug} href={`/services/${s.slug}`}>{s.title}</a>)}</div>
      <div><h4>Explore</h4><a href="/about">About Us</a><a href="/services">All Services</a><a href="/solutions">Solutions</a><a href="/contact">Contact Us</a></div>
      <div><h4>Contact</h4><a href="tel:+918080495101"><Phone size={15}/> +91 8080495101</a><a href="mailto:info@sstm.in"><Mail size={15}/> info@sstm.in</a><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><ArrowUpRight size={15}/> WhatsApp</a><span><MapPin size={15}/> India</span></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Silicon Systems & Securities. All Rights Reserved.</span><span>Original website artwork &amp; content prepared for SSTM.</span></div>
  </footer>
}
