interface ConceptPosterPlaceholderProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly prompt: string;
  readonly replaceNote: string;
  readonly accentClassName?: string;
}

export default function ConceptPosterPlaceholder({
  eyebrow,
  title,
  prompt,
  replaceNote,
  accentClassName = "from-mint/20 via-transparent to-review-blue/20",
}: ConceptPosterPlaceholderProps) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClassName}`} />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.28em] text-mint">
            {eyebrow}
          </p>
          <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
            {title}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
            {prompt}
          </p>
        </div>

        <div className="rounded-[24px] border border-dashed border-white/20 bg-charcoal/50 p-4">
          <div className="flex aspect-[16/10] flex-col items-center justify-center rounded-[20px] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%),linear-gradient(135deg,_rgba(0,184,148,0.16),_rgba(45,52,54,0.72))] px-6 text-center">
            <img
              src="/brand/logo.webp"
              alt=""
              aria-hidden="true"
              className="h-16 w-auto opacity-90"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 font-display text-xs uppercase tracking-[0.34em] text-white/60">
              Concept artwork
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              {replaceNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
