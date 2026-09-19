import { useEffect } from "react";

const SITE_URL = "https://sstm.in";

const seoData = {
  // ============================================================
  // HOME
  // ============================================================

  "/": {
    title:
      "IT, Website, Security & ELV Solutions in Mulund, Mumbai | Silicon Systems & Securities",

    description:
      "Silicon Systems & Securities provides website development, domain registration, web hosting, business email, IT support, CCTV, fire alarm, access control, structured cabling, IT maintenance and ELV solutions in Mulund, Mumbai, Thane and Maharashtra.",

    keywords: [
      "IT services Mumbai",
      "IT services Thane",
      "IT services Maharashtra",

      "website development Mumbai",
      "website development Thane",
      "website development Maharashtra",

      "domain registration Mumbai",
      "domain registration Thane",
      "domain registration Maharashtra",

      "web hosting Mumbai",
      "web hosting Thane",
      "web hosting Maharashtra",

      "business email Mumbai",
      "business email Thane",
      "business email Maharashtra",

      "CCTV Mumbai",
      "CCTV Thane",
      "CCTV Maharashtra",

      "fire alarm systems Mumbai",
      "fire alarm systems Thane",
      "fire alarm systems Maharashtra",

      "access control Mumbai",
      "access control Thane",
      "access control Maharashtra",

      "structured cabling Mumbai",
      "structured cabling Thane",
      "structured cabling Maharashtra",

      "voice evacuation Mumbai",
      "voice evacuation Thane",
      "voice evacuation Maharashtra",

      "IT maintenance Mumbai",
      "IT maintenance Thane",
      "IT maintenance Maharashtra",

      "ELV solutions Mumbai",
      "ELV solutions Thane",
      "ELV solutions Maharashtra",
      "ELV projects Mumbai",
      "ELV projects Thane",
      "ELV projects Maharashtra",
    ],
  },

  // ============================================================
  // ABOUT
  // ============================================================

  "/about": {
    title:
      "About Silicon Systems & Securities | IT, Web, Security & ELV Solutions",

    description:
      "Silicon Systems & Securities provides website development, domain and hosting, business email, IT infrastructure, security and ELV solutions for businesses in Mulund, Mumbai, Thane and Maharashtra.",

    keywords: [
      "Silicon Systems and Securities",
      "Silicon Systems Mumbai",
      "Silicon Systems Mulund",
      "IT company Mulund",
      "IT company Mumbai",
      "technology company Mumbai",
      "IT infrastructure Mumbai",
      "security company Mumbai",
      "ELV company Mumbai",

      "website development Mumbai",
      "website development Mulund",
      "web development company Mumbai",

      "domain registration Mumbai",
      "web hosting Mumbai",
      "business email Mumbai",
      "business email services Mumbai",

      "CCTV company Mumbai",
      "fire alarm company Mumbai",
      "access control company Mumbai",
      "structured cabling company Mumbai",
      "IT maintenance Mumbai",

      "ELV projects Mumbai",
      "ELV solutions Thane",
      "IT services Thane",
    ],
  },

  // ============================================================
  // SERVICES
  // ============================================================

  "/services": {
    title: "Website, Hosting, Email, IT, Security & ELV Services in Mumbai",

    description:
      "Explore Silicon Systems & Securities services including website development, domain registration, web hosting, business email, IT sales and support, CCTV, fire alarm, access control, structured cabling, voice evacuation, IT maintenance and ELV projects.",

    keywords: [
      // ⭐ Website Development
      "website development Mumbai",
      "website development Mulund",
      "website development Thane",
      "web development company Mumbai",
      "website development company Mumbai",
      "business website development Mumbai",
      "corporate website development Mumbai",
      "responsive website development",
      "SEO website development Mumbai",
      "website design Mumbai",

      // ⭐ Domain
      "domain registration Mumbai",
      "domain registration Mulund",
      "domain name registration Mumbai",
      "domain services Mumbai",
      "domain management Mumbai",

      // ⭐ Hosting
      "web hosting Mumbai",
      "web hosting Mulund",
      "web hosting Thane",
      "website hosting Mumbai",
      "business hosting Mumbai",
      "corporate hosting Mumbai",
      "domain hosting services Mumbai",

      // ⭐ Business Email
      "business email Mumbai",
      "business email services Mumbai",
      "business email setup Mumbai",
      "professional business email Mumbai",
      "business email hosting Mumbai",
      "corporate email Mumbai",
      "company email setup Mumbai",
      "domain based email Mumbai",

      // IT
      "IT services Mumbai",
      "IT sales Mumbai",
      "IT support Mumbai",
      "IT support Mulund",
      "computer sales Mumbai",
      "IT hardware Mumbai",
      "technical support Mumbai",
      "IT AMC Mumbai",

      // CCTV
      "CCTV Mumbai",
      "CCTV installation Mumbai",
      "CCTV surveillance Mumbai",
      "CCTV camera Mumbai",
      "CCTV solutions Mulund",

      // Fire
      "fire alarm systems Mumbai",
      "fire alarm installation Mumbai",
      "fire safety systems Mumbai",
      "fire alarm company Mumbai",

      // Access Control
      "biometric systems Mumbai",
      "biometric attendance Mumbai",
      "access control systems Mumbai",
      "access control installation Mumbai",

      // Networking
      "structured cabling Mumbai",
      "structured cabling Mulund",
      "LAN cabling Mumbai",
      "network cabling Mumbai",
      "network infrastructure Mumbai",

      // Voice
      "voice evacuation Mumbai",
      "voice evacuation systems Mumbai",
      "emergency communication systems Mumbai",
      "PA system Mumbai",

      // Maintenance
      "IT maintenance Mumbai",
      "IT maintenance Mulund",
      "computer maintenance Mumbai",
      "IT AMC services Mumbai",

      // ELV
      "ELV projects Mumbai",
      "ELV solutions Mumbai",
      "ELV company Mumbai",
      "Electronic Low Voltage Mumbai",
      "ELV services Mumbai",
      "ELV contractor Mumbai",

      // Locations
      "IT services Thane",
      "security solutions Thane",
      "ELV projects Thane",
      "technology solutions Maharashtra",
    ],
  },

  // ============================================================
  // SOLUTIONS
  // ============================================================

  "/solutions": {
    title: "Business IT, Website, Security & ELV Solutions | Mumbai & Thane",

    description:
      "Integrated business technology solutions including website development, domain and hosting, business email, IT infrastructure, CCTV, access control, fire alarm, networking and ELV systems for businesses across Mumbai, Thane and Maharashtra.",

    keywords: [
      // Digital Business Solutions
      "business website solutions Mumbai",
      "website solutions Mumbai",
      "corporate website solutions Mumbai",
      "domain solutions Mumbai",
      "web hosting solutions Mumbai",
      "business email solutions Mumbai",

      // IT
      "business IT solutions Mumbai",
      "corporate IT solutions Mumbai",
      "IT infrastructure solutions Mumbai",
      "technology solutions Mumbai",
      "IT solutions Thane",

      // Security
      "business security solutions Mumbai",
      "corporate security solutions Mumbai",
      "CCTV solutions Mumbai",
      "access control solutions Mumbai",
      "fire alarm solutions Mumbai",

      // Networking
      "network infrastructure Mumbai",
      "structured cabling solutions Mumbai",
      "IT networking solutions Mumbai",

      // ELV
      "ELV solutions Mumbai",
      "ELV infrastructure Mumbai",
      "ELV projects Mumbai",
      "integrated ELV solutions",
      "Electronic Low Voltage solutions Mumbai",

      // Corporate
      "corporate workplace technology",
      "corporate workplace security",
      "office IT solutions Mumbai",
      "office security solutions Mumbai",

      // Institutions
      "institution IT solutions Mumbai",
      "campus security solutions Mumbai",
      "campus networking solutions Mumbai",

      // Retail
      "retail security solutions Mumbai",
      "commercial security solutions Mumbai",
      "retail CCTV Mumbai",

      // Infrastructure
      "IT infrastructure projects Mumbai",
      "security infrastructure Mumbai",
      "ELV infrastructure projects",
      "technology infrastructure Thane",
    ],
  },

  // ============================================================
  // CONTACT
  // ============================================================

  "/contact": {
    title: "Contact IT, Website, Security & ELV Experts in Mulund, Mumbai",

    description:
      "Contact Silicon Systems & Securities for website development, domain registration, web hosting, business email, IT support, CCTV, fire alarm, access control, networking and ELV projects in Mumbai and Thane.",

    keywords: [
      "IT company contact Mumbai",
      "IT services Mulund",
      "IT solutions Mulund",
      "website development Mumbai",
      "website development Mulund",
      "domain registration Mumbai",
      "web hosting Mumbai",
      "business email Mumbai",
      "business email services Mumbai",
      "IT support Mumbai",
      "CCTV company Mumbai",
      "fire alarm company Mumbai",
      "access control company Mumbai",
      "structured cabling Mumbai",
      "ELV company Mumbai",
      "ELV projects Mumbai",
      "IT maintenance Mumbai",
      "IT services Thane",
    ],
  },

  // ============================================================
  // IT SALES & SUPPORT
  // ============================================================

  "/services/it-sales-support": {
    title:
      "IT Sales & Support in Mulund, Mumbai | Silicon Systems & Securities",

    description:
      "IT sales and technical support for businesses including computers, laptops, peripherals, device configuration, troubleshooting, user support and AMC services in Mumbai and Thane.",

    keywords: [
      "IT sales Mumbai",
      "IT sales Mulund",
      "IT support Mumbai",
      "IT support Mulund",
      "IT support Thane",
      "IT company Mumbai",
      "computer sales Mumbai",
      "laptop sales Mumbai",
      "computer peripherals Mumbai",
      "IT hardware Mumbai",
      "technical support Mumbai",
      "business IT support Mumbai",
      "IT AMC Mumbai",
      "computer maintenance Mumbai",
    ],
  },

  // ============================================================
  // WEBSITE DEVELOPMENT
  // ============================================================

  "/services/website-development": {
    title: "Website Development Company in Mumbai | Mulund & Thane",

    description:
      "Professional website development services in Mumbai, Mulund and Thane including business websites, corporate websites, responsive design, SEO-friendly structure, deployment and hosting assistance.",

    keywords: [
      "website development Mumbai",
      "website development Mulund",
      "website development Thane",
      "website development company Mumbai",
      "web development company Mumbai",
      "web development company Mulund",
      "business website development Mumbai",
      "business website design Mumbai",
      "corporate website development Mumbai",
      "corporate website design Mumbai",
      "professional website development Mumbai",
      "responsive website development Mumbai",
      "SEO friendly website development",
      "website design Mumbai",
      "website development Maharashtra",
      "website development services Thane",
    ],
  },

  // ============================================================
  // DOMAIN & HOSTING
  // IMPORTANT: your siteData slug was "domain-hosting"
  // ============================================================

  "/services/domain-hosting": {
    title: "Domain Registration & Web Hosting in Mumbai | Silicon Systems",

    description:
      "Domain registration, web hosting, website deployment, migration and hosting support for businesses in Mulund, Mumbai, Thane and Maharashtra.",

    keywords: [
      "domain registration Mumbai",
      "domain registration Mulund",
      "domain registration Thane",
      "domain name registration Mumbai",
      "domain services Mumbai",
      "domain management Mumbai",

      "web hosting Mumbai",
      "web hosting Mulund",
      "web hosting Thane",
      "website hosting Mumbai",
      "business web hosting Mumbai",
      "corporate web hosting Mumbai",
      "reliable web hosting Mumbai",

      "domain and hosting Mumbai",
      "domain hosting services Mumbai",
      "website deployment Mumbai",
      "website migration Mumbai",
      "hosting support Mumbai",
    ],
  },

  // ============================================================
  // CCTV
  // ============================================================

  "/services/cctv-surveillance": {
    title: "CCTV Surveillance & Installation in Mumbai | Mulund & Thane",

    description:
      "CCTV surveillance and installation solutions for offices, businesses, retail spaces, warehouses and commercial properties across Mulund, Mumbai and Thane.",

    keywords: [
      "CCTV Mumbai",
      "CCTV installation Mumbai",
      "CCTV surveillance Mumbai",
      "CCTV camera Mumbai",
      "CCTV company Mumbai",
      "CCTV solutions Mumbai",
      "CCTV Mulund",
      "CCTV installation Mulund",
      "CCTV Thane",
      "CCTV installation Thane",
      "security camera Mumbai",
      "commercial CCTV Mumbai",
      "office CCTV Mumbai",
      "NVR DVR installation Mumbai",
      "remote CCTV monitoring Mumbai",
    ],
  },

  // ============================================================
  // FIRE ALARM
  // ============================================================

  "/services/fire-alarm-systems": {
    title: "Fire Alarm Systems in Mumbai | Installation & Maintenance",

    description:
      "Fire alarm and detection systems with site assessment, device planning, alarm infrastructure, notification configuration, testing and maintenance for businesses in Mumbai and Thane.",

    keywords: [
      "fire alarm systems Mumbai",
      "fire alarm installation Mumbai",
      "fire alarm company Mumbai",
      "fire detection systems Mumbai",
      "fire safety systems Mumbai",
      "fire alarm Mulund",
      "fire alarm installation Mulund",
      "fire alarm Thane",
      "commercial fire alarm Mumbai",
      "office fire alarm Mumbai",
      "fire alarm maintenance Mumbai",
      "fire safety solutions Mumbai",
    ],
  },

  // ============================================================
  // ACCESS CONTROL
  // ============================================================

  "/services/access-control": {
    title: "Biometric & Access Control Systems in Mumbai | Mulund & Thane",

    description:
      "Biometric attendance and access control solutions including door readers, user enrollment, permissions and secure entry systems for businesses in Mumbai, Mulund and Thane.",

    keywords: [
      "biometric systems Mumbai",
      "biometric attendance Mumbai",
      "biometric access control Mumbai",
      "access control systems Mumbai",
      "access control installation Mumbai",
      "access control company Mumbai",
      "biometric company Mumbai",
      "door access control Mumbai",
      "RFID access control Mumbai",
      "employee attendance system Mumbai",
      "access control Mulund",
      "biometric systems Thane",
    ],
  },

  // ============================================================
  // STRUCTURED CABLING
  // ============================================================

  "/services/structured-cabling": {
    title: "Structured Cabling & Network Infrastructure in Mumbai | Thane",

    description:
      "Professional structured cabling and network infrastructure including LAN cabling, racks, patch panels, network points and wireless infrastructure preparation for businesses in Mumbai and Thane.",

    keywords: [
      "structured cabling Mumbai",
      "structured cabling Mulund",
      "structured cabling Thane",
      "structured cabling company Mumbai",
      "LAN cabling Mumbai",
      "network cabling Mumbai",
      "network infrastructure Mumbai",
      "data cabling Mumbai",
      "CAT6 cabling Mumbai",
      "server rack installation Mumbai",
      "patch panel installation Mumbai",
      "network wiring Mumbai",
      "IT networking Mumbai",
    ],
  },

  // ============================================================
  // VOICE EVACUATION
  // ============================================================

  "/services/voice-evacuation": {
    title: "Voice Evacuation Systems in Mumbai | Emergency Communication",

    description:
      "Voice evacuation and emergency communication systems including speaker planning, amplification, emergency announcements, zone configuration and testing for commercial environments.",

    keywords: [
      "voice evacuation system Mumbai",
      "voice evacuation Mumbai",
      "voice evacuation Mulund",
      "voice evacuation Thane",
      "emergency voice evacuation Mumbai",
      "emergency communication system Mumbai",
      "public address system Mumbai",
      "PA system Mumbai",
      "emergency announcement system Mumbai",
      "voice evacuation installation Mumbai",
    ],
  },

  // ============================================================
  // IT MAINTENANCE
  // ============================================================

  "/services/it-maintenance": {
    title: "IT Maintenance Services in Mulund, Mumbai | IT AMC & Support",

    description:
      "Professional IT maintenance and AMC services including system health checks, preventive maintenance, troubleshooting, issue resolution and technical support for businesses in Mumbai and Thane.",

    keywords: [
      "IT maintenance Mumbai",
      "IT maintenance Mulund",
      "IT maintenance Thane",
      "IT AMC Mumbai",
      "IT AMC Mulund",
      "computer maintenance Mumbai",
      "IT support services Mumbai",
      "technical support Mumbai",
      "IT infrastructure maintenance",
      "annual maintenance contract Mumbai",
      "business IT maintenance",
      "computer support Mumbai",
    ],
  },

  // ============================================================
  // ELV PROJECTS
  // ============================================================

  "/services/elv-projects": {
    title: "ELV Projects & Solutions in Mumbai | Mulund, Thane & Maharashtra",

    description:
      "Electronic Low Voltage (ELV) project solutions including CCTV, access control, fire alarm, structured cabling, voice evacuation, networking and integrated security infrastructure across Mulund, Mumbai, Thane and Maharashtra.",

    keywords: [
      "ELV projects Mumbai",
      "ELV solutions Mumbai",
      "ELV company Mumbai",
      "ELV contractor Mumbai",
      "ELV services Mumbai",
      "Electronic Low Voltage Mumbai",
      "Electronic Low Voltage solutions",
      "ELV installation Mumbai",
      "ELV projects Mulund",
      "ELV solutions Mulund",
      "ELV projects Thane",
      "ELV contractor Thane",
      "ELV solutions Maharashtra",
      "integrated ELV solutions",
      "ELV infrastructure",
      "low voltage systems Mumbai",
      "security ELV systems",
      "commercial ELV projects",
      "building ELV solutions",
      "CCTV ELV",
      "access control ELV",
      "fire alarm ELV",
      "structured cabling ELV",
      "voice evacuation ELV",
    ],
  },
};

// ============================================================
// DEFAULT SEO
// ============================================================

const DEFAULT_SEO = {
  title: "Silicon Systems & Securities | IT, Website, Security & ELV Solutions",

  description:
    "Silicon Systems & Securities provides website development, domain registration, web hosting, business email, IT, security and Electronic Low Voltage (ELV) solutions in Mulund, Mumbai, Thane and Maharashtra.",

  keywords: [
    "Silicon Systems and Securities",
    "IT solutions Mumbai",
    "IT services Mulund",
    "website development Mumbai",
    "domain registration Mumbai",
    "web hosting Mumbai",
    "business email Mumbai",
    "CCTV Mumbai",
    "fire alarm Mumbai",
    "access control Mumbai",
    "structured cabling Mumbai",
    "IT maintenance Mumbai",
    "ELV solutions Mumbai",
  ],
};

// ============================================================
// META HELPERS
// ============================================================

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

// ============================================================
// SEO COMPONENT
// ============================================================

export default function SEO({ path }) {
  useEffect(() => {
    const currentPath =
      path || window.location.pathname.replace(/\/+$/, "") || "/";

    const seo = seoData[currentPath] || DEFAULT_SEO;

    const canonicalPath = currentPath === "/" ? "" : currentPath;

    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    // ========================================================
    // TITLE
    // ========================================================

    document.title = seo.title;

    // ========================================================
    // DESCRIPTION
    // ========================================================

    setMeta("description", seo.description);

    // ========================================================
    // KEYWORDS
    // ========================================================
    // Kept for SEO planning/content consistency.
    // Google does not use meta keywords as a ranking factor.
    // ========================================================

    setMeta("keywords", seo.keywords.join(", "));

    // ========================================================
    // ROBOTS
    // ========================================================

    setMeta("robots", "index, follow");

    // ========================================================
    // OPEN GRAPH
    // ========================================================

    setProperty("og:title", seo.title);

    setProperty("og:description", seo.description);

    setProperty("og:type", "website");

    setProperty("og:url", canonicalUrl);

    setProperty("og:site_name", "Silicon Systems & Securities");

    // ========================================================
    // TWITTER / X
    // ========================================================

    setMeta("twitter:card", "summary_large_image");

    setMeta("twitter:title", seo.title);

    setMeta("twitter:description", seo.description);

    // ========================================================
    // CANONICAL
    // ========================================================

    setCanonical(canonicalUrl);
  }, [path]);

  return null;
}
