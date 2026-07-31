import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { AMAZON_SOLUTION } from "@/constants/solutions";

export const metadata: Metadata = {
  title: { absolute: "Amazon Seller Central Services | UniSouk" },
  description:
    "Coordinate Amazon listings, inventory, FBA, orders, performance and finance with a clearer operating rhythm.",
  alternates: { canonical: "/solutions/amazon-seller-central/" },
};

export default function AmazonSellerCentralPage() {
  return <SolutionPage data={AMAZON_SOLUTION} />;
}
