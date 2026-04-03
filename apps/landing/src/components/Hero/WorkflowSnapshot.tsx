type Step = {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
};

type EvidenceItem = {
  readonly label: string;
  readonly value: string;
};

const workflowStyles: Record<string, string> = {
  inbox: "border border-white/20 bg-charcoal text-white",
  todo: "border border-charcoal/20 bg-warm-yellow text-charcoal",
  hold: "border border-black/20 bg-coral text-white shadow-[4px_4px_0_rgba(18,23,24,0.9)] xl:translate-y-4",
  ready: "border border-charcoal/20 bg-review-blue text-charcoal",
  done: "border border-charcoal/20 bg-mint text-charcoal",
};

export default function WorkflowSnapshot({
  steps,
  title,
  description,
  taskLabel,
  engineLabel,
  sessionLabel,
  branchLabel,
  taskNumber,
  taskTitle,
  taskSummary,
  engineValue,
  sessionValue,
  branchValue,
  workflowTitle,
  workflowSubtitle,
  workflowTargetBadge,
  evidenceTitle,
  evidenceItems,
}: {
  steps: readonly Step[];
  title: string;
  description: string;
  taskLabel: string;
  engineLabel: string;
  sessionLabel: string;
  branchLabel: string;
  taskNumber: string;
  taskTitle: string;
  taskSummary: string;
  engineValue: string;
  sessionValue: string;
  branchValue: string;
  workflowTitle: string;
  workflowSubtitle: string;
  workflowTargetBadge: string;
  evidenceTitle: string;
  evidenceItems: readonly EvidenceItem[];
}) {
  return (
    <section
      id="execution-proof"
      className="mt-14 scroll-mt-24 border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-5 py-8 md:px-6 md:py-10"
    >
      <div className="text-left">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-mint">
          {title}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
          {description}
        </p>
      </div>

      <div className="mt-8 border-y border-white/10 text-left">
        <div className="grid gap-6 py-6 md:grid-cols-[minmax(0,1.7fr)_minmax(220px,0.95fr)] md:gap-8">
          <div className="md:pr-8">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
              {taskLabel}
            </p>
            <p className="mt-2 font-mono text-sm text-mint">{taskNumber}</p>
            <h3 className="mt-2 font-display text-2xl text-white">{taskTitle}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              {taskSummary}
            </p>
          </div>

          <dl className="grid border-t border-white/10 pt-2 text-left md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div className="space-y-2 border-b border-white/10 py-4 first:pt-0">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40">
                {engineLabel}
              </dt>
              <dd className="font-display text-lg text-white">{engineValue}</dd>
            </div>
            <div className="space-y-2 border-b border-white/10 py-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40">
                {sessionLabel}
              </dt>
              <dd className="font-mono text-sm text-white/80">{sessionValue}</dd>
            </div>
            <div className="space-y-2 py-4 pb-0">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40">
                {branchLabel}
              </dt>
              <dd className="font-mono text-sm text-white/80">{branchValue}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div id="workflow" className="mt-10 border-t border-white/10 pt-6 text-left">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-bold text-white md:text-4xl">{workflowTitle}</h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              {workflowSubtitle}
            </p>
          </div>
          <div className="inline-flex items-center border border-white/20 bg-white/10 px-4 py-2 font-mono text-sm uppercase tracking-[0.14em] text-white/80">
            {workflowTargetBadge}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <article
              key={step.id}
              className={`flex h-full flex-col ${workflowStyles[step.id]}`}
            >
              <div
                className={`flex items-center justify-between border-b px-4 py-4 font-mono text-sm uppercase tracking-[0.16em] ${
                  step.id === "inbox"
                    ? "border-white/20 bg-white/5"
                    : step.id === "hold"
                      ? "border-black/20 bg-black/10"
                      : "border-charcoal/20 bg-black/5"
                }`}
              >
                <span>{step.label}</span>
                <span
                  className={`h-2 w-2 rounded-full ${
                    step.id === "inbox"
                      ? "bg-steel"
                      : step.id === "hold"
                        ? "bg-white"
                        : "bg-charcoal"
                  }`}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    step.id === "inbox"
                      ? "text-white/60"
                      : step.id === "hold"
                        ? "text-white/80"
                        : "text-charcoal/70"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-left">
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">{evidenceTitle}</p>
        <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
          {evidenceItems.map((item) => (
            <div
              key={item.label}
              className="grid gap-2 py-4 md:grid-cols-[160px_minmax(0,1fr)] md:gap-4"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed text-white/70">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
