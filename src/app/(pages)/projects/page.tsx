"use client";

import ProjectImage from "@/components/ProjectImage";
import ScrollIndicator from "@/components/ScrollIndicator";
import { projects } from "@/data/projects";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsPage() {
  const titleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 1.2,
    from: "bottom",
  });
  const subtitleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 1,
    from: "bottom",
  });
  const descriptionRef = useTextReveal<HTMLParagraphElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate project items on scroll
    if (containerRef.current) {
      gsap.utils.toArray(".project-item").forEach((item: unknown) => {
        const element = item as Element;
        gsap.fromTo(
          element,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  });

  return (
    <>
      {/* Background Graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Radial gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 70%, rgba(0,0,0,0.05) 100%)",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center max-w-6xl">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
          >
            PROJECTS
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wider text-foreground/80 mb-8 sm:mb-12"
          >
            Digital Innovations
          </h2>
          <p
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-foreground/60 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16"
          >
            Illuminating the path to digital excellence through innovative
            solutions
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={containerRef} className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Projects Grid - Clean, seamless layout */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="project-item group">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative h-96 lg:h-[500px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-foreground/5 to-background">
                        <ProjectImage
                          src={project.image}
                          alt={project.title}
                          title={project.title}
                          size="lg"
                          objectPosition={project.imagePosition || "center"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="space-y-8">
                      {/* Status and Category */}
                      <div className="flex items-center gap-6">
                        <span className="text-sm text-foreground/60 tracking-wider uppercase">
                          {project.category}
                        </span>
                        <span
                          className={`px-4 py-1 text-xs font-medium ${
                            project.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : project.status === "in-progress"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {project.status === "completed"
                            ? "Completed"
                            : project.status === "in-progress"
                            ? "In Progress"
                            : "Planned"}
                        </span>
                        <span className="text-sm text-foreground/60">
                          {project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-foreground">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-foreground/10 text-foreground/70 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-4 py-2 bg-foreground/10 text-foreground/70 text-sm">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-6 pt-8">
                        <Link
                          href={`/projects/${project.id}`}
                          className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105"
                        >
                          <span className="relative z-10">VIEW PROJECT</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        {project.links?.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
                          >
                            LIVE DEMO
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-thin tracking-tight text-foreground mb-8">
            Ready to Illuminate?
          </h2>
          <p className="text-xl text-foreground/70 mb-16 max-w-3xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with
            innovative technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105"
            >
              <span className="relative z-10">START A PROJECT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>

      <ScrollIndicator variant="minimal" />
    </>
  );
}
