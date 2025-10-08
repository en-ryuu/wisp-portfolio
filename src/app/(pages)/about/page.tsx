"use client";
import ScrollIndicator from "@/components/ScrollIndicator";
import { HeroSection, StatsSection, TeamSection } from "./_sections";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-6 py-20">
        <HeroSection />
        <StatsSection />
        <TeamSection />
      </div>
      <ScrollIndicator variant="arrow" />
    </div>
  );
}
