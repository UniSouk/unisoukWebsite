import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { AI_AGENTS_SOLUTION } from "@/constants/solutions";

export const metadata: Metadata = {
  title: { absolute: "AI Agents for Ecommerce | UniSouk" },
  description:
    "Meet UniSouk AI specialists for product listings, analytics, imagery, marketing and commerce finance.",
  alternates: { canonical: "/solutions/ai-agents/" },
};

export default function AiAgentsPage() {
  return <SolutionPage data={AI_AGENTS_SOLUTION} />;
}
