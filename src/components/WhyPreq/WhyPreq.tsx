import { motion } from "motion/react";
import { useT } from "../../i18n/context";

export default function WhyPreq() {
  const t = useT();

  return (
    <section className="py-24 bg-charcoal/90 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {t.whyPreq.title}
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            {t.whyPreq.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.whyPreq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-mint/40 transition-colors"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="font-display text-xl font-bold text-white mt-4">
                {item.title}
              </h3>
              <p className="text-white/60 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
