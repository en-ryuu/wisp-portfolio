"use client";
import ScrollIndicator from "@/components/ScrollIndicator";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from "./_sections";

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
