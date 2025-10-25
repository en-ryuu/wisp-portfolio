"use client";
import { useContactNavigation } from "@/hooks/useContactNavigation";
import { useTextReveal } from "@/hooks/useTextReveal";
import { Link as TransitionLink } from "next-transition-router";

export default function HeroSection() {
  const navigateToContact = useContactNavigation();
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

  return (
    <>
      {/* Background Graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10">
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
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-5xl">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
          >
            WISP
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wider text-foreground/80 mb-8 sm:mb-12"
          >
            Technologies
          </h2>
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/60 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16"
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
            <button
              onClick={navigateToContact}
              className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
