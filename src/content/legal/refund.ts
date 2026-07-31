import { refundCoreSections } from "./refund-core";
import { refundProcessSections } from "./refund-process";

import type { LegalPageData } from "@/types/legal";

export const refundPolicy: LegalPageData = {
  route: "/refund-policy/",
  title: "Refund & Cancellation Policy",
  description: "The eligibility, timelines and process governing subscription cancellations, transaction disputes and refunds for UniSouk services.",
  updated: "18 September 2025",
  navigation: [
    { label: "Plans and billing", href: "#billing" },
    { label: "Free trial", href: "#trial" },
    { label: "Cancellation", href: "#cancellation" },
    { label: "Refund eligibility", href: "#eligibility" },
    { label: "Request process", href: "#request-process" },
    { label: "Dispute resolution", href: "#disputes" },
    { label: "Contact", href: "#contact" },
  ],
  intro: "This Policy governs subscription fees, transaction charges and commission payments processed through UniSouk’s unified ecommerce management platform.",
  sections: [...refundCoreSections, ...refundProcessSections],
};
