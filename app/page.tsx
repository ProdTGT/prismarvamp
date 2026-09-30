import type { Metadata } from "next";
import PrismaAgencyLanding from "@/components/prisma-agency/PrismaAgencyLanding";

export const metadata: Metadata = {
  title: "PrismaTech Inc. | Merchant Services & Payment Processing",
  description:
    "PrismaTech delivers secure merchant services and payment processing for in-store and online businesses—transparent pricing, POS solutions, and dependable support.",
};

const fonts =
  "https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Caladea:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;600&family=Oswald:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap";
const fontshare =
  "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=clash-display@400,500,600,700&display=swap";

export default function Page() {
  return (
    <div className="prisma-home">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href={fonts} />
      <link rel="stylesheet" href={fontshare} />
      <PrismaAgencyLanding />
    </div>
  );
}
