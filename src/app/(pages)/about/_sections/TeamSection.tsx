"use client";
import { Badge } from "@/components/ui/badge";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
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
    name: "Prasiddha Shakya",
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
    name: "Jay Shakya",
    title: "Product Strategy Director",
    description: "Leading product vision, research, and strategic development",
    isCEO: false,
    isCoFounder: true,
  },
];

export default function TeamSection() {
  // Intersection observer animations for team section with delayed start
  const teamSectionTitleRef = useIntersectionReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 0.8,
    from: "bottom",
    reverse: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px", // Start animation when element is 50px from viewport
  });
  const teamSectionSubtitleRef = useIntersectionReveal<HTMLParagraphElement>({
    delay: 0.4,
    duration: 0.8,
    from: "bottom",
    reverse: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });
  const ceoCardRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
    reverse: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  // Fix: Use individual intersection reveals for each team member instead of staggered
  const teamMemberRefs = [
    useIntersectionReveal<HTMLDivElement>({
      delay: 0.8,
      duration: 0.8,
      from: "bottom",
      reverse: true,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }),
    useIntersectionReveal<HTMLDivElement>({
      delay: 0.9,
      duration: 0.8,
      from: "bottom",
      reverse: true,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }),
    useIntersectionReveal<HTMLDivElement>({
      delay: 1.0,
      duration: 0.8,
      from: "bottom",
      reverse: true,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }),
    useIntersectionReveal<HTMLDivElement>({
      delay: 1.1,
      duration: 0.8,
      from: "bottom",
      reverse: true,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }),
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <h2
          ref={teamSectionTitleRef}
          className="text-5xl font-light text-foreground mb-6"
        >
          MEET THE TEAM
        </h2>
        <p
          ref={teamSectionSubtitleRef}
          className="text-xl text-foreground/60 max-w-2xl mx-auto"
        >
          The brilliant minds behind Wisp Technologies, guiding innovation
          forward
        </p>
      </div>

      {/* Creative Asymmetric Layout */}
      <div className="relative">
        {/* CEO - Centered and prominent */}
        <div className="flex justify-center mb-20">
          <div ref={ceoCardRef} className="text-center group">
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
              ref={teamMemberRefs[index]}
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
              <p className="text-foreground/60 text-sm mb-1">{member.title}</p>
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

      {/* CTA Section */}
      <div className="text-center mt-24">
        <TransitionLink href="/">
          <button className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105">
            <span className="relative z-10">RETURN HOME</span>
            <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </TransitionLink>
      </div>
    </div>
  );
}
