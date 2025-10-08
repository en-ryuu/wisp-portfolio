"use client";

import { ProjectTimelineItem } from "@/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectTimelineProps {
  timeline: ProjectTimelineItem[];
  projectTitle: string;
}

export default function ProjectTimeline({
  timeline,
  projectTitle,
}: ProjectTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate timeline items
      itemRefs.current.forEach((item) => {
        if (!item) return;

        // Initial state
        gsap.set(item, {
          opacity: 0,
          y: 50,
          scale: 0.95,
        });

        // Animate in
        gsap.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        // Removed hover animations for cleaner timeline experience
      });

      // Animate phase indicators
      gsap.utils.toArray(".phase-indicator").forEach((indicator: unknown) => {
        const element = indicator as Element;
        gsap.fromTo(
          element,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [timeline]);

  return (
    <div ref={containerRef} className="relative py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground mb-4">
            Project Journey
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A detailed timeline of the {projectTitle} development process,
            showcasing challenges, solutions, and milestones.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-8 top-0 w-px h-full bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/20"
          ></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="relative flex items-start group"
              >
                {/* Phase Indicator */}
                <div className="absolute left-6 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg phase-indicator z-10"></div>

                {/* Content Card */}
                <div className="ml-16 flex-1">
                  <div className="bg-background border border-foreground/10 rounded-2xl p-8 hover:border-foreground/20 transition-all duration-300">
                    {/* Phase Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-sm text-foreground/60 tracking-wider uppercase">
                          Phase {index + 1}
                        </span>
                        <h3 className="text-2xl font-thin tracking-wide text-foreground mt-1">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 mt-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-foreground/60">
                          {item.duration}
                        </div>
                        <div className="text-xs text-foreground/50">
                          {item.date}
                        </div>
                      </div>
                    </div>

                    {/* Phase Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Challenges */}
                      <div>
                        <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          Challenges
                        </h4>
                        <ul className="space-y-2">
                          {item.challenges.map((challenge, idx) => (
                            <li
                              key={idx}
                              className="text-foreground/70 text-sm flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-red-500/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div>
                        <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          Solutions
                        </h4>
                        <ul className="space-y-2">
                          {item.solutions.map((solution, idx) => (
                            <li
                              key={idx}
                              className="text-foreground/70 text-sm flex items-start"
                            >
                              <span className="w-1.5 h-1.5 bg-green-500/60 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="mt-8 pt-6 border-t border-foreground/10">
                      <h4 className="text-lg font-medium text-foreground mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-foreground/10 text-foreground/70 text-xs rounded-full border border-foreground/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
