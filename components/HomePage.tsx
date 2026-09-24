"use client";

import { useEffect } from "react";
import { initHomePage } from "@/lib/home-interactions";
import SkipLink from "@/components/sections/SkipLink";
import SeasonStrip from "@/components/sections/SeasonStrip";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import CapabilityStrip from "@/components/sections/CapabilityStrip";
import PainSection from "@/components/sections/PainSection";
import WhySection from "@/components/sections/WhySection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import IndustrySection from "@/components/sections/IndustrySection";
import PricingSection from "@/components/sections/PricingSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SeasonalSection from "@/components/sections/SeasonalSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FinderDialog from "@/components/sections/FinderDialog";
import RequestDialog from "@/components/sections/RequestDialog";

declare global {
  interface Window {
    __primatechHomeInit?: boolean;
  }
}

export default function HomePage() {
  useEffect(() => {
    delete window.__primatechHomeInit;
    initHomePage();
    return () => {
      delete window.__primatechHomeInit;
    };
  }, []);

  return (
    <>
      <SkipLink />
      <SeasonStrip />
      <Header />
      <main id="main">
        <Hero />
        <CapabilityStrip />
        <PainSection />
        <WhySection />
        <SolutionsSection />
        <IndustrySection />
        <PricingSection />
        <ComparisonSection />
        <ProcessSection />
        <SeasonalSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FinderDialog />
      <RequestDialog />
    </>
  );
}
