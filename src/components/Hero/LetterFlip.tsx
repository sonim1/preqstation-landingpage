import { useState, useEffect, useCallback } from "react";
import { motion, useAnimationControls, useReducedMotion, AnimatePresence } from "motion/react";

const FLIP_DURATION = 0.5;
const HOLD_PREQ = 3.0;
const HOLD_PREP = 2.5;
const CYCLES = 2;
const INITIAL_DELAY = 1500;

interface Props {
  preqTagline: string;
  prepTagline: string;
}

export default function LetterFlip({ preqTagline, prepTagline }: Props) {
  const controls = useAnimationControls();
  const [showP, setShowP] = useState(false);
  const prefersReduced = useReducedMotion();

  const runCycle = useCallback(async () => {
    const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    for (let i = 0; i < CYCLES; i++) {
      await delay(HOLD_PREQ * 1000);

      // Flip q -> p: rotate to edge
      await controls.start({
        rotateY: 90,
        transition: { duration: FLIP_DURATION / 2, ease: "easeIn" },
      });
      setShowP(true);
      // Continue rotation from edge
      await controls.start({
        rotateY: 0,
        transition: { duration: FLIP_DURATION / 2, ease: "easeOut" },
      });

      await delay(HOLD_PREP * 1000);

      // Flip p -> q: rotate to edge
      await controls.start({
        rotateY: 90,
        transition: { duration: FLIP_DURATION / 2, ease: "easeIn" },
      });
      setShowP(false);
      // Continue rotation from edge
      await controls.start({
        rotateY: 0,
        transition: { duration: FLIP_DURATION / 2, ease: "easeOut" },
      });
    }
  }, [controls]);

  useEffect(() => {
    if (prefersReduced) return;

    let cancelled = false;

    const start = async () => {
      await document.fonts.ready;
      await new Promise<void>((r) => setTimeout(r, INITIAL_DELAY));
      if (!cancelled) runCycle();
    };

    start();
    return () => { cancelled = true; };
  }, [runCycle, prefersReduced]);

  return (
    <div className="flex flex-col items-center">
      {/* Preq/Prep Station heading */}
      <h2
        aria-label="Preq Station"
        className="font-display text-4xl md:text-6xl font-bold text-white mb-4"
      >
        <span aria-hidden="true">
          Pre
          <span
            className="inline-block"
            style={{ perspective: "600px", minWidth: "0.62em" }}
          >
            <motion.span
              animate={controls}
              className="inline-block text-mint"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
            >
              <span
                style={{
                  display: showP ? "none" : "inline",
                  backfaceVisibility: "hidden",
                }}
              >
                q
              </span>
              <span
                style={{
                  display: showP ? "inline" : "none",
                  backfaceVisibility: "hidden",
                }}
              >
                p
              </span>
            </motion.span>
          </span>
          {" Station"}
        </span>
      </h2>

      {/* Animated tagline */}
      <div className="h-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={showP ? "prep" : "preq"}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25 }}
            className="text-base md:text-lg text-white/50 font-body"
          >
            {showP ? prepTagline : preqTagline}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
