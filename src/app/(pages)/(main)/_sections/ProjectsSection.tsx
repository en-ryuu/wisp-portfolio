"use client";
import ProjectImage from "@/components/ProjectImage";
import { featuredProjects } from "@/config/main";
import { ImagePosition } from "@/data/projects";
import { useStickyParallaxProjects } from "@/hooks/useStickyParallaxProjects";
import Link from "next/link";
import { useRef } from "react";

export default function ProjectsSection() {
  const projectsContainerRef = useRef<HTMLElement | null>(null);
  const { projectRefs, imageRefs, contentRefs } = useStickyParallaxProjects({
    containerRef: projectsContainerRef as React.RefObject<HTMLElement>,
  });

  // const router = useRouter(); // Removed unused variable

  return (
    <section ref={projectsContainerRef} className="relative">
      {/* Section Title */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-foreground mb-6 sm:mb-8">
            PROJECTS
          </h2>
          <h3 className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70">
            Digital Innovations
          </h3>
        </div>
      </div>

      {/* Featured Projects with Sticky Parallax */}
      {featuredProjects.map((project, index) => (
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
              className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/5"
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                title={project.title}
                size="lg"
                objectPosition={
                  (project.imagePosition as ImagePosition) || "center"
                }
              />

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                <Link href={`/projects/${project.id}`}>
                  <button className="group relative px-6 py-3 lg:px-8 lg:py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
                    <span className="relative z-10 text-sm lg:text-base">
                      VIEW PROJECT
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* View All Projects Button */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/projects">
            <button className="group relative px-8 py-4 lg:px-12 lg:py-6 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
              <span className="relative z-10 text-lg lg:text-xl">
                VIEW ALL PROJECTS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
