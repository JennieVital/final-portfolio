import { useState, useEffect } from "react";
import { NAV, PROFILE } from "./data";
import { Menu, X, Send, Sparkles } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#CDB4DB]/50 bg-white/90 backdrop-blur-xl shadow-md shadow-black/5 py-3"
          : "border-b border-transparent bg-white/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative flex size-10 items-center justify-center rounded-xl border border-[#CDB4DB] bg-white font-mono text-sm font-bold text-slate-900 shadow-sm transition-all group-hover:border-[#FFC8DD]">
            <span>JV</span>
            <span className="absolute -right-0.5 -top-0.5 flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFAFCC] opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#FFAFCC]" />
            </span>
          </div>
          <div>
            <span className="block font-display text-sm font-bold tracking-tight text-slate-900 group-hover:text-[#FFAFCC] transition-colors">
              {PROFILE.name}
            </span>
            <span className="block font-mono text-[11px] text-slate-600">{PROFILE.role}</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-900 transition-colors hover:text-[#FFAFCC]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions & CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-[#A2D2FF] bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-sm transition-all hover:border-[#FFC8DD] hover:bg-[#FFC8DD]/20"
          >
            <Sparkles className="size-3.5 text-slate-700" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-[#CDB4DB] bg-white p-2.5 text-slate-700 transition-colors hover:border-[#FFC8DD] hover:text-slate-900 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <nav className="border-t border-[#CDB4DB]/40 bg-white/95 px-6 py-6 backdrop-blur-2xl md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-slate-900 hover:bg-[#FFC8DD]/20 hover:text-[#FFAFCC]"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-500">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-[#CDB4DB]/40">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#A2D2FF] bg-white py-3 text-sm font-bold text-slate-900 transition-colors hover:border-[#FFC8DD] hover:bg-[#FFC8DD]/20"
              >
                <Send className="size-4" />
                Start a Project
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
