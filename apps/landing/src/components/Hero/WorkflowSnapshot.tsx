type Step = {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
};

type Stage = {
  readonly id: string;
  readonly status: string;
  readonly detail: string;
};

type EvidenceItem = {
  readonly label: string;
  readonly value: string;
};

const palette: Record<string, string> = {
  inbox: "bg-steel text-charcoal",
  todo: "bg-warm-yellow text-charcoal",
  hold: "bg-coral text-white",
  ready: "bg-review-blue text-charcoal",
  done: "bg-mint text-charcoal",
};

function StageCard({
  step,
  stage,
}: {
  step: Step;
  stage?: Stage;
}) {
  return (
    <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg ${palette[step.id]}`}
          >
            {step.icon}
          </span>
          <div>
            <p className="font-display text-base font-semibold text-white">{step.label}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">
              {stage?.status ?? step.id}
            </p>
          </div>
        </div>
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/50" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{stage?.detail}</p>
    </div>
  );
}

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
  holdLabel,
  holdDescription,
  stages,
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
  holdLabel: string;
  holdDescription: string;
  stages: readonly Stage[];
  evidenceTitle: string;
  evidenceItems: readonly EvidenceItem[];
}) {
  const mainSteps = steps.filter((step) => step.id !== "hold");
  const holdStage = stages.find((stage) => stage.id === "hold");

  return (
    <section
      id="execution-proof"
      className="mt-14 scroll-mt-24 rounded-[2rem] border border-white/10 bg-black/20 p-6 backdrop-blur-xl md:p-8"
    >
      <div className="text-left">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-mint">
          {title}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                {taskLabel}
              </p>
              <p className="mt-2 font-mono text-sm text-mint">{taskNumber}</p>
              <h3 className="mt-2 font-display text-2xl text-white">{taskTitle}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{taskSummary}</p>

          <dl className="mt-6 grid gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40">
                {engineLabel}
              </dt>
              <dd className="mt-2 font-display text-lg text-white">{engineValue}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40">
                {sessionLabel}
              </dt>
              <dd className="mt-2 font-mono text-sm text-white/80">{sessionValue}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <dt className="text-xs uppercase tracking-[0.16em] text-white/40">
                {branchLabel}
              </dt>
              <dd className="mt-2 font-mono text-sm text-white/80">{branchValue}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
          <p className="text-xs uppercase tracking-[0.18em] text-coral/80">{holdLabel}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{holdDescription}</p>
          <div className="mt-5 rounded-2xl border border-coral/30 bg-coral/10 p-4">
            <p className="font-mono text-xs text-coral/80">
              status = {holdStage?.status ?? holdLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {holdStage?.detail ?? holdDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-10 right-10 top-8 hidden h-px bg-white/10 md:block" />

        <div className="grid gap-4 md:grid-cols-4">
          {mainSteps.map((step) => (
            <StageCard
              key={step.id}
              step={step}
              stage={stages.find((stage) => stage.id === step.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-left">
        <p className="text-xs uppercase tracking-[0.18em] text-white/40">{evidenceTitle}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {evidenceItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
