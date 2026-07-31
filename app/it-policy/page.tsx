import { LegalPage } from "@/components/legal/legal-page";
import { itPolicy } from "@/content/legal/it-policy";
import { createLegalMetadata } from "@/lib/legal-content";

export const metadata = createLegalMetadata(itPolicy);

export default function ItPolicyPage() {
  return <LegalPage data={itPolicy} />;
}
