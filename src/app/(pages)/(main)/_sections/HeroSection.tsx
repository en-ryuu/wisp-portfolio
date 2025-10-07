"use client";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link as TransitionLink } from "next-transition-router";
import { useRef } from "react";

export default function HeroSection() {
  const titleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 1.2,
    from: "bottom",
  });
  const subtitleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 1,
    from: "bottom",
  });
  const descriptionRef = useTextReveal<HTMLParagraphElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
  });
  const ctaRef = useTextReveal<HTMLDivElement>({
    delay: 0.8,
    duration: 0.8,
    from: "bottom",
  });
  const particlesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate floating particles
    if (particlesRef.current) {
      gsap.to(particlesRef.current.children, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5,
      });
    }
  });

  return (
    <>
      {/* Background Graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10">
        {/* Floating light particles */}
        <div ref={particlesRef} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-foreground/30 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-foreground/15 rounded-full"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-foreground/25 rounded-full"></div>
          <div className="absolute top-1/2 left-1/5 w-0.5 h-0.5 bg-foreground/40 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-foreground/10 rounded-full"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Radial gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 70%, rgba(0,0,0,0.05) 100%)",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center max-w-5xl">
          <h1
            ref={titleRef}
            className="text-8xl md:text-9xl lg:text-[12rem] font-thin tracking-tight text-foreground mb-8"
          >
            WISP
          </h1>
          <h2
            ref={subtitleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-foreground/80 mb-12"
          >
            Technologies
          </h2>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/60 max-w-4xl mx-auto leading-relaxed mb-16"
          >
            The light that guides you through the darkness of complex software
            development. We illuminate the path to digital excellence.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <TransitionLink href="/about">
              <button className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105">
                <span className="relative z-10">EXPLORE OUR LIGHT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </TransitionLink>
            <button className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
