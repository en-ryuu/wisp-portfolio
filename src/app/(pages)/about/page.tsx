"use client";
import { Badge } from "@/components/ui/badge";
import { useStaggeredTextReveal, useTextReveal } from "@/hooks/useTextReveal";
import { Link as TransitionLink } from "next-transition-router";

// Team data array
const teamMembers = [
  {
    id: "ceo",
    initials: "DA",
    name: "Diwakar Adhikari",
    title: "Chief Executive Officer",
    description:
      "Visionary leader driving strategic direction and company growth",
    isCEO: true,
    isCoFounder: true,
  },
  {
    id: "cto",
    initials: "AP",
    name: "Abhishek Pandey",
    title: "Chief Technology Officer",
    description: "Leading technical architecture and development excellence",
    isCEO: false,
    isCoFounder: true,
  },
  {
    id: "marketing",
    initials: "PS",
    name: "Prasiddha Sakya",
    title: "Marketing & Research Director",
    description: "Driving market strategy and research initiatives",
    isCEO: false,
    isCoFounder: true,
  },
  {
    id: "finance",
    initials: "HC",
    name: "Harsh Chachan",
    title: "Head of Finance",
    description: "Managing financial strategy and operational excellence",
    isCEO: false,
    isCoFounder: true,
  },
  {
    id: "product",
    initials: "JS",
    name: "Jay Sakya",
    title: "Product Strategy Director",
    description: "Leading product vision, research, and strategic development",
    isCEO: false,
    isCoFounder: true,
  },
];

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
  const teamRefs = useStaggeredTextReveal<HTMLDivElement>(teamMembers.length, {
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

          {/* Creative Asymmetric Layout */}
          <div className="relative">
            {/* CEO - Centered and prominent */}
            <div className="flex justify-center mb-20">
              <div ref={teamRefs[0]} className="text-center group">
                <div className="relative">
                  <div className="w-40 h-40 mx-auto bg-gradient-to-br from-foreground/30 to-foreground/10 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl font-light text-foreground/70">
                      {teamMembers[0].initials}
                    </span>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 w-40 h-40 mx-auto bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-3xl font-light text-foreground mt-6 mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-foreground/70 text-xl mb-2">
                  {teamMembers[0].title}
                </p>
                <Badge variant="secondary" className="mb-3">
                  Co-Founder
                </Badge>
                <p className="text-foreground/50 text-base max-w-md mx-auto leading-relaxed">
                  {teamMembers[0].description}
                </p>
              </div>
            </div>

            {/* Team Grid - Asymmetric but balanced */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {teamMembers.slice(1).map((member, index) => (
                <div
                  key={member.id}
                  ref={teamRefs[index + 1]}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="w-28 h-28 mx-auto bg-gradient-to-br from-foreground/25 to-foreground/5 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-xl font-light text-foreground/70">
                        {member.initials}
                      </span>
                    </div>
                    <div className="absolute inset-0 w-28 h-28 mx-auto bg-gradient-to-br from-foreground/5 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-light text-foreground mt-4 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-1">
                    {member.title}
                  </p>
                  <Badge variant="secondary" className="mb-2 text-xs">
                    Co-Founder
                  </Badge>
                  <p className="text-foreground/50 text-xs max-w-xs mx-auto leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
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
