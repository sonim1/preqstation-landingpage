"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "../../i18n/context";

export default function FAQ() {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#1e2528]/90">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            {t.faq.title}
          </h2>
        </motion.div>

        <div className="mt-16 space-y-4">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-white/5 transition text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display font-semibold text-lg text-white">
                  {item.question}
                </span>
                <span
                  className="text-white/50 transition-transform duration-300 ml-4 flex-shrink-0"
                  style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-6 pb-6 text-white/60 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faq.items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
