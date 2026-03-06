import { useT } from "../../i18n/context";

export default function Footer() {
  const t = useT();

  return (
    <footer className="py-12 bg-charcoal border-t border-white/10 text-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-display font-bold text-white">Preq Station</span>
            <span> — {t.footer.tagline}</span>
          </div>
          <div>{t.footer.madeWith}</div>
          <div className="text-sm">{t.footer.copyright}</div>
        </div>
        <div className="flex justify-center gap-4 mt-6 text-xs text-white/40">
          <a href="/privacy" className="hover:text-white/70 transition">{t.footer.privacy}</a>
          <span>·</span>
          <a href="/terms" className="hover:text-white/70 transition">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
