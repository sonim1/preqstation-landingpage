import { motion } from "motion/react";
import { useT } from "../../i18n/context";
import SolutionProofPanel from "./SolutionProofPanel";

export default function Solution() {
  const t = useT();
  return (
    <section className="overflow-x-hidden py-24 bg-charcoal/85">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            {t.solution.title}
            <span className="ml-3 inline-block text-mint">{t.solution.highlight}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <SolutionProofPanel proof={t.solution.proof} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-charcoal text-white p-4 rounded-t-xl font-display text-lg font-semibold">
              {t.solution.chefHeader}
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-b-xl">
              {t.solution.chefItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0"
                >
                  <div className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/60 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-mint text-white p-4 rounded-t-xl font-display text-lg font-semibold">
              {t.solution.aiHeader}
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-b-xl">
              {t.solution.aiItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0"
                >
                  <div className="w-2 h-2 rounded-full bg-mint mt-2 shrink-0" />
                  <div>
                    <div className="font-display font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/60 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="font-display text-2xl md:text-3xl font-bold text-white relative inline-block">
            {t.solution.bottomMessage}
            <span className="absolute inset-x-0 bottom-0 h-3 bg-mint/20 -z-10 translate-y-1" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
