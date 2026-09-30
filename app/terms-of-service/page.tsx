import type { Metadata } from "next";
import TermsOfServicePage from "@/components/prisma-agency/legal/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service | PrismaTech Inc.",
  description: "Rules and conditions for using the PrismaTech Inc. website.",
};

export default function Page() {
  return (
    <div className="prisma-home">
      <TermsOfServicePage />
    </div>
  );
}
