import { LegalPage } from "@/components/legal/legal-page";
import { refundPolicy } from "@/content/legal/refund";
import { createLegalMetadata } from "@/lib/legal-content";

export const metadata = createLegalMetadata(refundPolicy);

export default function RefundPolicyPage() {
  return <LegalPage data={refundPolicy} />;
}
