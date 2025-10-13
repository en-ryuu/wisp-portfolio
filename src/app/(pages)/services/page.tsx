"use client";
import ScrollIndicator from "@/components/ScrollIndicator";
import AISolutionsSection from "./_sections/AISolutionsSection";
import CTASection from "./_sections/CTASection";
import HeroSection from "./_sections/HeroSection";
import ProcessSection from "./_sections/ProcessSection";
import ServiceCategoriesSection from "./_sections/ServiceCategoriesSection";
import ServicesOverviewSection from "./_sections/ServicesOverviewSection";

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
