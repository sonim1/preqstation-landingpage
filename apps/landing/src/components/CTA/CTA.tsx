import { motion } from "motion/react";
import { useT } from "../../i18n/context";
import CtaProofPanel from "./CtaProofPanel";

export default function CTA({ guideHref }: { guideHref: string }) {
  const t = useT();

  return (
    <section className="py-24 bg-charcoal/90 text-white text-center">
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

          <div className="mt-12 text-left">
            <CtaProofPanel proof={t.cta.proof} />
          </div>

          <div className="flex gap-4 justify-center mt-12 flex-wrap">
            <a
              href="#workflow"
              className="bg-mint text-charcoal px-10 py-5 rounded-full text-lg font-display font-bold hover:scale-105 transition"
            >
              {t.cta.primary}
            </a>
            <a
              href={guideHref}
              className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-display font-semibold hover:bg-white hover:text-charcoal transition"
            >
              {t.cta.guide}
            </a>
            <a
              href="https://github.com/sonim1/preqstation"
              className="px-6 py-5 text-lg font-display font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline transition"
            >
              {t.cta.secondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
