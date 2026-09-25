import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "PrismaTech | No tricks. Just smarter payments.",
  description:
    "Get your business ready for the seasonal rush with PrismaTech merchant services. Explore Clover Flex, Clover Mini and NRS Petro POS solutions.",
};

export default function HalloweenPage() {
  return <HomePage />;
}
