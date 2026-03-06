import { motion } from "motion/react";
import { useT } from "../../i18n/context";

export default function Hero() {
  const t = useT();
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-kitchen-white to-steel/30">
      <div className="max-w-4xl mx-auto text-center px-6 py-24">
        {/* Subtitle badge */}
        <span className="inline-block bg-steel rounded-full px-4 py-1 text-sm font-body text-charcoal/70 mb-6">
          {t.hero.badge}
        </span>

        {/* Main title */}
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-charcoal whitespace-pre-line">
          {t.hero.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mt-6 font-body leading-relaxed">
          {t.hero.description}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center mt-10 flex-wrap">
          <a
            href="#"
            className="bg-mint text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition font-body"
          >
            {t.hero.cta}
          </a>
          <a
            href="https://github.com"
            className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-charcoal hover:text-white transition font-body"
          >
            {t.hero.github}
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm text-charcoal/50 mt-8 font-body">
          {t.hero.socialProof}
        </p>

        {/* Ticket cards */}
        <div className="flex gap-6 justify-center mt-16 flex-wrap">
          {t.hero.tickets.map((ticket, i) => (
            <motion.div
              key={ticket.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.15 },
                y: {
                  duration: 3,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="bg-white rounded-lg shadow-lg p-4 border border-steel w-48 text-left"
            >
              {/* Perforated edge */}
              <div className="border-b-2 border-dashed border-steel pb-2 mb-3" />

              <p className="font-mono text-xs text-charcoal/50 mb-1">{ticket.number}</p>
              <p className="font-body text-sm font-semibold text-charcoal mb-3 leading-snug">
                {ticket.task}
              </p>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${ticket.dotColor}`} />
                <span className="font-body text-xs text-charcoal/70">
                  {ticket.statusEmoji} {ticket.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
