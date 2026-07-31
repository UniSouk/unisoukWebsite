import {
  contact,
  link,
  list,
  paragraph,
  strong,
  subheading,
} from "@/lib/legal-content";
import type { LegalSection } from "@/types/legal";

export const refundCoreSections: LegalSection[] = [
  {
    id: "overview",
    title: "1. Overview",
    blocks: [
      paragraph("Nexanode Technologies Private Limited operates as UniSouk. By subscribing to our Services, you acknowledge and agree to the terms in this Refund and Cancellation Policy."),
      contact(
        [strong("Email:"), " ", link("accounts@unisouk.com", "mailto:accounts@unisouk.com")],
        [strong("Address:"), " 701, 7th Floor, Solaris Cube, Vesu, Surat - 395007, Gujarat, India"],
        [strong("Website:"), " ", link("www.unisouk.com", "https://www.unisouk.com/")],
      ),
    ],
  },
  {
    id: "billing",
    title: "2. Service plans and billing",
    blocks: [
      subheading("2.1 Subscription tiers"),
      list(
        [strong("Free Forever Plan:"), " No subscription fee; transaction fees apply."],
        [strong("Scale Business Plan:"), " Monthly, quarterly, half-yearly or yearly billing at management discretion."],
        [strong("Enterprise Plan:"), " Custom pricing and billing terms according to the signed agreement."],
      ),
      subheading("2.2 Transaction fees"),
      paragraph("Commission charges apply to sales processed through integrated channels according to the current pricing structure available on our website."),
    ],
  },
  {
    id: "trial",
    title: "3. Free trial policy",
    blocks: [
      subheading("3.1 Trial period"),
      paragraph("New subscribers to paid plans are eligible for a 14-day free trial from the date of account activation."),
      subheading("3.2 Trial cancellation"),
      list(["Subscribers may cancel during the trial period without charges."], ["Cancellation must be initiated before trial expiry to avoid billing."], ["Trial access terminates immediately upon cancellation."]),
    ],
  },
  {
    id: "cancellation",
    title: "4. Subscription cancellation policy",
    blocks: [
      subheading("4.1 Cancellation process"),
      paragraph("Subscribers may cancel recurring subscriptions at any time through the billing dashboard or customer support portal."),
      subheading("4.2 Cancellation effects"),
      list(["The account remains active until the end of the current billing cycle."], ["No refund is provided for the unused portion of the current billing period, except as specified in Section 5."], ["Access to premium features ends when the billing cycle concludes."]),
    ],
  },
  {
    id: "eligibility",
    title: "5. Refund eligibility and conditions",
    blocks: [
      subheading("5.1 Eligible refund scenarios"),
      paragraph(strong("Subscription fees")),
      list(
        [strong("Billing errors:"), " Incorrect charges, duplicate billing or unauthorized charges originating from our end."],
        [strong("Technical service failures:"), " Our platform is unavailable for more than 48 consecutive hours due to an issue on our end, and our support team cannot resolve it within five business days."],
      ),
      paragraph(strong("Transaction or commission fees")),
      list(["Commission charges incorrectly calculated or applied due to technical errors."], ["Multiple deductions for the same transaction due to system errors."], ["Commission charged on orders later cancelled or that failed to process."]),
      subheading("5.2 Non-refundable scenarios"),
      paragraph(strong("Subscription fees")),
      list(["Change of business requirements or change of mind after the trial period."], ["Failure to cancel before the renewal date."], ["Force majeure events affecting service availability."], ["Integration issues with third-party platforms beyond our control."]),
      paragraph(strong("Transaction or commission fees")),
      list(["Normal business operations and successfully processed transactions."], ["Commission on completed sales under agreed terms."], ["Market fluctuations affecting business performance."]),
      subheading("5.3 Refund request timeline"),
      list(["Subscription refunds must be requested within seven days of the billing date."], ["Transaction or commission refunds must be requested within 30 days of the disputed charge."], ["Technical issue refunds must be reported within seven days of the service disruption."]),
    ],
  },
];
