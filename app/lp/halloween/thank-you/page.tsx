
import type { Metadata } from "next";
import HalloweenThankYou from "@/components/halloween/HalloweenThankYou";

export const metadata: Metadata = {
  title: "Thank you | PrismaTech",
  description: "Your PrismaTech request is in. A representative will be in touch.",
};

export default function HalloweenThankYouPage() {
  return <HalloweenThankYou fontClass="" />;
}
