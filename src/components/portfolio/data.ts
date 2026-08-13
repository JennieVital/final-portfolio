export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Jennie Viev Vital",
  role: "Information Technology",
  email: "jennieviev.vital@gmail.com",
  location: "Caloocan, Philippines",
  imageUrl: "/profile-photo.jpg",
  imageAlt: "Jennie Viev Vital profile photo",
  availability: "Available for freelance projects & full-time roles",
  tagline: "Building high-performance, responsive websites with clean, maintainable code.",
  summary:
    "I design and develop web applications, with hands-on experience in Cisco Networking using Cisco Packet Tracer. I focus on building fast, accessible, and scalable applications using HTML5, CSS, JavaScript, PHP, SQL, React, and TypeScript.",
  github: "https://github.com/JennieVital",
  linkedin: "https://www.linkedin.com/in/jennie-viev-vital-a8294028b/?skipRedirect=true",
};

export interface SkillItem {
  name: string;
  category: "Frontend" | "Backend & DB" | "Tools & Cloud";
  level: string;
  experience: string;
  description: string;
  iconName: string;
}

export const SKILLS: SkillItem[] = [
  {
    name: "HTML5",
    category: "Frontend",
    level: "Advanced",
    experience: "3 Years",
    description: "Accessible semantic HTML structure.",
    iconName: "Code2",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Advanced",
    experience: "3 Years",
    description: "Responsive layouts, glassmorphism UI, custom animations.",
    iconName: "Palette",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Intermediate",
    experience: "2 Years",
    description: "State management, strict typing, modules.",
    iconName: "FileCode2",
  },
  {
    name: "React",
    category: "Frontend",
    level: "Basic",
    experience: "2 Years",
    description: "Component architecture, context API, routing, client state.",
    iconName: "Atom",
  },
  {
    name: "Bootstrap Framework",
    category: "Frontend",
    level: "Intermediate",
    experience: "1 Year",
    description: "Responsive prototyping and custom utilities",
    iconName: "LayoutGrid",
  },
  {
    name: "PHP Development",
    category: "Backend & DB",
    level: "Basic",
    experience: "1 Year",
    description: "Object-oriented PHP, REST APIs, form processing.",
    iconName: "Server",
  },
  {
    name: "SQL & Relational Databases",
    category: "Backend & DB",
    level: "Intermediate",
    experience: "2 Years",
    description: "MySQL, phpMyAdmin and complex JOIN queries",
    iconName: "Database",
  },
  {
    name: "Node.js",
    category: "Backend & DB",
    level: "Basic",
    experience: "1 Year",
    description: "REST API endpoints, npm package management, server routing.",
    iconName: "Cpu",
  },
  {
    name: "Java & Python Foundations",
    category: "Backend & DB",
    level: "Basic",
    experience: "1 Year",
    description: "Object-oriented programming and data structures.",
    iconName: "Terminal",
  },
  {
    name: "Cisco Packet Tracer",
    category: "Tools & Cloud",
    level: "Intermediate",
    experience: "Hands-on Experience",
    description: "Network topology design, VLAN configuration, subnetting",
    iconName: "Network",
  },
  {
    name: "GitHub",
    category: "Tools & Cloud",
    level: "Intermediate",
    experience: "3 Years",
    description: "Branching strategies, pull requests, version history management.",
    iconName: "GitBranch",
  },
  {
    name: "Figma & UI Prototyping",
    category: "Tools & Cloud",
    level: "Advanced",
    experience: "3 Years",
    description: "Wireframing, UI layout design, asset export, design system handoff.",
    iconName: "Figma",
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  details: string;
  role: string;
  stack: string[];
  year: string;
  demoUrl?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "zoe-engineering",
    name: "Zoe H&C Engineering Design Services",
    category: "Corporate & Engineering",
    summary:
      "Modern corporate portal and service showcase for an engineering firm, engineered for high performance and fast mobile load times.",
    details:
      "Architected a comprehensive service catalog, project showcase gallery, and client inquiry flow. Built with clean semantic HTML5, modular CSS grid layouts, and lightweight JavaScript for smooth transitions without heavy dependencies.",
    role: "Full-Stack Developer & Designer",
    stack: ["HTML5", "CSS", "JavaScript"],
    year: "2024",
    demoUrl: "https://www.zoehomeplannerconsultancy.com/",
  },
  {
    id: "batangas-lomi",
    name: "Home of the Authentic Lomi Batangas",
    category: "Restaurant",
    summary:
      "Vibrant culinary landing page featuring visual menu showcases, multi-branch locator, and table reservation request system.",
    details:
      "Prioritized fast image delivery, clear typography, and accessible navigation for mobile restaurant diners.",
    role: "Full-Stack Developer & Designer",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2026",
    demoUrl: "https://arcado-flame.vercel.app/",
  },
  {
    id: "turn-traders",
    name: "Turn-Traders OPC Enterprise Site",
    category: "Business & Commerce",
    summary:
      "Corporate web presence for a trading enterprise, highlighting product lines, company credentials, and direct lead generation.",
    details:
      "Collaborated directly with enterprise leadership to structure clear value propositions, trust badges, and direct contact hooks. Implemented strict form validation and automated email notifications.",
    role: "Full-Stack Developer & Designer",
    stack: ["HTML5", "CSS", "JavaScript"],
    year: "2025",
    demoUrl: "https://turn-traders-project.vercel.app/",
  },
  {
    id: "math-illusion",
    name: "The Mathematics of Illusion",
    category: "Interactive Learning App",
    summary:
      "An interactive web platform illustrating mathematical concepts behind optical illusions through real-time code rendering.",
    details:
      "Self-initiated educational web app built with React, TypeScript, and Tailwind CSS. Users can manipulate parameters in real-time to visualize how geometry, trigonometry, and optical geometry work together.",
    role: "Full-Stack Developer, Designer & Author",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025",
    demoUrl: "https://math-tricks-eight.vercel.app/",
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  skillsAcquired: string[];
  badgeColor: string;
  credentialUrl?: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "oci-foundations",
    title: "SQL and Relational Databases 101",
    issuer: "IBM skills network",
    year: "2024",
    skillsAcquired: ["Cloud Architecture", "OCI"],
    badgeColor: "from-[#BDE0FE]/30 to-white border-[#A2D2FF]/50 text-[#A2D2FF]",
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/e03e041d00aa4e3a93bdcdf3a4f51631",
  },
  {
    id: "oci-data",
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2024",
    skillsAcquired: ["Autonomous DB", "Data Storage & Objects"],
    badgeColor: "from-[#FFC8DD]/30 to-white border-[#CDB4DB]/50 text-[#FFAFCC]",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=30C340ECDDFFD61F4702EF74B940479F162399DDB6052E2137E65B2ED3BFF1FE#",
  },
  {
    id: "oci-ai",
    title: "Oracle Cloud Infrastructure 2024 Data Certified Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2024",
    skillsAcquired: ["Data Core Concepts", "OCI Vision & Language APIs"],
    badgeColor: "from-[#BDE0FE]/30 to-white border-[#A2D2FF]/50 text-[#A2D2FF]",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=30C340ECDDFFD61F4702EF74B940479FC362DA7A79E6E61621C92256B9AC1C72",
  },
  {
    id: "osi",
    title: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    year: "2024",
    skillsAcquired: ["Data Core Concepts", "OCI Vision & APIs"],
    badgeColor: "from-[#BDE0FE]/30 to-white border-[#A2D2FF]/50 text-[#A2D2FF]",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A236A0E15249CFC689C2A55D050D34A5DFCF9B3626BE0A5D3FD47921ACB2A67A",
  },
  {
    id: "opswat-icip",
    title: "Introduction to Critical Infrastructure Protection",
    issuer: "OPSWAT Academy",
    year: "2026",
    skillsAcquired: ["Threat Prevention", "Infrastructure Protection", "Cyber Hygiene"],
    badgeColor: "from-[#FFC8DD]/25 to-white border-[#CDB4DB]/50 text-slate-700",
    credentialUrl: "https://learn.opswatacademy.com/certificate/TzsOEIaUTw",
  },
];

export const STATS = [
  { value: "4+", label: "Production & Client Projects", sub: "Websites & Web Apps" },
  { value: "5", label: "Professional Industry Certifications", sub: "Oracle & OPSWAT" },
  { value: "8+", label: "Programming Languages & Tools", sub: "HTML, CSS, JS, PHP, SQL, React" },
  { value: "100%", label: "Code Quality & Performance", sub: "Responsive & Accessible" },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/JennieVital", iconName: "Github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jennie-viev-vital-a8294028b/?skipRedirect=true",
    iconName: "Linkedin",
  },
];
