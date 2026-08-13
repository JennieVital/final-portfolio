import { ProjectItem } from "./data";
import { X, ExternalLink, Layers, User, Calendar, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#CDB4DB] bg-white shadow-2xl shadow-black/10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#CDB4DB]/40 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#FFC8DD]/40 text-slate-900 border border-[#CDB4DB] font-mono text-xs font-bold">
              {project.year}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#A2D2FF]">
                {project.category}
              </p>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {project.name}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-[#CDB4DB] p-2 text-slate-600 transition-colors hover:bg-[#FFC8DD]/30 hover:text-slate-900"
            aria-label="Close dialog"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[#BDE0FE] bg-[#BDE0FE]/15 p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <User className="size-4 text-[#A2D2FF]" />
                Role & Responsibility
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">{project.role}</p>
            </div>

            <div className="rounded-xl border border-[#BDE0FE] bg-[#BDE0FE]/15 p-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <Calendar className="size-4 text-[#A2D2FF]" />
                Year Completed
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">{project.year}</p>
            </div>

            <div className="rounded-xl border border-[#BDE0FE] bg-[#BDE0FE]/15 p-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <Layers className="size-4 text-[#A2D2FF]" />
                Category
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">{project.category}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-600">
              Executive Summary
            </h4>
            <p className="mt-2 text-base leading-relaxed text-slate-600">{project.summary}</p>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-600">
              Architecture & Technical Details
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.details}</p>
          </div>

          {"highlights" in project &&
            Array.isArray((project as ProjectItem & { highlights?: string[] }).highlights) && (
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-600">
                  Key Achievements & Features
                </h4>
                <ul className="mt-3 space-y-2">
                  {(project as ProjectItem & { highlights: string[] }).highlights.map(
                    (highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="size-5 shrink-0 text-[#A2D2FF] mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-600">
              Technologies Used
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#CDB4DB] bg-[#FFC8DD]/50 px-3 py-1.5 font-mono text-xs font-semibold text-slate-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#CDB4DB]/40 bg-[#BDE0FE]/10 px-6 py-4">
          <div className="flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FFAFCC] px-4 py-2 text-xs font-semibold text-slate-900 transition-colors hover:bg-[#FFC8DD]"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
