"use client";

import ProgressStepper from "./ProgressStepper";

export default function StepForm({ step, children }: { step: number; children: React.ReactNode }) {
  return (
    <div className="glass-card p-6">
      <ProgressStepper step={step} />
      {children}
    </div>
  );
}

