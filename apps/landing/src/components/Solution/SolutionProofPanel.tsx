import type { Translations } from "../../i18n";
import ProofPanelFrame from "../common/ProofPanelFrame";

type SolutionProofPanelProps = {
  readonly proof: Translations["solution"]["proof"];
};

export default function SolutionProofPanel({ proof }: SolutionProofPanelProps) {
  return (
    <ProofPanelFrame eyebrow={proof.eyebrow} title={proof.title}>
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.95fr)]">
        <article className="rounded-[24px] border border-white/10 bg-charcoal/55 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-white/45">
              {proof.taskNumberLabel}
            </span>
            <span className="rounded-full bg-mint px-3 py-1 font-mono text-xs font-medium text-charcoal">
              {proof.taskNumber}
            </span>
          </div>

          <h4 className="mt-4 font-display text-2xl text-white">
            {proof.taskTitle}
          </h4>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
            {proof.taskSummary}
          </p>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              {proof.criteriaLabel}
            </p>
            <ul className="mt-4 grid gap-3">
              {proof.criteria.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-review-blue" />
                  <span className="text-sm leading-relaxed text-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="grid gap-4">
          <article className="rounded-[24px] border border-review-blue/20 bg-white/[0.05] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              {proof.evidenceTitle}
            </p>

            <dl className="mt-4 space-y-4">
              {proof.meta.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-xs uppercase tracking-[0.16em] text-white/40">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-lg text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              {proof.evidenceTitle}
            </p>

            <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {proof.evidence.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-2 py-4 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-4"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                    {item.label}
                  </p>
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </ProofPanelFrame>
  );
}
