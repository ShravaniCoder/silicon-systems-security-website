import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_LINK } from "../data/siteData";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/solutions", "Solutions"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // set correct state on mount (e.g. after refresh mid-scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-shell">
        <a href="/" onClick={() => setOpen(false)} className="brand">
          <Logo className="brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={location.pathname === href ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="nav-phone" href="tel:+918080495101">
            <Phone size={15} /> 80804 95101
          </a>
          <a className="nav-cta" href="/contact">
            Request Assistance <ArrowRight size={15} />
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-call"
            href="tel:+918080495101"
            onClick={() => setOpen(false)}
          >
            <Phone size={16} /> Call 80804 95101
          </a>
          <a
            className="mobile-wa"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
