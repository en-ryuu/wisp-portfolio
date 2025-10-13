"use client";
import ScrollIndicator from "@/components/ScrollIndicator";
import AboutSection from "./_sections/AboutSection";
import ContactSection from "./_sections/ContactSection";
import HeroSection from "./_sections/HeroSection";
import ProjectsSection from "./_sections/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollIndicator variant="default" />
    </div>
  );
}
