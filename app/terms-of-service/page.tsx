import type { Metadata } from "next";
import TermsOfServicePage from "@/components/prisma-agency/legal/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service | PrismaTech Inc.",
  description: "Terms of Service for prismatechinc.com and communications with PrismaTech Inc.",
};

export default function Page() {
  return (
    <div className="prisma-home">
      <TermsOfServicePage />
    </div>
  );
}
