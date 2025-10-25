"use client";
import ScrollIndicator from "@/components/ScrollIndicator";
import HeroSection from "./_sections/HeroSection";
import TeamSection from "./_sections/TeamSection";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-6 py-20">
        <HeroSection />
        <TeamSection />
      </div>
      <ScrollIndicator variant="arrow" />
    </div>
  );
}
