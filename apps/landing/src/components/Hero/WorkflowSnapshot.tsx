type Step = {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
};

const palette: Record<string, string> = {
  inbox: "bg-steel text-charcoal",
  todo: "bg-warm-yellow text-charcoal",
  hold: "bg-coral text-white",
  ready: "bg-review-blue text-charcoal",
  done: "bg-mint text-charcoal",
};

function StepCard({ step }: { step: Step }) {
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
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">{step.id}</p>
          </div>
        </div>
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/50" />
      </div>
    </div>
  );
}

export default function WorkflowSnapshot({
  steps,
  title,
  description,
  holdLabel,
  holdDescription,
}: {
  steps: readonly Step[];
  title: string;
  description: string;
  holdLabel: string;
  holdDescription: string;
}) {
  const holdStep = steps.find((step) => step.id === "hold");
  const mainSteps = steps.filter((step) => step.id !== "hold");

  return (
    <div className="mt-14 rounded-[2rem] border border-white/10 bg-black/20 p-6 md:p-8 backdrop-blur-xl">
      <div className="text-left">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-mint">
          {title}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
          {description}
        </p>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-10 right-10 top-8 hidden h-px bg-white/10 md:block" />

        <div className="grid gap-4 md:grid-cols-4">
          {mainSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
          {holdStep && (
            <div className="mx-auto mt-6 max-w-xs md:col-start-2 md:mx-0 md:mt-0 md:max-w-sm">
              <div className="ml-10 hidden h-8 w-px bg-coral/40 md:block" />
              <div className="rounded-2xl border border-coral/30 bg-coral/10 p-4 text-left backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-coral text-lg text-white">
                    {holdStep.icon}
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-white">{holdStep.label}</p>
                    <p className="text-xs uppercase tracking-[0.16em] text-coral/80">{holdLabel}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {holdDescription}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
