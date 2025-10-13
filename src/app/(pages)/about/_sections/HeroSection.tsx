"use client";
import { useStaggeredTextReveal, useTextReveal } from "@/hooks/useTextReveal";

export default function HeroSection() {
  const heroTitleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 1,
    from: "bottom",
  });
  const heroSubtitleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 0.8,
    from: "bottom",
  });
  const heroTextRef = useTextReveal<HTMLParagraphElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
  });

  const contentRefs = useStaggeredTextReveal<HTMLDivElement>(2, {
    delay: 0.8,
    stagger: 0.3,
    from: "bottom",
  });

  return (
    <div className="mb-24">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <h1
          ref={heroTitleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
        >
          ABOUT US
        </h1>
        <h2
          ref={heroSubtitleRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-foreground/70 mb-8 sm:mb-12"
        >
          Pioneering the Future of Technology
        </h2>
        <p
          ref={heroTextRef}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/60 max-w-4xl mx-auto leading-relaxed"
        >
          We are a team of visionary technologists, innovative engineers, and
          creative problem-solvers dedicated to transforming complex challenges
          into elegant digital solutions. Our mission is to illuminate the path
          forward through cutting-edge technology and human-centered design.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid md:grid-cols-2 gap-20">
        <div ref={contentRefs[0]} className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground">
            INNOVATION
          </h3>
          <p className="text-foreground/60 leading-relaxed text-sm sm:text-base md:text-lg">
            We specialize in creating intelligent systems that learn, adapt, and
            evolve. Our advanced algorithms process vast amounts of data to
            uncover patterns and insights that drive innovation across
            industries.
          </p>
        </div>
        <div ref={contentRefs[1]} className="space-y-6 sm:space-y-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground">
            EXCELLENCE
          </h3>
          <p className="text-foreground/60 leading-relaxed text-sm sm:text-base md:text-lg">
            Multi-layered neural networks that mimic human cognition to solve
            complex problems and make intelligent decisions. We build robust
            architectures designed for scale, performance, and future growth.
          </p>
        </div>
      </div>
    </div>
  );
}
