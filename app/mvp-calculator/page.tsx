import type { Metadata } from "next";
import MVPCalculatorClient from "@/components/sections/MVPCalculatorClient";

export const metadata: Metadata = {
  title: "MVP Cost Calculator — Estimate Your Project | Audax Ventures",
  description: "Use our interactive MVP calculator to estimate the cost and timeline for your software project. Get a free custom quote from the Audax Ventures team.",
  alternates: { canonical: "https://audaxventures.ca/mvp-calculator" },
};

export default function MVPCalculatorPage() {
  return <MVPCalculatorClient />;
}
