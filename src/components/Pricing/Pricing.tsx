import { motion } from "motion/react";
import { useT } from "../../i18n/context";

export default function Pricing() {
  const t = useT();

  return (
    <section className="py-24 bg-steel/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal">
            {t.pricing.title}
          </h2>
          <p className="text-charcoal/60 mt-4">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-12 border border-steel"
        >
          <div className="font-display text-6xl font-bold text-mint">{t.pricing.price}</div>
          <div className="text-charcoal/50 text-lg mt-2">{t.pricing.priceLabel}</div>

          <div className="h-px bg-steel my-8" />

          <ul className="text-left space-y-4">
            {t.pricing.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-mint font-bold">✓</span>
                <span className="text-charcoal/70">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://github.com"
            className="inline-block bg-charcoal text-white px-8 py-4 rounded-full mt-8 hover:bg-charcoal/80 transition font-display font-semibold"
          >
            {t.pricing.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
