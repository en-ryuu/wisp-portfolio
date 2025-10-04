"use client";
import { useStaggeredTextReveal, useTextReveal } from "@/hooks/useTextReveal";
import { Link as TransitionLink } from "next-transition-router";

export default function About() {
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
  const statsRefs = useStaggeredTextReveal<HTMLDivElement>(3, {
    delay: 1.2,
    stagger: 0.2,
    from: "bottom",
  });
  const teamRefs = useStaggeredTextReveal<HTMLDivElement>(5, {
    delay: 1.6,
    stagger: 0.15,
    from: "bottom",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1
            ref={heroTitleRef}
            className="text-6xl md:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            ABOUT US
          </h1>
          <h2
            ref={heroSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70 mb-12"
          >
            Pioneering the Future of Technology
          </h2>
          <p
            ref={heroTextRef}
            className="text-lg md:text-xl text-foreground/60 max-w-4xl mx-auto leading-relaxed"
          >
            We are a team of visionary technologists, innovative engineers, and
            creative problem-solvers dedicated to transforming complex
            challenges into elegant digital solutions. Our mission is to
            illuminate the path forward through cutting-edge technology and
            human-centered design.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-20 mb-24">
          <div ref={contentRefs[0]} className="space-y-8">
            <h3 className="text-4xl font-light text-foreground">INNOVATION</h3>
            <p className="text-foreground/60 leading-relaxed text-lg">
              We specialize in creating intelligent systems that learn, adapt,
              and evolve. Our advanced algorithms process vast amounts of data
              to uncover patterns and insights that drive innovation across
              industries.
            </p>
          </div>
          <div ref={contentRefs[1]} className="space-y-8">
            <h3 className="text-4xl font-light text-foreground">EXCELLENCE</h3>
            <p className="text-foreground/60 leading-relaxed text-lg">
              Multi-layered neural networks that mimic human cognition to solve
              complex problems and make intelligent decisions. We build robust
              architectures designed for scale, performance, and future growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center">
          <div ref={statsRefs[0]}>
            <div className="text-5xl font-light text-foreground mb-3">
              99.7%
            </div>
            <div className="text-foreground/60 text-lg">ACCURACY</div>
          </div>
          <div ref={statsRefs[1]}>
            <div className="text-5xl font-light text-foreground mb-3">10TB</div>
            <div className="text-foreground/60 text-lg">DATA PROCESSED</div>
          </div>
          <div ref={statsRefs[2]}>
            <div className="text-5xl font-light text-foreground mb-3">24/7</div>
            <div className="text-foreground/60 text-lg">OPERATIONAL</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-foreground mb-6">
              MEET THE TEAM
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              The brilliant minds behind Wisp Technologies, guiding innovation
              forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Diwakar Adhikari - CEO */}
            <div ref={teamRefs[0]} className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-foreground/60">
                  DA
                </span>
              </div>
              <h3 className="text-2xl font-light text-foreground">
                Diwakar Adhikari
              </h3>
              <p className="text-foreground/60 text-lg">
                Chief Executive Officer
              </p>
              <p className="text-foreground/50 text-sm max-w-xs mx-auto">
                Visionary leader driving strategic direction and company growth
              </p>
            </div>

            {/* Abhishek Pandey - Tech Lead */}
            <div ref={teamRefs[1]} className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-foreground/60">
                  AP
                </span>
              </div>
              <h3 className="text-2xl font-light text-foreground">
                Abhishek Pandey
              </h3>
              <p className="text-foreground/60 text-lg">Tech Lead</p>
              <p className="text-foreground/50 text-sm max-w-xs mx-auto">
                Leading technical architecture and development excellence
              </p>
            </div>

            {/* Prasiddha Sakya - Marketing and Research */}
            <div ref={teamRefs[2]} className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-foreground/60">
                  PS
                </span>
              </div>
              <h3 className="text-2xl font-light text-foreground">
                Prasiddha Sakya
              </h3>
              <p className="text-foreground/60 text-lg">
                Marketing & Research Director
              </p>
              <p className="text-foreground/50 text-sm max-w-xs mx-auto">
                Driving market strategy and research initiatives
              </p>
            </div>

            {/* Harsh Chachan - Head of Finance */}
            <div ref={teamRefs[3]} className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-foreground/60">
                  HC
                </span>
              </div>
              <h3 className="text-2xl font-light text-foreground">
                Harsh Chachan
              </h3>
              <p className="text-foreground/60 text-lg">Head of Finance</p>
              <p className="text-foreground/50 text-sm max-w-xs mx-auto">
                Managing financial strategy and operational excellence
              </p>
            </div>

            {/* Jay Sakya - Product Owner */}
            <div ref={teamRefs[4]} className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-foreground/20 to-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-foreground/60">
                  JS
                </span>
              </div>
              <h3 className="text-2xl font-light text-foreground">Jay Sakya</h3>
              <p className="text-foreground/60 text-lg">
                Product Strategy Director
              </p>
              <p className="text-foreground/50 text-sm max-w-xs mx-auto">
                Leading product vision, research, and strategic development
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <TransitionLink href="/">
            <button className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105">
              <span className="relative z-10">RETURN HOME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
