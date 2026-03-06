import { motion } from "motion/react";
import { useT } from "../../i18n/context";

export default function CTA() {
  const t = useT();

  return (
    <section className="py-24 bg-charcoal text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {t.cta.title}
          </h2>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex gap-4 justify-center mt-12 flex-wrap">
            <a
              href="#"
              className="bg-mint text-charcoal px-10 py-5 rounded-full text-lg font-display font-bold hover:scale-105 transition"
            >
              {t.cta.primary}
            </a>
            <a
              href="https://github.com"
              className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-display font-semibold hover:bg-white hover:text-charcoal transition"
            >
              {t.cta.secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
