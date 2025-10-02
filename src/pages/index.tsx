import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PerformanceSection from "@/components/PerformanceSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Wisp Technologies | Ignite Your Business with AI Innovation
        </title>
        <meta
          name="description"
          content="Transform your business with cutting-edge AI solutions and high-performance web development from Wisp Technologies. From startups to enterprises, we deliver scalable, secure, and intelligent systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen relative bg-black">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <PerformanceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}
