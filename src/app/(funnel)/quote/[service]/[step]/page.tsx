import { notFound } from "next/navigation";

import { StepRenderer } from "@/features/quote";
import {
  getStepConfig,
  isQuoteService,
  quoteFlows,
  QUOTE_SERVICES,
  type QuoteService,
} from "@/lib/quote/schema";

type Params = { service: QuoteService; step: string };

export function generateStaticParams() {
  return QUOTE_SERVICES.flatMap((service) =>
    quoteFlows[service].steps.map((step) => ({
      service,
      step: String(step.step),
    })),
  );
}

export default async function QuoteStepPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service, step } = await params;
  const stepNum = Number(step);
  if (!isQuoteService(service) || !Number.isInteger(stepNum)) {
    notFound();
  }

  const config = getStepConfig(service, stepNum);
  if (!config) notFound();

  return (
    <StepRenderer service={service} flow={quoteFlows[service]} step={config} />
  );
}
