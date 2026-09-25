import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import AgencyHome from "@/components/agency/AgencyHome";
import "./agency.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "PrismaTech Inc.",
  description:
    "Amplify your brand with cutting-edge digital services. PrismaTech builds data-driven marketing, merchant services, and content strategies that drive real results.",
};

export default function Page() {
  return <AgencyHome fontClass={`${jakarta.variable} ${jakarta.className}`} />;
}
