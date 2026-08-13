import { CertificationItem } from "./data";
import { X, ExternalLink, Award, CheckCircle2, ShieldCheck, Calendar } from "lucide-react";

interface CertificationModalProps {
  certification: CertificationItem | null;
  onClose: () => void;
}

export function CertificationModal({ certification, onClose }: CertificationModalProps) {
  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div
        className="fixed inset-0 bg-slate-900/20 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#CDB4DB] bg-white shadow-2xl shadow-black/10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#CDB4DB]/40 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#FFC8DD]/40 text-slate-700 border border-[#CDB4DB]">
              <Award className="size-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-[#A2D2FF]">{certification.issuer}</p>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                {certification.title}
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

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid gap-4">
            <div className="rounded-xl border border-[#BDE0FE] bg-[#BDE0FE]/15 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <Calendar className="size-4 text-[#A2D2FF]" />
                <span>Issued Year</span>
              </div>
              <p className="font-mono text-sm font-semibold text-slate-900">{certification.year}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600">
              Credential Overview
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {certification.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-600">
              Verified Skills & Competencies
            </h4>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {certification.skillsAcquired.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-lg border border-[#CDB4DB]/60 bg-[#FFC8DD]/20 p-3 text-xs text-slate-900"
                >
                  <CheckCircle2 className="size-4 text-[#A2D2FF] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#A2D2FF]/50 bg-[#BDE0FE]/25 p-4 text-xs text-[#A2D2FF]">
            <span className="flex items-center gap-2 font-semibold">
              <ShieldCheck className="size-4" />
              Verified Industry Certification
            </span>
            <span className="font-mono text-[11px] text-slate-600">{certification.issuer}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#CDB4DB]/40 bg-[#BDE0FE]/10 px-6 py-4">
          {certification.credentialUrl ? (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FFAFCC] px-4 py-2.5 text-xs font-bold text-slate-900 transition-all hover:bg-[#FFC8DD]"
            >
              <ExternalLink className="size-4" />
              <span>Verify Official Credential</span>
            </a>
          ) : (
            <span className="font-mono text-xs text-slate-500">Credential Link Available</span>
          )}

          <button
            onClick={onClose}
            className="rounded-xl border border-[#CDB4DB] px-4 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-[#FFC8DD]/30 hover:text-slate-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
