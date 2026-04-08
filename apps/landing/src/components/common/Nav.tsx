"use client";

import { useState, useRef, useEffect } from "react";
import { type Locale } from "../../i18n";
import { useT } from "../../i18n/context";

const localeLabels: Record<string, string> = {
  en: "English",
  ko: "한국어",
};

const localeFlags: Record<string, string> = {
  en: "EN",
  ko: "KO",
};

function getLocalePath(locale: Locale) {
  return locale === "en" ? "/" : `/${locale}/`;
}

export default function Nav({ locale, guideHref }: { locale: Locale; guideHref: string }) {
  const t = useT();
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const desktopSections = t.nav.sections.filter((section) => section.id !== "overview");
  const primarySections = desktopSections.slice(0, 3);
  const overflowSections = desktopSections.slice(3);

  function handleSectionJump(id: string) {
    setIsLocaleOpen(false);
    setIsMenuOpen(false);
    setIsMoreOpen(false);

    if (typeof window === "undefined") return;

    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${id}`);
    }, 20);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsLocaleOpen(false);
        setIsMenuOpen(false);
        setIsMoreOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsLocaleOpen(false);
        setIsMenuOpen(false);
        setIsMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, [isMenuOpen]);

  const otherLocales = (Object.keys(localeLabels) as Locale[]).filter((l) => l !== locale);

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
          {primarySections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSectionJump(section.id)}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {section.label}
            </button>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMoreOpen((current) => !current)}
              className="flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white"
              aria-expanded={isMoreOpen}
              aria-label={t.nav.moreLabel}
            >
              <span className="font-medium">{t.nav.moreLabel}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`opacity-50 transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 mt-2 min-w-[190px] overflow-hidden rounded-xl border border-white/10 bg-charcoal shadow-xl backdrop-blur-xl">
                {overflowSections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleSectionJump(section.id)}
                    className="block w-full px-4 py-2.5 text-left text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://github.com/sonim1/preqstation"
            aria-label={t.nav.github}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.53 9.53 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
            </svg>
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
            href={guideHref}
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
        <>
          <div className="fixed inset-x-0 bottom-0 top-14 z-40 bg-charcoal sm:hidden" />
          <div
            id="mobile-nav-panel"
            className="fixed inset-x-0 top-14 z-50 px-4 py-4 sm:hidden"
          >
            <div className="rounded-[28px] border border-white/10 bg-charcoal p-4 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/sonim1/preqstation"
                  aria-label={t.nav.github}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.53 9.53 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                  </svg>
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
                  href={guideHref}
                  className="rounded-full bg-mint px-5 py-3 text-center text-sm font-semibold text-charcoal transition hover:opacity-90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.cta}
                </a>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    {t.nav.jumpLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.nav.sections.map((section) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => handleSectionJump(section.id)}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
                      >
                        {section.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
