"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { useT } from "../../i18n/context";

type CardItem = {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
};

type RowVariant = "for" | "fit";

function ScrollRow({
  items,
  variant,
  label,
  inView,
  rowIndex,
}: {
  items: readonly CardItem[];
  variant: RowVariant;
  label: string;
  inView: boolean;
  rowIndex: number;
}) {
  const isFor = variant === "for";
  const isFit = variant === "fit";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <div className="mb-12 last:mb-0">
      {/* Row label + arrows */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
        transition={{ duration: 0.45, delay: rowIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 mb-5 px-6 md:px-0"
      >
        <span
          className={[
            "inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold font-mono",
            isFor
              ? "bg-mint/15 text-mint"
              : "bg-review-blue/15 text-review-blue",
          ].join(" ")}
        >
          {isFor ? "\u2713" : "\u2192"}
        </span>
        <span
          className={[
            "font-display font-semibold text-base tracking-wide uppercase",
            isFor ? "text-mint" : "text-review-blue",
          ].join(" ")}
          style={{ letterSpacing: "0.08em" }}
        >
          {label}
        </span>
        <div
          className={[
            "h-px flex-1 hidden md:block",
            isFor ? "bg-mint/20" : "bg-review-blue/20",
          ].join(" ")}
        />

        {/* Scroll arrows */}
        <div className="hidden md:flex items-center gap-1 ml-auto">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={[
              "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200",
              canScrollLeft
                ? isFor
                  ? "border-mint/40 text-mint hover:bg-mint/10"
                  : "border-review-blue/40 text-review-blue hover:bg-review-blue/10"
                : "border-white/10 text-white/20 cursor-default",
            ].join(" ")}
            disabled={!canScrollLeft}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={[
              "w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200",
              canScrollRight
                ? isFor
                  ? "border-mint/40 text-mint hover:bg-mint/10"
                  : "border-review-blue/40 text-review-blue hover:bg-review-blue/10"
                : "border-white/10 text-white/20 cursor-default",
            ].join(" ")}
            disabled={!canScrollRight}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col gap-4 px-6 md:hidden">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={
              inView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.96 }
            }
            transition={{
              duration: 0.42,
              delay: rowIndex * 0.12 + i * 0.07 + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={[
              "rounded-2xl border p-6",
              "bg-white/5 backdrop-blur-xl",
              isFor ? "border-white/10" : "border-review-blue/20",
            ].join(" ")}
          >
            <div
              className={[
                "mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl",
                isFor ? "bg-mint/10" : "bg-review-blue/10",
              ].join(" ")}
            >
              {item.icon}
            </div>
            <h3
              className={[
                "mb-2 font-display text-[15px] font-semibold leading-snug",
                isFor ? "text-white" : "text-white/90",
              ].join(" ")}
            >
              {item.title}
            </h3>
            <p
              className={[
                "text-sm leading-relaxed",
                isFor ? "text-white/50" : "text-white/65",
              ].join(" ")}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="relative hidden md:block">
        {/* Left fade gradient */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-3 w-12 z-10 pointer-events-none bg-gradient-to-r from-charcoal/85 to-transparent md:block hidden" />
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-3 px-6 md:px-0"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.96 }
              }
              transition={{
                duration: 0.42,
                delay: rowIndex * 0.12 + i * 0.07 + 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                isFor
                  ? {
                      y: -4,
                      boxShadow: "0 8px 32px -4px rgba(0,184,148,0.18)",
                    }
                  : { y: -2 }
              }
              className={[
                "flex-shrink-0 w-[272px] md:w-[288px] rounded-2xl p-6 border transition-colors duration-200 cursor-default",
                "bg-white/5 backdrop-blur-xl",
                isFor
                  ? "border-white/10 hover:border-mint/40"
                  : "border-review-blue/20 hover:border-review-blue/40",
              ].join(" ")}
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Icon */}
              <div
                className={[
                  "w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4",
                  isFor ? "bg-mint/10" : "bg-review-blue/10",
                ].join(" ")}
                style={
                  isFor
                    ? { filter: "drop-shadow(0 0 8px rgba(0,184,148,0.25))" }
                    : isFit
                      ? { filter: "drop-shadow(0 0 8px rgba(116,185,255,0.18))" }
                      : {}
                }
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={[
                  "font-display font-semibold text-[15px] leading-snug mb-2",
                  isFor ? "text-white" : "text-white/90",
                ].join(" ")}
              >
                {item.title}
              </h3>

              {/* Desc */}
              <p
                className={[
                  "text-sm leading-relaxed",
                  isFor ? "text-white/50" : "text-white/65",
                ].join(" ")}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* trailing spacer for edge breathing room on mobile */}
          <div className="flex-shrink-0 w-2 md:hidden" aria-hidden />
        </div>

        {/* Right fade gradient */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-3 w-12 z-10 pointer-events-none bg-gradient-to-l from-charcoal/85 to-transparent md:block hidden" />
        )}
      </div>
    </div>
  );
}

export default function WhoIsItFor() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-charcoal/85 overflow-hidden"
      aria-label={t.whoIsItFor.title}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 px-6"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            {t.whoIsItFor.title}
          </h2>
        </motion.div>

        {/* For You row */}
        <ScrollRow
          items={t.whoIsItFor.forYou.items}
          variant="for"
          label={t.whoIsItFor.forYou.title}
          inView={inView}
          rowIndex={0}
        />

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-white/10 mx-6 md:mx-0 mb-12 origin-left"
        />

        {/* Fit guidance row */}
        <ScrollRow
          items={t.whoIsItFor.notForYou.items}
          variant="fit"
          label={t.whoIsItFor.notForYou.title}
          inView={inView}
          rowIndex={1}
        />
      </div>
    </section>
  );
}
