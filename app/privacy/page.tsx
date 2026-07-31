import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/content/legal/privacy";
import { createLegalMetadata } from "@/lib/legal-content";

export const metadata = createLegalMetadata(privacyPolicy);

export default function PrivacyPage() {
  return <LegalPage data={privacyPolicy} />;
}
