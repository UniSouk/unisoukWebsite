import type { Metadata } from "next";

import { SolutionPage } from "@/components/marketing/solution-page";
import { ACCOUNT_MANAGEMENT_SOLUTION } from "@/constants/solutions";

export const metadata: Metadata = {
  title: { absolute: "Ecommerce Account Management Services | UniSouk" },
  description:
    "Hands-on marketplace and quick-commerce operations for Indian sellers who need clear ownership and dependable daily support.",
  alternates: { canonical: "/solutions/account-management/" },
};

export default function AccountManagementPage() {
  return <SolutionPage data={ACCOUNT_MANAGEMENT_SOLUTION} />;
}
