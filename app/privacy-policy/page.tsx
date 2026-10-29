import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/prisma-agency/legal/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | PrismaTech Inc.",
  description: "How PrismaTech Inc. collects, uses, and shares information when you visit prismatechinc.com or contact us.",
};

export default function Page() {
  return (
    <div className="prisma-home">
      <PrivacyPolicyPage />
    </div>
  );
}
