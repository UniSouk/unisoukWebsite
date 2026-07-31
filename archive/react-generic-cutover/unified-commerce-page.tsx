import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { UNIFIED_COMMERCE_SOLUTION } from "@/constants/solutions";

export const metadata: Metadata = {
  title: { absolute: "Unified Commerce Platform for Indian Sellers | UniSouk" },
  description:
    "Connect listings, inventory, orders, fulfilment, payments and analytics in one commerce operating view.",
  alternates: { canonical: "/solutions/unified-commerce/" },
};

export default function UnifiedCommercePage() {
  return <SolutionPage data={UNIFIED_COMMERCE_SOLUTION} />;
}
