"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/config/about";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { Link as TransitionLink } from "next-transition-router";
import Image from "next/image";

// Reusable Team Member Card Component
interface TeamMemberCardProps {
  member: {
    id: string;
    name: string;
    title: string;
    description: string;
    image?: string;
    initials: string;
    resume?: any; // Can be Resume object or undefined
  };
  ref: React.RefObject<HTMLDivElement | null>;
}

function TeamMemberCard({ member, ref }: TeamMemberCardProps) {
  return (
    <div ref={ref} className="text-center group">
      <div className="relative">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-foreground/25 to-foreground/5 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl font-light text-foreground/70">
              {member.initials}
            </span>
          )}
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-br from-foreground/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-xl font-light text-foreground mt-4 mb-2">
        {member.name}
      </h3>
      <p className="text-foreground/60 text-sm mb-2">{member.title}</p>
      <Badge variant="secondary" className="mb-3 text-xs">
        Co-Founder
      </Badge>
      <p className="text-foreground/50 text-sm max-w-xs mx-auto leading-relaxed">
        {member.description}
      </p>
      {member.resume && (
        <TransitionLink href={`/about/team/${member.id}`}>
          <Button variant="outline" size="sm" className="mt-4 text-xs">
            View Resume
          </Button>
        </TransitionLink>
      )}
    </div>
  );
}

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

      {/* Team Layout - 3 on top, 2 on bottom */}
      <div className="relative max-w-7xl mx-auto">
        {/* Top Row - 3 team members */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {teamMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                ref={index === 0 ? ceoCardRef : teamMemberRefs[index - 1]}
              />
            ))}
          </div>
        </div>

        {/* Bottom Row - 2 team members centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-2xl">
            {teamMembers.slice(3).map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                ref={teamMemberRefs[index + 2]}
              />
            ))}
          </div>
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
