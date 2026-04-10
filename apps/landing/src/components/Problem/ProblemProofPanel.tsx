import type { Translations } from "../../i18n";
import ProofPanelFrame from "../common/ProofPanelFrame";

type ProblemProofPanelProps = {
  readonly proof: Translations["problem"]["proof"];
};

const columnShells = [
  "border-white/10 bg-white/[0.04]",
  "border-mint/20 bg-charcoal/45",
  "border-coral/25 bg-coral/10",
];

const dotColors = ["bg-warm-yellow", "bg-mint", "bg-coral"];

export default function ProblemProofPanel({ proof }: ProblemProofPanelProps) {
  return (
    <ProofPanelFrame
      eyebrow={proof.eyebrow}
      title={proof.title}
      accentClassName="from-coral/18 via-transparent to-warm-yellow/16"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {proof.columns.map((column, index) => (
          <article
            key={column.label}
            className={`rounded-[22px] border p-5 ${columnShells[index] ?? columnShells[0]}`}
          >
            <p className="font-display text-xs uppercase tracking-[0.22em] text-white/45">
              {column.label}
            </p>

            <ul className="mt-4 space-y-3">
              {column.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotColors[index] ?? dotColors[0]}`}
                  />
                  <span
                    className={
                      index === 1
                        ? "font-mono text-sm text-white/80"
                        : "text-sm leading-relaxed text-white/70"
                    }
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">
          {proof.footerLabel}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
          {proof.footerValue}
        </p>
      </div>
    </ProofPanelFrame>
  );
}
