"use client";
import { useStaggeredTextReveal, useTextReveal } from "@/hooks/useTextReveal";

export default function HeroSection() {
  const titleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0,
    duration: 0.8,
    from: "bottom",
  });
  const subtitleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 0.8,
    from: "bottom",
  });
  const descriptionRefs = useStaggeredTextReveal<HTMLParagraphElement>(2, {
    delay: 0.8,
    stagger: 0.3,
    from: "bottom",
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-6xl mx-auto text-center">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
        >
          SERVICES
        </h1>

        <h2
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wider text-foreground/70 mb-8 sm:mb-12"
        >
          Comprehensive Software Solutions
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <p
            ref={descriptionRefs[0]}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed"
          >
            From fintech applications to static websites, from complex ledgers
            to interactive dashboards, from content management systems to
            inventory management solutions - we illuminate every aspect of your
            digital needs.
          </p>

          <p
            ref={descriptionRefs[1]}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed"
          >
            Our expertise spans across all industries and technologies,
            delivering cutting-edge solutions that transform your business
            vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
}
