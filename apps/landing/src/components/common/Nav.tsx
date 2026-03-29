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
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsLocaleOpen(false);
        setIsMenuOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsLocaleOpen(false);
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const otherLocales = Object.keys(localeLabels).filter((l) => l !== locale);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a
          href={getLocalePath(locale)}
          aria-label="PREQSTATION home"
          className="inline-flex items-center gap-2.5 transition hover:opacity-95"
        >
          <img
            src="/brand/logo.webp"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto sm:h-9"
            loading="eager"
            decoding="async"
          />
          <span
            className="text-sm font-semibold tracking-[0.16em] text-white sm:text-base"
            style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}
          >
            PREQSTATION
          </span>
        </a>

        <div className="hidden items-center gap-5 sm:flex">
          <a
            href="https://github.com/sonim1/preqstation"
            className="text-white/70 hover:text-white transition text-sm font-medium"
          >
            {t.nav.github}
          </a>

          <div className="relative">
            <button
              onClick={() => setIsLocaleOpen((current) => !current)}
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition px-2 py-1 rounded-lg hover:bg-white/5"
              aria-label={t.nav.localeLabel}
              aria-expanded={isLocaleOpen}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="font-medium">{localeFlags[locale]}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`opacity-50 transition-transform duration-200 ${isLocaleOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {isLocaleOpen && (
              <div className="absolute right-0 mt-2 bg-charcoal border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[140px] backdrop-blur-xl">
                <div className="px-4 py-2.5 text-sm text-white/40 flex items-center gap-2 border-b border-white/10">
                  <span>{localeFlags[locale]}</span>
                  <span>{localeLabels[locale]}</span>
                </div>
                {otherLocales.map((l) => (
                  <a
                    key={l}
                    href={getLocalePath(l)}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition flex items-center gap-2"
                    onClick={() => setIsLocaleOpen(false)}
                  >
                    <span>{localeFlags[l]}</span>
                    <span>{localeLabels[l]}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/guide/getting-started/overview"
            className="bg-mint text-charcoal rounded-full px-6 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 sm:hidden"
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="border-t border-white/10 bg-charcoal/95 px-4 py-4 sm:hidden"
        >
          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/sonim1/preqstation"
              className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.github}
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                {t.nav.localeLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {[locale, ...otherLocales].map((value) => (
                  <a
                    key={value}
                    href={getLocalePath(value)}
                    className={[
                      "rounded-full px-3 py-1.5 text-sm font-medium transition",
                      value === locale
                        ? "bg-white text-charcoal"
                        : "border border-white/10 text-white/75 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {localeLabels[value]}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/guide/getting-started/overview"
              className="rounded-full bg-mint px-5 py-3 text-center text-sm font-semibold text-charcoal transition hover:opacity-90"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
