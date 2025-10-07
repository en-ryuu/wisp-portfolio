import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

interface UseStickyParallaxProjectsOptions {
  projects: Project[];
  containerRef: React.RefObject<HTMLElement | null>;
}

export function useStickyParallaxProjects({
  projects,
  containerRef,
}: UseStickyParallaxProjectsOptions) {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const container = containerRef.current;
    const projects = projectRefs.current.filter(Boolean) as HTMLDivElement[];
    const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
    const contents = contentRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!projects.length) return;

    // Set initial states
    gsap.set(images, { scale: 1.1, opacity: 0 });
    gsap.set(contents, { opacity: 0, y: 100 });

    // Create sticky parallax effect for each project
    projects.forEach((project, index) => {
      const image = images[index];
      const content = contents[index];

      if (!image || !content) return;

      // Sticky image with parallax scaling
      gsap.fromTo(
        image,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            pin: false,
          },
        }
      );

      // Content reveal animation
      gsap.fromTo(
        content,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      // Subtle image parallax movement - slower to keep image in frame
      gsap.fromTo(
        image,
        { y: "10%" },
        {
          y: "-10%",
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: 2, // Slower scrub for more controlled movement
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [projects, containerRef]);

  return {
    projectRefs,
    imageRefs,
    contentRefs,
  };
}
