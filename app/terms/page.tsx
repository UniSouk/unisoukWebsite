import { LegalPage } from "@/components/legal/legal-page";
import { termsPolicy } from "@/content/legal/terms";
import { createLegalMetadata } from "@/lib/legal-content";

export const metadata = createLegalMetadata(termsPolicy);

export default function TermsPage() {
  return <LegalPage data={termsPolicy} />;
}
