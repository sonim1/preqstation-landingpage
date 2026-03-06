import { motion } from "motion/react";
import { useT } from "../../i18n/context";

export default function MultiEngine() {
  const t = useT();
  return (
    <section className="py-24 bg-charcoal/85">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            {t.multiEngine.title}
          </h2>
          <p className="text-white/60 text-center mt-4">
            {t.multiEngine.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {t.multiEngine.engines.map((engine, i) => (
            <motion.div
              key={engine.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`h-2 ${engine.accent} rounded-t-xl`} />
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-b-xl border border-white/10 h-full flex flex-col">
                <div
                  className={`w-12 h-12 ${engine.logoBg} text-white rounded-xl flex items-center justify-center font-display font-bold text-xl`}
                >
                  {engine.logo}
                </div>
                <div className="font-display text-xl font-bold mt-4 text-white">
                  {engine.name}
                </div>
                <div className="text-white/50 text-sm">{engine.company}</div>
                <p className="text-white/60 mt-3 flex-1">{engine.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {engine.bestFor.map((item) => (
                    <span key={item} className="text-xs bg-white/10 rounded-full px-3 py-1 text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
