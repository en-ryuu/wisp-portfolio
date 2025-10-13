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
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-6xl mx-auto text-center">
        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-tight text-foreground mb-8"
        >
          SERVICES
        </h1>

        <h2
          ref={subtitleRef}
          className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wider text-foreground/70 mb-12"
        >
          Comprehensive Software Solutions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <p
            ref={descriptionRefs[0]}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed"
          >
            From fintech applications to static websites, from complex ledgers
            to interactive dashboards, from content management systems to
            inventory management solutions - we illuminate every aspect of your
            digital needs.
          </p>

          <p
            ref={descriptionRefs[1]}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed"
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
