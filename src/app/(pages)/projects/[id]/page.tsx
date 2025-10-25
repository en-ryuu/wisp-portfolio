"use client";

import ModernProjectTimeline from "@/components/ModernProjectTimeline";
import ProjectImage from "@/components/ProjectImage";
import ProjectTimeline from "@/components/ProjectTimeline";
import ScrollIndicator from "@/components/ScrollIndicator";
import { projects } from "@/data/projects";
import { useContactNavigation } from "@/hooks/useContactNavigation";
import { useStaggeredTextReveal, useTextReveal } from "@/hooks/useTextReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { use, useEffect, useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);

  // All hooks must be called at the top level
  const navigateToContact = useContactNavigation();
  const titleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0,
    duration: 0.8,
    from: "bottom",
  });
  const subtitleRef = useTextReveal<HTMLParagraphElement>({
    delay: 0.3,
    duration: 0.8,
    from: "bottom",
  });
  const contentRefs = useStaggeredTextReveal<HTMLDivElement>(4, {
    delay: 0.6,
    stagger: 0.2,
    from: "bottom",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !project) return;

    const ctx = gsap.context(() => {
      // Animate project image
      gsap.fromTo(
        ".project-hero-image",
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".project-hero-image",
            start: "top 80%",
          },
        }
      );

      // Animate project stats - start immediately, no scroll trigger
      gsap.utils.toArray(".stat-item").forEach((stat: unknown) => {
        const element = stat as Element;
        const number = element.querySelector(".stat-number");
        const finalValue = parseInt(number?.textContent || "0");

        // Set initial state - show the number but start from 0
        gsap.set(number, {
          textContent: 0,
          opacity: 1,
          scale: 1,
        });

        // Create animation timeline that starts immediately
        const tl = gsap.timeline({
          delay: 0.5, // Small delay to let the section fade in first
        });

        // Animate number counting
        tl.to(number, {
          textContent: finalValue,
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-thin text-foreground mb-4">
            Project Not Found
          </h1>
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground hover:border-foreground/40 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="fixed top-20 left-4 md:top-24 md:left-6 z-50">
        <Link
          href="/projects"
          className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm md:text-base"
        >
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-2" />
          <span className="hidden sm:inline">Back to Projects</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Project Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-foreground/60 tracking-wider uppercase">
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
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
              </div>

              <h1
                ref={titleRef}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
              >
                {project.title}
              </h1>

              <p
                ref={subtitleRef}
                className="text-xl text-foreground/70 leading-relaxed mb-8"
              >
                {project.longDescription}
              </p>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="project-hero-image relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
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
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              ref={(el) => {
                if (contentRefs[0] && el) {
                  contentRefs[0].current = el;
                }
              }}
              className="content-section text-center"
            >
              <div className="stat-item">
                <div className="text-3xl md:text-4xl font-thin text-foreground mb-2">
                  <span className="stat-number">{project.year}</span>
                </div>
                <div className="text-sm text-foreground/60 tracking-wider uppercase">
                  Year
                </div>
              </div>
            </div>

            <div
              ref={(el) => {
                if (contentRefs[1] && el) {
                  contentRefs[1].current = el;
                }
              }}
              className="content-section text-center"
            >
              <div className="stat-item">
                <div className="text-3xl md:text-4xl font-thin text-foreground mb-2">
                  <span className="stat-number">{project.duration}</span>
                </div>
                <div className="text-sm text-foreground/60 tracking-wider uppercase">
                  Duration
                </div>
              </div>
            </div>

            <div
              ref={(el) => {
                if (contentRefs[2] && el) {
                  contentRefs[2].current = el;
                }
              }}
              className="content-section text-center"
            >
              <div className="stat-item">
                <div className="text-3xl md:text-4xl font-thin text-foreground mb-2">
                  <span className="stat-number">{project.teamSize}</span>
                </div>
                <div className="text-sm text-foreground/60 tracking-wider uppercase">
                  Team Size
                </div>
              </div>
            </div>

            <div
              ref={(el) => {
                if (contentRefs[3] && el) {
                  contentRefs[3].current = el;
                }
              }}
              className="content-section text-center"
            >
              <div className="stat-item">
                <div className="text-3xl md:text-4xl font-thin text-foreground mb-2">
                  <span className="stat-number">
                    {project.technologies.length}
                  </span>
                </div>
                <div className="text-sm text-foreground/60 tracking-wider uppercase">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="content-section text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-thin tracking-tight text-foreground mb-4">
              Technologies Used
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A comprehensive stack of modern technologies powering this project
            </p>
          </div>

          <div className="content-section flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-foreground/10 text-foreground/70 text-sm rounded-full border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenges */}
            <div className="content-section">
              <h2 className="text-3xl md:text-4xl font-thin tracking-tight text-foreground mb-8">
                Challenges
              </h2>
              <ul className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <p className="text-foreground/70 leading-relaxed">
                      {challenge}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="content-section">
              <h2 className="text-3xl md:text-4xl font-thin tracking-tight text-foreground mb-8">
                Solutions
              </h2>
              <ul className="space-y-6">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <p className="text-foreground/70 leading-relaxed">
                      {solution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="content-section text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-thin tracking-tight text-foreground mb-4">
              Results & Impact
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Measurable outcomes and achievements from this project
            </p>
          </div>

          <div className="content-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="text-center p-6 border border-foreground/10 rounded-2xl hover:border-foreground/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-foreground/40 rounded-full"></div>
                </div>
                <p className="text-foreground/70 leading-relaxed">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      {/* Timeline - Hide ModernProjectTimeline on mobile, use ProjectTimeline */}
      <div className="hidden md:block">
        <ModernProjectTimeline
          timeline={project.timeline}
          projectTitle={project.title}
        />
      </div>

      {/* Mobile Timeline */}
      <div className="block md:hidden">
        <ProjectTimeline
          timeline={project.timeline}
          projectTitle={project.title}
        />
      </div>
      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground mb-8">
            Interested in Similar Projects?
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how we can create innovative solutions for your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={navigateToContact}
              className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
            >
              Start a Project
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 border border-foreground/20 text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      <ScrollIndicator variant="dots" />
    </div>
  );
}
