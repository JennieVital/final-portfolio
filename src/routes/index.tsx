import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import {
  CERTIFICATIONS,
  PROJECTS,
  SKILLS,
  STATS,
  PROFILE,
  SOCIALS,
  CertificationItem,
} from "@/components/portfolio/data";
import {
  Code2,
  Database,
  Layers,
  Check,
  Copy,
  Send,
  Award,
  Sparkles,
  MapPin,
  Mail,
  Github,
  Linkedin,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Toaster, toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jennie Viev Vital" },
      {
        name: "description",
        content:
          "Portfolio of Jennie Viev Vital, a website developer  building clean, accessible and scalable web applications with React, PHP, SQL, and HTML5/CSS3.",
      },
      { property: "og:title", content: "Jennie Viev Vital — Web Portfolio" },
      {
        property: "og:description",
        content:
          "Explore production projects, certifications, technical capabilities, and clean code samples by Jennie Viev Vital.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title?: string;
  intro?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#CDB4DB] bg-[#FFC8DD]/25 px-3.5 py-1 text-xs font-mono font-bold text-[#FFAFCC]">
        <Sparkles className="size-3.5" />
        <span>{eyebrow}</span>
      </div>
      {title ? (
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      ) : null}
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{intro}</p>}
    </div>
  );
}

function Index() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>("All");
  const [skillSearchQuery, setSkillSearchQuery] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = activeSkillCategory === "All" || skill.category === activeSkillCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(skillSearchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(skillSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#FFC8DD]/40 selection:text-slate-900"
    >
      <Toaster position="top-right" theme="light" />
      <Nav />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-12 lg:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Availability Pill */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#CDB4DB] bg-[#FFC8DD] px-4 py-1.5 font-mono text-xs font-semibold text-[#1F2937] shadow-sm">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1F2937] opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#1F2937]" />
                  </span>
                  <span>{PROFILE.availability}</span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl leading-[1.1]">
                  Hi! I am Jennie Viev Vital
                </h1>

                <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {PROFILE.summary}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-900 shadow-sm transition-all hover:border-[#FFC8DD] hover:bg-[#FFC8DD]/30 hover:scale-[1.02]"
                  >
                    <Layers className="size-4 text-slate-700" />
                    Explore Projects
                  </a>
                  <a
                    href="#certifications"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#A2D2FF] bg-white px-5 py-3 text-xs font-bold text-[#A2D2FF] transition-all hover:border-[#FFC8DD] hover:bg-[#FFC8DD]/25 hover:text-slate-900"
                  >
                    <Award className="size-4" />
                    View Certifications
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-2 py-3 text-xs font-bold text-slate-900 transition-colors hover:text-slate-600"
                  >
                    <Send className="size-4 text-slate-700" />
                    Contact Me
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 pt-2">
                  <span className="text-slate-500 uppercase tracking-widest text-[11px]">
                    Stack:
                  </span>
                  {[
                    "HTML5",
                    "CSS",
                    "JavaScript",
                    "PHP",
                    "SQL",
                    "React",
                    "TypeScript",
                    "Bootstrap",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#CDB4DB] bg-[#FFC8DD] px-2 py-0.5 text-[11px] text-[#1F2937]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats Panel */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-[#BDE0FE] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {STATS.map((stat, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-[#BDE0FE]/70 bg-white p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                      >
                        <p className="font-display text-2xl font-extrabold text-slate-900">
                          {stat.value}
                        </p>
                        <p className="mt-1 font-semibold text-xs text-slate-900">{stat.label}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-slate-600">{stat.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-24 border-t border-[#CDB4DB]/40 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Development"
              title="Focused on Quality, Speed and Accessibility"
              intro="Writing clean, standards-compliant code isn't just a habit, it's the core foundation of building software that scales seamlessly, stays resilient against cyber threats, and communicates reliably across complex network architectures."
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="panel p-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#FFC8DD]/40 text-slate-700 border border-[#CDB4DB]">
                  <Code2 className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Clean Semantic Code</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Structuring web applications using standard semantic HTML5, modular CSS
                  architecture, and clean JavaScript. Ensuring long-term readability and easy
                  maintenance.
                </p>
              </div>

              <div className="panel p-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#BDE0FE]/40 text-slate-700 border border-[#A2D2FF]">
                  <Database className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Backend & SQL Reliability</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Designing secure PHP APIs and optimized relational database schemas (MySQL / SQL)
                  with prepared statements, indexes, and normalized tables.
                </p>
              </div>

              <div className="panel p-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#FFC8DD]/40 text-slate-700 border border-[#CDB4DB]">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">Performance & Security</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Prioritizing fast page rendering, lightweight assets, cross-browser compatibility,
                  and cloud infrastructure security principles (Oracle OCI Certified).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-[#CDB4DB]/40 py-20 lg:py-28 bg-[#BDE0FE]/10"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Technical Capabilities"
              title="Programming Languages and Developer Toolkit"
              intro="The technologies, languages, and frameworks I use to build scalable web applications."
            />

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {["All", "Frontend", "Backend & DB", "Tools & Cloud"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSkillCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                      activeSkillCategory === cat
                        ? "bg-[#FFAFCC] text-[#1F2937] shadow-sm"
                        : "border border-[#CDB4DB] bg-white text-slate-600 hover:border-[#FFC8DD] hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="panel flex flex-col justify-between p-6 transition-all duration-300 hover:scale-[1.01]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md border border-[#CDB4DB] bg-[#FFC8DD]/50 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#1F2937]">
                        {skill.category}
                      </span>
                      <span className="font-mono text-xs text-slate-600">{skill.level}</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">{skill.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#CDB4DB]/40 pt-4 text-xs font-mono text-slate-600">
                    <span>Experience: {skill.experience}</span>
                    <CheckCircle2 className="size-4 text-[#A2D2FF]" />
                  </div>
                </div>
              ))}
            </div>

            {filteredSkills.length === 0 && (
              <div className="rounded-2xl border border-[#CDB4DB] bg-white p-12 text-center shadow-sm">
                <p className="text-slate-600 font-mono text-sm">
                  No skills found matching "{skillSearchQuery}".
                </p>
                <button
                  onClick={() => {
                    setSkillSearchQuery("");
                    setActiveSkillCategory("All");
                  }}
                  className="mt-4 text-xs font-mono text-[#A2D2FF] underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 border-t border-[#CDB4DB]/40 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Featured Projects"
              title="Real-World Clients"
              intro="Selected client work across corporate, restaurant, commerce, and interactive learning."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <div key={project.id} className="panel group flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-md border border-[#CDB4DB] bg-[#FFC8DD]/50 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#1F2937]">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-slate-600">{project.year}</span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1F2937]">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>

                    <p className="mt-4 font-mono text-xs text-slate-500">
                      Role: <span className="text-slate-700">{project.role}</span>
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#CDB4DB] bg-[#FFC8DD]/40 px-2.5 py-1 font-mono text-[11px] text-[#1F2937]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#CDB4DB]/40 pt-4">
                    {project.demoUrl && project.demoUrl !== "#" ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#FFAFCC] px-4 py-2 text-xs font-semibold text-slate-900 transition-colors hover:bg-[#FFC8DD]"
                      >
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-slate-500">Demo coming soon</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section
          id="certifications"
          className="scroll-mt-24 border-t border-[#CDB4DB]/40 py-20 lg:py-28 bg-[#BDE0FE]/10"
        >
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Credentials"
              title="Certifications"
              intro="Formal certifications in Relational Databases, Cloud Infrastructure, AI Foundations, and Cybersecurity."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="panel group flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl border border-[#CDB4DB] bg-[#FFC8DD]/40 text-slate-700">
                          <Award className="size-5" />
                        </div>
                        <div>
                          <p className="font-mono text-xs font-bold text-[#A2D2FF]">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-600">{cert.year}</span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-[#FFAFCC] transition-colors">
                      {cert.title}
                    </h3>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {cert.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-[#CDB4DB] bg-[#FFC8DD]/40 px-2.5 py-1 font-mono text-[11px] text-[#1F2937]"
                        >
                          ✓ {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#CDB4DB]/40 pt-4">
                    <span className="font-mono text-xs font-semibold text-[#A2D2FF] flex items-center gap-1.5">
                      <ShieldCheck className="size-4" />
                      Verified Certification
                    </span>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#CDB4DB] bg-white px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-700 transition-colors hover:border-[#FFC8DD] hover:text-slate-900"
                      >
                        <ExternalLink className="size-3.5 text-[#A2D2FF]" />
                        <span>Link</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 border-t border-[#CDB4DB]/40 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader eyebrow="Get In Touch" />

            <div className="max-w-xl space-y-6">
              <div className="panel p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#FFC8DD]/40 text-slate-700 border border-[#CDB4DB]">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-600">
                        Direct Email
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-900">{PROFILE.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="rounded-lg border border-[#CDB4DB] p-2 text-slate-600 hover:bg-[#FFC8DD]/30 hover:text-slate-900"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="size-4 text-[#FFAFCC]" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="panel p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#BDE0FE]/40 text-slate-700 border border-[#A2D2FF]">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-600">
                      Blk 1 Lot 25 Matrix Loop Street, North Matrixville Subdivision, Camarin North
                      Caloocan
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-900">
                      {PROFILE.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="panel p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-slate-600 mb-3">
                  Connect Online
                </p>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#CDB4DB] bg-white px-4 py-2 font-mono text-xs text-slate-700 transition-colors hover:border-[#FFC8DD] hover:bg-[#FFC8DD]/25 hover:text-slate-900"
                    >
                      {social.label === "GitHub" && <Github className="size-4 text-slate-700" />}
                      {social.label === "LinkedIn" && (
                        <Linkedin className="size-4 text-slate-700" />
                      )}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#CDB4DB]/40 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xs font-bold text-slate-900">{PROFILE.name}</p>
            <p className="mt-1 font-mono text-xs text-slate-600">Full-Stack Developer</p>
          </div>

          <div className="flex items-xs gap-4">
            <p className="font-mono text-center text-slate-600">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
