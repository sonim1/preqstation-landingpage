import type { ReactNode } from "react";

type ProofPanelFrameProps = {
  readonly eyebrow: string;
  readonly title: string;
  readonly accentClassName?: string;
  readonly children: ReactNode;
};

export default function ProofPanelFrame({
  eyebrow,
  title,
  accentClassName = "from-mint/18 via-transparent to-review-blue/18",
  children,
}: ProofPanelFrameProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClassName}`} />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_45%)]" />

      <div className="relative p-6 md:p-8">
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.28em] text-white/50">
            {eyebrow}
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
            {title}
          </h3>
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
