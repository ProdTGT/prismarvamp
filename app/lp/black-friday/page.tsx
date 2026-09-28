import type { Metadata } from "next";
import BlackFridayHome from "@/components/black-friday/BlackFridayHome";
import "./black-friday.css";

export const metadata: Metadata = {
  title: "PrismaTech | Smarter Payments",
  description:
    "Get your business ready for the seasonal rush with PrismaTech merchant services. Explore Clover Flex, Clover Mini and NRS Petro POS solutions.",
};

export default function BlackFridayPage() {
  return <BlackFridayHome />;
}
