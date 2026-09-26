import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import HalloweenThankYou from "@/components/halloween/HalloweenThankYou";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Thank you | PrismaTech",
  description: "Your PrismaTech request is in. A representative will be in touch.",
};

export default function HalloweenThankYouPage() {
  return <HalloweenThankYou fontClass={`${jakarta.variable} ${jakarta.className}`} />;
}
