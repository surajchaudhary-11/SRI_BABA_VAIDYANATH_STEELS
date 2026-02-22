"use client";

export default function ProgressStepper({ step }: { step: number }) {
  const steps = ["Contact", "Requirements", "Review"];
  return (
    <div className="mb-6">
      <div className="h-px bg-white/15"><div className="h-px bg-white" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
      <div className="mt-3 flex justify-between">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 font-[var(--font-barlow-condensed)] text-xs uppercase tracking-[0.2em]">
            <span className={`h-2 w-2 rounded-full ${i <= step ? "bg-white" : "bg-white/30"}`} />{s}
          </div>
        ))}
      </div>
    </div>
  );
}

