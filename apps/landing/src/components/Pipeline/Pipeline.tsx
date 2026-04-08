import { motion } from "motion/react";
import { useT } from "../../i18n/context";

const workflowStyles: Record<string, string> = {
  inbox: "border border-white/20 bg-charcoal text-white",
  todo: "border border-charcoal/20 bg-warm-yellow text-charcoal",
  hold: "border border-black/20 bg-coral text-white shadow-[4px_4px_0_rgba(18,23,24,0.9)] xl:translate-y-4",
  ready: "border border-charcoal/20 bg-review-blue text-charcoal",
  done: "border border-charcoal/20 bg-mint text-charcoal",
};

export default function Pipeline() {
  const t = useT();

  return (
    <section className="overflow-hidden bg-charcoal/90 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-5 py-8 text-left md:px-6 md:py-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
                {t.pipeline.title}
              </h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                {t.pipeline.subtitle}
              </p>
            </div>
            <div className="inline-flex items-center border border-white/20 bg-white/10 px-4 py-2 font-mono text-sm uppercase tracking-[0.14em] text-white/80">
              {t.pipeline.targetBadge}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {t.pipeline.steps.map((step, index) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`flex h-full flex-col ${workflowStyles[step.id]}`}
              >
                <div
                  className={`flex items-center justify-between border-b px-4 py-4 font-mono text-sm uppercase tracking-[0.16em] ${
                    step.id === "inbox"
                      ? "border-white/20 bg-white/5"
                      : step.id === "hold"
                        ? "border-black/20 bg-black/10"
                        : "border-charcoal/20 bg-black/5"
                  }`}
                >
                  <span>{step.label}</span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      step.id === "inbox"
                        ? "bg-steel"
                        : step.id === "hold"
                          ? "bg-white"
                          : "bg-charcoal"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      step.id === "inbox"
                        ? "text-white/60"
                        : step.id === "hold"
                          ? "text-white/80"
                          : "text-charcoal/70"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-left"
            >
              <p className="font-display text-xs uppercase tracking-[0.24em] text-mint">
                {t.pipeline.blocked}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {t.pipeline.blockedTooltip}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-left"
            >
              <p className="font-display text-xs uppercase tracking-[0.24em] text-review-blue">
                {t.pipeline.notTrackerTitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {t.pipeline.notTrackerDescription}
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
