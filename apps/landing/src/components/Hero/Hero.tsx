import { motion } from "motion/react";
import { useT } from "../../i18n/context";
import LetterFlip from "./LetterFlip";

export default function Hero({ guideHref }: { guideHref: string }) {
  const t = useT();
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-charcoal/80 to-[#1e2528]/80">
      <div className="max-w-4xl mx-auto text-center px-6 py-24">
        <img
          src="/brand/logo.webp"
          alt="PREQSTATION logo"
          className="mx-auto mb-6 h-16 w-auto sm:h-20"
          loading="eager"
          decoding="async"
        />

        {/* Subtitle badge */}
        <span className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-body text-white/70 mb-6">
          {t.hero.badge}
        </span>

        {/* Preq/Prep Station flip */}
        <LetterFlip
          preqTagline={t.hero.preqTagline}
          prepTagline={t.hero.prepTagline}
        />

        {/* Main title */}
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-white whitespace-pre-line mt-6">
          {t.hero.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-white/60 max-w-2xl mx-auto mt-6 font-body leading-relaxed">
          {t.hero.description}
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center mt-10 flex-wrap">
          <a
            href="#workflow"
            className="bg-mint text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition font-body"
          >
            {t.hero.cta}
          </a>
          <a
            href={guideHref}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-charcoal transition font-body"
          >
            {t.hero.guideCta}
          </a>
          <a
            href="https://github.com/sonim1/preqstation"
            className="px-4 py-4 text-lg font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline transition font-body"
          >
            {t.hero.github}
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm text-white/50 mt-8 font-body">
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
              className="bg-white/5 backdrop-blur-xl rounded-lg shadow-lg p-4 border border-white/10 w-48 text-left"
            >
              {/* Perforated edge */}
              <div className="border-b-2 border-dashed border-white/10 pb-2 mb-3" />

              <p className="font-mono text-xs text-white/60 mb-1">{ticket.number}</p>
              <p className="font-body text-sm font-semibold text-white mb-3 leading-snug">
                {ticket.task}
              </p>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${ticket.dotColor}`} />
                <span className="font-body text-xs text-white/70">
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
