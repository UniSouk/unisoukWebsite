import {
  contact,
  link,
  list,
  note,
  paragraph,
  strong,
  subheading,
} from "@/lib/legal-content";
import type { LegalSection } from "@/types/legal";

export const refundProcessSections: LegalSection[] = [
  {
    id: "request-process",
    title: "6. Refund request process",
    blocks: [
      subheading("6.1 How to request a refund"),
      paragraph("Send refund requests to ", link("accounts@unisouk.com", "mailto:accounts@unisouk.com"), " with:"),
      list(["Account details and registered email"], ["Subscription or transaction details"], ["A detailed explanation of the refund reason"], ["Supporting documentation such as screenshots or transaction IDs"]),
      subheading("6.2 Review process"),
      list(["Acknowledgment within two business days."], ["Investigation and decision within seven business days."], ["Email notification of approval or rejection with reasons."]),
      subheading("6.3 Refund processing"),
      list(["Approved refunds are processed within five to ten business days."], ["Refunds are credited to the original payment method only."], ["Processing time may vary depending on the bank or payment provider."], ["Refund confirmation is sent by email."]),
    ],
  },
  {
    id: "failed-refunds",
    title: "7. Failed refunds",
    blocks: [
      subheading("7.1 Common reasons"),
      list(["Expired or invalid payment method"], ["Closed bank account"], ["Incorrect payment details"], ["Bank or card issuer restrictions"]),
      subheading("7.2 Resolution process"),
      list(["Customer notification within two business days."], ["Alternative refund methods offered where possible."], ["Manual bank transfer for unresolved cases, with transfer charges borne by the customer."]),
    ],
  },
  {
    id: "disputes",
    title: "8. Dispute resolution",
    blocks: [
      subheading("8.1 Internal resolution"),
      paragraph("Customers must contact our support team for dispute resolution before initiating chargebacks or external complaints."),
      subheading("8.2 Escalation process"),
      list([strong("Level 1:"), " Customer Support at accounts@unisouk.com"], [strong("Level 2:"), " Management Review at management@unisouk.com"], [strong("Level 3:"), " Legal or external mediation"]),
      subheading("8.3 Chargeback policy"),
      paragraph("Unjustified chargebacks may result in account suspension and recovery of associated costs."),
    ],
  },
  {
    id: "special-circumstances",
    title: "9. Special circumstances",
    blocks: [
      subheading("9.1 Force majeure"),
      paragraph("No refunds are provided for service interruptions caused by natural disasters, pandemics, government actions, third-party service outages, or internet and network infrastructure failures beyond our control."),
      subheading("9.2 Account violations"),
      paragraph("No refunds are provided for accounts suspended or terminated due to violation of the Terms of Service, fraudulent activity, misuse of platform features or non-compliance with platform policies."),
    ],
  },
  {
    id: "compliance",
    title: "10. Legal compliance",
    blocks: [
      subheading("10.1 Indian law compliance"),
      paragraph("This Policy complies with the Consumer Protection Act, 2019; Information Technology Act, 2000; Foreign Exchange Management Act; and Goods and Services Tax regulations."),
      subheading("10.2 Payment gateway compliance"),
      paragraph("This Policy aligns with requirements of authorized payment gateways, including but not restricted to Razorpay and other integrated providers."),
    ],
  },
  {
    id: "data-privacy",
    title: "11. Data and privacy",
    blocks: [
      subheading("11.1 Data retention"),
      list(["Transaction data is retained according to regulatory requirements."], ["Refund-related communications are archived for three years."]),
      subheading("11.2 Privacy protection"),
      paragraph("All refund processes comply with our ", link("Privacy Policy", "/privacy/"), " and applicable data protection laws."),
    ],
  },
  {
    id: "updates",
    title: "12. Policy updates",
    blocks: [
      subheading("12.1 Modification rights"),
      paragraph("Nexanode Technologies Private Limited reserves the right to modify this Policy with 30 days’ advance notice by email and an updated Policy posted on the website. Continued use constitutes acceptance of changes."),
      subheading("12.2 Grandfathering"),
      paragraph("Existing subscriptions remain subject to the Policy in effect at the time of purchase unless the customer opts into new terms."),
    ],
  },
  {
    id: "contact",
    title: "13. Contact information",
    blocks: [
      contact(
        [strong("Primary:"), " ", link("accounts@unisouk.com", "mailto:accounts@unisouk.com")],
        [strong("Management:"), " ", link("management@unisouk.com", "mailto:management@unisouk.com")],
        [strong("Business address:"), " Nexanode Technologies Private Limited, 701, 7th Floor, Solaris Cube, Vesu, Surat - 395007, Gujarat, India"],
      ),
    ],
  },
  {
    id: "governing-law",
    title: "14. Governing law",
    blocks: [
      paragraph("This Policy is governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of courts in Surat, Gujarat, India."),
      note("By using UniSouk services, you acknowledge that you have read, understood and agree to be bound by this Refund and Cancellation Policy."),
    ],
  },
];
