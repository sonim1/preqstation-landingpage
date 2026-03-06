import { useT } from "../../i18n/context";

export default function Nav({ locale }: { locale: string }) {
  const t = useT();
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-md bg-charcoal/90">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="font-display text-xl font-bold text-white">Preq Station</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            className="text-white/70 hover:text-white transition text-sm font-medium"
          >
            {t.nav.github}
          </a>
          <span className="text-sm font-medium">
            <a
              href="/"
              className={locale === "en" ? "font-bold text-white" : "text-white/40 hover:text-white/70 transition"}
            >
              EN
            </a>
            {" | "}
            <a
              href="/ko/"
              className={locale === "ko" ? "font-bold text-white" : "text-white/40 hover:text-white/70 transition"}
            >
              KO
            </a>
          </span>
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
