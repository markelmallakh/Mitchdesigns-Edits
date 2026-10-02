"use client";

import { motion } from "framer-motion";

type Props = {
  currentStep: number;
  totalSteps: number;
};

export function QuoteProgressBar({ currentStep, totalSteps }: Props) {
  const pct = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={`Step ${currentStep} of ${totalSteps}`}
      className="h-1.5 w-full bg-space-grey"
    >
      <motion.div
        className="h-full bg-yellow"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
