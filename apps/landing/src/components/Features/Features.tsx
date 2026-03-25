import { motion } from "motion/react";
import { useT } from "../../i18n/context";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Features() {
  const t = useT();
  return (
    <section className="py-24 bg-[#1e2528]/90">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            {t.features.title}
          </h2>
          <p className="text-white/60 text-center mt-4 text-lg">
            {t.features.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.features.items.map((feature) => (
            <motion.div
              key={feature.number}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-xl rounded-b-xl shadow-lg overflow-hidden"
            >
              {/* Torn ticket top edge */}
              <div
                className="h-4 bg-warm-yellow w-full"
                style={{
                  maskImage:
                    "repeating-linear-gradient(90deg, transparent 0px, transparent 6px, black 6px, black 12px), linear-gradient(to bottom, transparent 0px, transparent 4px, black 4px)",
                  WebkitMaskImage:
                    "repeating-linear-gradient(90deg, transparent 0px, transparent 6px, black 6px, black 12px), linear-gradient(to bottom, transparent 0px, transparent 4px, black 4px)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />

              <div className="p-8">
                <span className="font-mono text-6xl font-bold text-white/20 leading-none block">
                  {feature.number}
                </span>
                <div className="text-3xl mt-2">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mt-4">
                  {feature.title}
                </h3>
                <p className="text-white/60 mt-2 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
