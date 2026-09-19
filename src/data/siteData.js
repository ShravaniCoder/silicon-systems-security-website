import { Monitor, Camera, Flame, Fingerprint, Globe, Network, Volume2, Wrench, Server, ShieldCheck, Cable, Building2, Landmark, BriefcaseBusiness } from "lucide-react";

export const WHATSAPP_LINK = "https://wa.me/918080495101?text=" + encodeURIComponent("Hi, I'd like to discuss an IT, security or infrastructure requirement.");

export const services = [
  {
    icon: Monitor,
    title: "IT Sales & Support",
    slug: "it-sales-support",
    description:
      "Business-ready computers, peripherals and responsive technical assistance for teams that cannot afford avoidable downtime.",
    image: "/images/it-support-photo.svg",
    points: [
      "Workstations, laptops and peripherals",
      "On-site troubleshooting and setup",
      "User support and device configuration",
      "Preventive care and AMC support",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    slug: "website-development",
    description:
      "Professional, responsive websites with a clear business message, polished interface and structure prepared for search visibility.",
    image: "/images/website-photo.svg",
    points: [
      "Responsive business interfaces",
      "SEO-friendly page structure",
      "Corporate and service websites",
      "Deployment and hosting assistance",
    ],
  },
  {
    icon: Network,
    title: "Domain, Web Hosting & Business Email",
    slug: "domain-hosting",
    description:
      "A dependable digital foundation for domains, hosting and business email, with practical migration and setup support.",
    image: "/images/hosting-photo.svg",
    points: [
      "Domain registration and management",
      "Web hosting setup",
      "Business email configuration",
      "Migration and deployment assistance",
    ],
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    slug: "cctv-surveillance",
    description:
      "Purpose-planned camera systems that improve visibility across offices, retail spaces, warehouses and other operational areas.",
    image: "/images/cctv-photo.svg",
    points: [
      "Site survey and camera planning",
      "Indoor, outdoor and coverage design",
      "NVR/DVR configuration",
      "Remote viewing and system support",
    ],
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    slug: "fire-alarm-systems",
    description:
      "Detection and notification systems planned around the building layout, operational needs and life-safety priorities.",
    image: "/images/fire-alarm-photo.svg",
    points: [
      "Site assessment and device planning",
      "Detection and alarm infrastructure",
      "Notification and zone configuration",
      "Testing, inspection and maintenance",
    ],
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access Control",
    slug: "access-control",
    description:
      "Modern access and attendance systems that help organisations manage authorised entry, movement and workforce records.",
    image: "/images/access-control-photo.svg",
    points: [
      "Biometric attendance systems",
      "Door access and reader setup",
      "User enrollment and permissions",
      "System support and configuration",
    ],
  },

  {
    icon: Cable,
    title: "Structured Cabling",
    slug: "structured-cabling",
    description:
      "Neat, documented cabling and network infrastructure that creates a reliable physical foundation for connected workplaces.",
    image: "/images/cabling-photo.svg",
    points: [
      "LAN and network cabling",
      "Rack and patch-panel organisation",
      "Network point planning",
      "Wireless infrastructure preparation",
    ],
  },
  {
    icon: Volume2,
    title: "Voice Evacuation Systems",
    slug: "voice-evacuation",
    description:
      "Clear emergency communication infrastructure for controlled announcements, alerting and evacuation support.",
    image: "/images/voice-photo.svg",
    points: [
      "Speaker and zone planning",
      "Amplification systems",
      "Emergency announcement configuration",
      "Testing and ongoing support",
    ],
  },
  {
    icon: Wrench,
    title: "IT Maintenance",
    slug: "it-maintenance",
    description:
      "Proactive maintenance and technical care that keeps business technology stable, supported and easier to manage.",
    image: "/images/maintenance-photo.svg",
    points: [
      "Preventive maintenance schedules",
      "Device and system health checks",
      "Issue diagnosis and resolution",
      "Annual maintenance support",
    ],
  },
];

export const solutions = [
 { icon: Building2, title: "Corporate Workplaces", text: "A coordinated technology layer for productive offices—from user devices and networks to surveillance and controlled access." },
 { icon: Landmark, title: "Institutions & Campuses", text: "Structured infrastructure, safety systems and connectivity planned for environments with multiple users and shared spaces." },
 { icon: BriefcaseBusiness, title: "Retail & Commercial", text: "Practical systems for protecting people and assets while keeping everyday operations visible, connected and responsive." },
 { icon: Server, title: "Infrastructure Projects", text: "A clear technical foundation covering cabling, servers, devices, security systems and the operational details between them." },
];

export const advantages = ["12+ Years of Industry Experience", "Integrated IT & Security Capability", "Professional Installation & Handover", "Business-Focused Recommendations", "Responsive Technical Support", "One Accountable Technology Partner"];
