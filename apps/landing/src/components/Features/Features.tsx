import { motion } from "motion/react";
import { useT } from "../../i18n/context";

const storyVariants = {
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
          className="mt-16 space-y-10"
        >
          {t.features.items.map((item, index) => {
            const imageOrder = index % 2 === 0 ? "lg:order-1" : "lg:order-2";
            const copyOrder = index % 2 === 0 ? "lg:order-2" : "lg:order-1";

            return (
              <motion.article
                key={item.id}
                variants={storyVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:p-7"
              >
                <div className={imageOrder}>
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-charcoal/70">
                    <img
                      src={`/features/${item.id}.webp`}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className={copyOrder}>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-mint/80">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/68 md:text-lg">
                    {item.summary}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-relaxed text-white/72 md:text-base"
                      >
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-mint" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
