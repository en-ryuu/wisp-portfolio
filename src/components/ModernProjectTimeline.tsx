"use client";

import { ProjectTimelineItem } from "@/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ModernProjectTimelineProps {
  timeline: ProjectTimelineItem[];
  projectTitle: string;
}

export default function ModernProjectTimeline({
  timeline,
  projectTitle,
}: ModernProjectTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !progressRef.current) return;

    const ctx = gsap.context(() => {
      // Animate progress bar
      gsap.fromTo(
        progressRef.current,
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

      // Animate timeline items with stagger
      gsap.utils.toArray(".timeline-item").forEach((item: any, index) => {
        gsap.fromTo(
          item,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate phase indicators
      gsap.utils.toArray(".phase-dot").forEach((dot: any, index) => {
        gsap.fromTo(
          dot,
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: dot,
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
            A detailed timeline of the {projectTitle} development process,
            showcasing challenges, solutions, and milestones.
          </p>
        </div>

        {/* Modern Timeline with Progress Bar */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 w-px h-full bg-foreground/20 transform -translate-x-1/2"></div>
          <div
            ref={progressRef}
            className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-foreground/40 via-foreground/60 to-foreground/40 transform -translate-x-1/2"
          ></div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Phase Dot */}
                <div className="absolute left-1/2 w-6 h-6 bg-foreground rounded-full border-4 border-background shadow-lg phase-dot z-10 transform -translate-x-1/2"></div>

                {/* Content Card */}
                <div
                  className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                >
                  <div className="bg-background border border-foreground/10 p-8">
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

                    {/* Phase Details - Compact Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Challenges */}
                      <div>
                        <h4 className="text-lg font-medium text-foreground mb-3 flex items-center">
                          <span className="w-2 h-2 bg-red-500 mr-3"></span>
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
                        <h4 className="text-lg font-medium text-foreground mb-3 flex items-center">
                          <span className="w-2 h-2 bg-green-500 mr-3"></span>
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
                    <div className="mt-6 pt-6 border-t border-foreground/10">
                      <h4 className="text-lg font-medium text-foreground mb-3">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
