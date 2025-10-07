"use client";
import { useStickyParallaxProjects } from "@/hooks/useStickyParallaxProjects";
import { useRef } from "react";

// Sample projects data
const projects = [
  {
    id: "1",
    title: "Naafa",
    description:
      "An innovative stock market analysis platform tailored for the Nepali context, offering real-time buy/sell recommendations and market insights powered by AI algorithms. Inspired by tools like Chukul Research, it helps local investors make informed decisions with intuitive visualizations and predictive analytics.",
    image: "/api/placeholder/800/600",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "Chart.js",
    ],
  },
  {
    id: "2",
    title: "LLMForge",
    description:
      "A work-in-progress one-click deployment solution for large language models (LLMs), simplifying the process of hosting and scaling AI models on cloud infrastructure. Designed for developers to quickly prototype and deploy custom LLMs with minimal configuration.",
    image: "/api/placeholder/800/600",
    technologies: [
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Hugging Face Transformers",
      "AWS",
      "TypeScript",
    ],
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution built with Next.js and microservices architecture. Features include real-time inventory management, AI-powered recommendations, and seamless payment processing.",
    image: "/api/placeholder/800/600",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe"],
  },
  {
    id: "4",
    title: "AI Analytics Dashboard",
    description:
      "An intelligent analytics platform that processes millions of data points to provide actionable insights. Built with machine learning algorithms and real-time data visualization.",
    image: "/api/placeholder/800/600",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "WebSocket"],
  },
];

export default function ProjectsSection() {
  const projectsContainerRef = useRef<HTMLElement | null>(null);
  const { projectRefs, imageRefs, contentRefs } = useStickyParallaxProjects({
    containerRef: projectsContainerRef as React.RefObject<HTMLElement>,
  });

  return (
    <section ref={projectsContainerRef} className="relative">
      {/* Section Title */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8">
            PROJECTS
          </h2>
          <h3 className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70">
            Digital Innovations
          </h3>
        </div>
      </div>

      {/* Projects with Sticky Parallax */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => {
            projectRefs.current[index] = el;
          }}
          className={`relative min-h-screen flex flex-col lg:flex-row ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Sticky Image Container */}
          <div className="w-full lg:w-1/2 sticky top-0 h-screen overflow-hidden">
            <div
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-foreground/5 to-background"
            >
              {/* Project Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 lg:mb-6 bg-foreground/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-foreground/40 rounded-full"></div>
                  </div>
                  <p className="text-foreground/60 text-lg lg:text-xl font-light">
                    {project.title}
                  </p>
                </div>
              </div>

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 xl:p-24">
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="max-w-lg space-y-6 lg:space-y-8"
            >
              <div className="space-y-3 lg:space-y-4">
                <span className="text-sm text-foreground/60 tracking-wider uppercase">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-wide text-foreground">
                  {project.title}
                </h3>
              </div>

              <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 lg:gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-foreground/10 text-foreground/70 text-xs lg:text-sm rounded-full border border-foreground/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6 lg:pt-8">
                <button className="group relative px-6 py-3 lg:px-8 lg:py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
                  <span className="relative z-10 text-sm lg:text-base">
                    VIEW PROJECT
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
