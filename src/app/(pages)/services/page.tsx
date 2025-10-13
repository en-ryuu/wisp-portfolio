"use client";
import ScrollIndicator from "@/components/ScrollIndicator";
import {
  AISolutionsSection,
  CTASection,
  HeroSection,
  ProcessSection,
  ServiceCategoriesSection,
  ServicesOverviewSection,
} from "./_sections";

export default function Services() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroSection />
      <ServicesOverviewSection />
      <ServiceCategoriesSection />
      <AISolutionsSection />
      <ProcessSection />
      <CTASection />
      <ScrollIndicator variant="default" />
    </div>
  );
}
