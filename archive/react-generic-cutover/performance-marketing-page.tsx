import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { PERFORMANCE_MARKETING_SOLUTION } from "@/constants/solutions";

export const metadata: Metadata = {
  title: { absolute: "Performance Marketing for Commerce Brands | UniSouk" },
  description:
    "Plan, launch and improve Meta and Google campaigns with catalogue, creative and commerce context working together.",
  alternates: { canonical: "/solutions/performance-marketing/" },
};

export default function PerformanceMarketingPage() {
  return <SolutionPage data={PERFORMANCE_MARKETING_SOLUTION} />;
}
