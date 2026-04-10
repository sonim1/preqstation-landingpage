import { motion } from "motion/react";
import { useT } from "../../i18n/context";
import ProblemProofPanel from "./ProblemProofPanel";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Problem() {
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
            {t.problem.title}
          </h2>
          <p className="text-white/60 text-center mt-4 text-lg">
            {t.problem.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <ProblemProofPanel proof={t.problem.proof} />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.problem.painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 hover:border-coral/50 transition"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-white/60 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.problem.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`font-display text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
