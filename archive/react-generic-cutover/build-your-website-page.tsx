import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { WEBSITE_SOLUTION } from "@/constants/solutions";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Website Design and Development | UniSouk" },
  description:
    "Build a responsive commerce website around your brand, catalogue, customers and operating requirements.",
  alternates: { canonical: "/solutions/build-your-website/" },
};

export default function BuildYourWebsitePage() {
  return <SolutionPage data={WEBSITE_SOLUTION} />;
}
