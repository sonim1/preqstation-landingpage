import type { Translations } from "../../i18n";
import ProofPanelFrame from "../common/ProofPanelFrame";

type CtaProofPanelProps = {
  readonly proof: Translations["cta"]["proof"];
};

export default function CtaProofPanel({ proof }: CtaProofPanelProps) {
  return (
    <ProofPanelFrame
      eyebrow={proof.eyebrow}
      title={proof.title}
      accentClassName="from-mint/16 via-transparent to-warm-yellow/16"
    >
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.95fr)]">
        <article className="min-w-0 rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            {proof.checklistLabel}
          </p>

          <ol className="mt-4 grid gap-3">
            {proof.checklist.map((item, index) => (
              <li key={item} className="flex items-start gap-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-sm font-medium text-charcoal">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm leading-relaxed text-white/70">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </article>

        <div className="grid min-w-0 gap-4">
          <article className="min-w-0 rounded-[24px] border border-warm-yellow/20 bg-charcoal/55 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              {proof.linksLabel}
            </p>

            <div className="mt-4 space-y-3">
              {proof.links.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-2 break-all font-mono text-sm text-white/80">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="min-w-0 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              {proof.summaryLabel}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {proof.summaryValue}
            </p>
          </article>
        </div>
      </div>
    </ProofPanelFrame>
  );
}
