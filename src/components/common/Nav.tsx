"use client";

import { useState, useRef, useEffect } from "react";
import { useT } from "../../i18n/context";

const localeLabels: Record<string, string> = {
  en: "English",
  ko: "한국어",
};

const localeFlags: Record<string, string> = {
  en: "EN",
  ko: "KO",
};

function getLocalePath(locale: string) {
  return locale === "en" ? "/" : `/${locale}/`;
}

export default function Nav({ locale }: { locale: string }) {
  const t = useT();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const otherLocales = Object.keys(localeLabels).filter((l) => l !== locale);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-charcoal/90">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-display text-xl font-bold text-white">Preq Station</span>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com"
            className="text-white/70 hover:text-white transition text-sm font-medium"
          >
            {t.nav.github}
          </a>

          {/* Language switcher */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition px-2 py-1 rounded-lg hover:bg-white/5"
              aria-label="Change language"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="font-medium">{localeFlags[locale]}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 bg-charcoal border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[140px] backdrop-blur-xl">
                {/* Current locale */}
                <div className="px-4 py-2.5 text-sm text-white/40 flex items-center gap-2 border-b border-white/10">
                  <span>{localeFlags[locale]}</span>
                  <span>{localeLabels[locale]}</span>
                </div>
                {/* Other locales */}
                {otherLocales.map((l) => (
                  <a
                    key={l}
                    href={getLocalePath(l)}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition flex items-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <span>{localeFlags[l]}</span>
                    <span>{localeLabels[l]}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="bg-mint text-charcoal rounded-full px-6 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
