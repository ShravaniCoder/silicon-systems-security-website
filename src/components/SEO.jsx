import { useEffect } from "react";

const SITE_URL = "https://sstm.in";

const seoData = {
  // =========================
  // HOME
  // =========================

  "/": {
    title:
      "IT, Security & ELV Solutions in Mulund, Mumbai | Silicon Systems & Securities",

    description:
      "Silicon Systems & Securities provides IT, security and Electronic Low Voltage (ELV) solutions in Mulund, Mumbai, Maharashtra and Thane, including CCTV, fire alarm, access control, structured cabling, IT support and infrastructure services.",
  },

  // =========================
  // ABOUT
  // =========================

  "/about": {
    title: "About Silicon Systems & Securities | IT, Security & ELV Solutions",

    description:
      "Silicon Systems & Securities delivers IT infrastructure, security and Electronic Low Voltage (ELV) solutions for businesses in Mulund, Mumbai, Maharashtra, Thane and surrounding areas.",
  },

  // =========================
  // SERVICES
  // =========================

  "/services": {
    title:
      "IT, Security & ELV Services in Mumbai | Silicon Systems & Securities",

    description:
      "Explore IT sales and support, website development, domain and hosting, CCTV surveillance, fire alarm systems, biometric access control, structured cabling, voice evacuation, IT maintenance and ELV project services.",
  },

  // =========================
  // SOLUTIONS
  // =========================

  "/solutions": {
    title:
      "Business IT, Security & ELV Solutions | Silicon Systems & Securities",

    description:
      "Integrated IT, security and Electronic Low Voltage (ELV) solutions for corporate workplaces, institutions, campuses, retail, commercial environments and infrastructure projects across Mulund, Mumbai, Thane and Maharashtra.",
  },

  // =========================
  // CONTACT
  // =========================

  "/contact": {
    title:
      "Contact IT, Security & ELV Experts in Mulund, Mumbai | Silicon Systems & Securities",

    description:
      "Contact Silicon Systems & Securities for IT, CCTV, fire alarm, access control, structured cabling, ELV projects, networking, website development, hosting and IT infrastructure requirements in Mumbai and Thane.",
  },

  // ==================================================
  // SERVICES
  // ==================================================

  "/services/it-sales-support": {
    title:
      "IT Sales & Support in Mulund, Mumbai | Silicon Systems & Securities",

    description:
      "Business IT sales and technical support including computers, laptops, peripherals, device configuration, troubleshooting and AMC support for businesses in Mumbai and Thane.",
  },

  "/services/website-development": {
    title:
      "Website Development Services in Mumbai | Silicon Systems & Securities",

    description:
      "Professional responsive website development with SEO-friendly structure, corporate interfaces, deployment and hosting assistance for businesses in Mumbai, Mulund and Thane.",
  },

  "/services/domain-hosting-email": {
    title:
      "Domain, Web Hosting & Email Services | Silicon Systems & Securities",

    description:
      "Domain registration, web hosting, business email configuration, website migration and deployment support for businesses in Mumbai, Mulund, Thane and Maharashtra.",
  },

  "/services/cctv-surveillance": {
    title:
      "CCTV Surveillance Systems in Mumbai & Thane | Silicon Systems & Securities",

    description:
      "CCTV surveillance solutions including camera planning, indoor and outdoor coverage, NVR/DVR configuration, remote viewing and system support for offices, businesses and commercial properties.",
  },

  "/services/fire-alarm-systems": {
    title: "Fire Alarm Systems in Mumbai | Silicon Systems & Securities",

    description:
      "Fire alarm and detection systems with site assessment, device planning, alarm infrastructure, notification configuration, testing and maintenance for commercial and business environments.",
  },

  "/services/access-control": {
    title:
      "Biometric & Access Control Systems in Mumbai | Silicon Systems & Securities",

    description:
      "Biometric attendance and access control solutions including door readers, user enrollment, permissions and system configuration for businesses in Mulund, Mumbai and Thane.",
  },

  "/services/structured-cabling": {
    title:
      "Structured Cabling Solutions in Mumbai & Thane | Silicon Systems & Securities",

    description:
      "Professional structured cabling and network infrastructure including LAN cabling, racks, patch panels, network points and wireless infrastructure preparation for connected workplaces.",
  },

  "/services/voice-evacuation": {
    title: "Voice Evacuation Systems in Mumbai | Silicon Systems & Securities",

    description:
      "Voice evacuation and emergency communication systems including speaker planning, amplification, emergency announcements, zone configuration and testing.",
  },

  "/services/it-maintenance": {
    title:
      "IT Maintenance Services in Mulund, Mumbai | Silicon Systems & Securities",

    description:
      "Proactive IT maintenance including system health checks, preventive maintenance, troubleshooting, issue resolution and annual maintenance support for businesses in Mumbai and Thane.",
  },

  // =========================
  // ELV
  // =========================

  "/services/elv-projects": {
    title:
      "ELV Projects & Solutions in Mumbai & Thane | Silicon Systems & Securities",

    description:
      "Electronic Low Voltage (ELV) project solutions for CCTV, access control, fire alarm, structured cabling, voice evacuation, networking and integrated security infrastructure across Mulund, Mumbai, Thane and Maharashtra.",
  },
};

const DEFAULT_SEO = {
  title: "Silicon Systems & Securities | IT, Security & ELV Solutions",

  description:
    "Silicon Systems & Securities provides IT, security and Electronic Low Voltage (ELV) solutions for businesses in Mumbai, Thane and Maharashtra.",
};

function setMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setProperty(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export default function SEO({ path }) {
  useEffect(() => {
    const currentPath =
      path || window.location.pathname.replace(/\/+$/, "") || "/";

    const seo = seoData[currentPath] || DEFAULT_SEO;

    const canonicalPath = currentPath === "/" ? "" : currentPath;

    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    // =========================
    // PAGE TITLE
    // =========================

    document.title = seo.title;

    // =========================
    // META DESCRIPTION
    // =========================

    setMeta("description", seo.description);

    // =========================
    // ROBOTS
    // =========================

    setMeta("robots", "index, follow");

    // =========================
    // OPEN GRAPH
    // =========================

    setProperty("og:title", seo.title);

    setProperty("og:description", seo.description);

    setProperty("og:type", "website");

    setProperty("og:url", canonicalUrl);

    setProperty("og:site_name", "Silicon Systems & Securities");

    // =========================
    // TWITTER
    // =========================

    setMeta("twitter:card", "summary_large_image");

    setMeta("twitter:title", seo.title);

    setMeta("twitter:description", seo.description);

    // =========================
    // CANONICAL
    // =========================

    setCanonical(canonicalUrl);
  }, [path]);

  return null;
}
