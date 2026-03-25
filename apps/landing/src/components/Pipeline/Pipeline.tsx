import { motion } from "motion/react";
import { useT } from "../../i18n/context";

const stepStyles: Record<string, string> = {
  inbox: "bg-steel text-charcoal",
  todo: "bg-warm-yellow text-charcoal",
  ready: "bg-review-blue text-charcoal",
  done: "bg-mint text-charcoal",
  hold: "bg-coral text-white",
};

export default function Pipeline() {
  const t = useT();
  const mainSteps = t.pipeline.steps.filter((step) => step.id !== "hold");
  const holdStep = t.pipeline.steps.find((step) => step.id === "hold");

  return (
    <section className="overflow-hidden bg-charcoal/90 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">{t.pipeline.title}</h2>
          <p className="mt-4 text-center text-lg text-white/60">{t.pipeline.subtitle}</p>
        </motion.div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="relative">
            <div className="absolute left-12 right-12 top-10 hidden h-px bg-white/10 md:block" />

            <div className="grid gap-5 md:grid-cols-4">
              {mainSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative z-10 rounded-2xl border border-white/10 bg-charcoal/70 p-5 text-left backdrop-blur-xl"
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${stepStyles[step.id]}`}
                  >
                    {step.icon}
                  </div>
                  <p className="mt-4 font-display text-2xl font-semibold text-white">{step.label}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-white/40">
                    {step.id}
                  </p>
                </motion.div>
              ))}
              {holdStep && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.22 }}
                  className="mx-auto mt-8 max-w-sm rounded-2xl border border-coral/30 bg-coral/10 p-5 text-left md:col-start-2 md:mx-0 md:mt-0"
                >
                  <div className="ml-12 hidden h-8 w-px bg-coral/40 md:block" />
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-coral text-2xl text-white">
                      {holdStep.icon}
                    </div>
                    <div>
                      <p className="font-display text-2xl font-semibold text-white">{holdStep.label}</p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.22em] text-coral/80">
                        {t.pipeline.holdLabel}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">
                        {t.pipeline.holdDescription}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-left">
              <p className="font-display text-xs uppercase tracking-[0.24em] text-mint">{t.pipeline.blocked}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{t.pipeline.blockedTooltip}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/10 px-5 py-4 text-left">
              <p className="font-display text-xs uppercase tracking-[0.24em] text-review-blue">{t.pipeline.notTrackerTitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{t.pipeline.notTrackerDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
