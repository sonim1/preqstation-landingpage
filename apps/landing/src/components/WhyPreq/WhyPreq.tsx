import { motion } from "motion/react";
import { useT } from "../../i18n/context";

export default function WhyPreq() {
  const t = useT();

  return (
    <section className="py-24 bg-charcoal/90 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {t.whyPreq.title}
          </h2>
          <p className="text-white/60 mt-4 text-lg leading-relaxed">
            {t.whyPreq.intro}
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {t.whyPreq.sections.map((section, index) => (
            <motion.article
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <div className="border-b border-white/10 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-mint/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  {section.title}
                </h3>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
                  {t.whyPreq.problemLabel}
                </p>
                <div className="mt-4 space-y-4">
                  {section.problem.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-white/68 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-mint/80">
                  {t.whyPreq.solutionLabel}
                </p>
                <div className="mt-4 space-y-4">
                  {section.solution.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-white/78 md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
