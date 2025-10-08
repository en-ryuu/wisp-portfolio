"use client";

import { ProjectTimelineItem } from "@/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardProjectTimelineProps {
  timeline: ProjectTimelineItem[];
  projectTitle: string;
}

export default function CardProjectTimeline({
  timeline,
  projectTitle,
}: CardProjectTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards with stagger
      gsap.utils.toArray(".timeline-card").forEach((card: any, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate progress indicators
      gsap.utils
        .toArray(".progress-indicator")
        .forEach((indicator: any, index) => {
          gsap.fromTo(
            indicator,
            { scale: 0, rotation: -90 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
              delay: index * 0.3,
              scrollTrigger: {
                trigger: indicator,
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-thin tracking-tight text-foreground mb-6">
            Project Journey
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A detailed timeline of the {projectTitle} development process
          </p>
        </div>

        {/* Card-based Timeline */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={item.id} className="timeline-card">
              <div className="flex items-start gap-8">
                {/* Progress Indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-foreground/10 flex items-center justify-center progress-indicator">
                    <div className="w-6 h-6 bg-foreground/40"></div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-16 bg-foreground/20 mt-4"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="bg-background border border-foreground/10 p-8">
                    {/* Phase Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm text-foreground/60 tracking-wider uppercase">
                            Phase {index + 1}
                          </span>
                          <span className="text-sm text-foreground/60">
                            {item.duration}
                          </span>
                          <span className="text-xs text-foreground/50">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-3xl font-thin tracking-wide text-foreground mb-4">
                          {item.title}
                        </h3>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Phase Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Challenges */}
                      <div>
                        <h4 className="text-lg font-medium text-foreground mb-4 flex items-center">
                          <span className="w-2 h-2 bg-red-500 mr-3"></span>
                          Challenges
                        </h4>
                        <ul className="space-y-3">
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
                          <span className="w-2 h-2 bg-green-500 mr-3"></span>
                          Solutions
                        </h4>
                        <ul className="space-y-3">
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
                            className="px-3 py-1 bg-foreground/10 text-foreground/70 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
