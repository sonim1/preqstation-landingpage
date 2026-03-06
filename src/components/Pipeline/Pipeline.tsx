import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "../../i18n/context";

gsap.registerPlugin(ScrollTrigger);

const stepStyles = [
  { bg: "bg-steel", text: "text-charcoal" },
  { bg: "bg-steel", text: "text-charcoal" },
  { bg: "bg-warm-yellow", text: "text-charcoal" },
  { bg: "bg-review-blue", text: "text-charcoal" },
  { bg: "bg-mint", text: "text-charcoal" },
];

export default function Pipeline() {
  const t = useT();
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      // Animate connecting line width
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1 },
        0
      );

      // Animate each step sequentially
      stepRefs.current.forEach((el, i) => {
        tl.fromTo(
          el,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.3 },
          i * 0.2
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {t.pipeline.title}
          </h2>
          <p className="text-white/60 text-center mt-4 text-lg">
            {t.pipeline.subtitle}
          </p>
        </div>

        {/* Pipeline */}
        <div className="mt-16">
          {/* Desktop: horizontal, Mobile: vertical */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0">
            {/* Connecting line - desktop */}
            <div
              ref={lineRef}
              className="absolute hidden md:block h-1 bg-white/20 top-10 left-10 right-10"
            />

            {t.pipeline.steps.map((step, i) => (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="flex flex-col items-center opacity-0"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl relative z-10 ${stepStyles[i].bg} ${stepStyles[i].text}`}
                >
                  {step.icon}
                </div>
                <span className="font-display text-sm md:text-base mt-3 text-center text-white">
                  {step.label}
                </span>
                <span className="text-xs text-white/40 mt-1">{step.id}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
