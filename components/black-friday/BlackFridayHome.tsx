"use client";

import { useEffect } from "react";
import { initHomePage } from "@/lib/home-interactions";
import SkipLink from "@/components/sections/SkipLink";
import Header from "@/components/black-friday/Header";
import Hero from "@/components/black-friday/Hero";
import CapabilityStrip from "@/components/black-friday/CapabilityStrip";
import PainSection from "@/components/black-friday/PainSection";
import WhySection from "@/components/black-friday/WhySection";
import SolutionsSection from "@/components/black-friday/SolutionsSection";
import IndustrySection from "@/components/black-friday/IndustrySection";
import PricingSection from "@/components/black-friday/PricingSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SeasonalSection from "@/components/sections/SeasonalSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/black-friday/ContactSection";
import Footer from "@/components/black-friday/Footer";
import FinderDialog from "@/components/sections/FinderDialog";
import RequestDialog from "@/components/sections/RequestDialog";

export default function BlackFridayHome() {
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
