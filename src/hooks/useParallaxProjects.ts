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

interface UseParallaxProjectsOptions {
  projects: Project[];
  containerRef: React.RefObject<HTMLElement>;
}

export function useParallaxProjects({
  projects,
  containerRef,
}: UseParallaxProjectsOptions) {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const currentProjectRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const container = containerRef.current;
    const images = imagesRef.current.filter(Boolean) as HTMLDivElement[];
    const content = contentRef.current;

    if (!images.length || !content) return;

    // Set initial state
    gsap.set(images, { y: "50%", opacity: 0, scale: 0.9 });
    gsap.set(content, { opacity: 0, y: 50 });

    // Create parallax animations for each image
    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        { y: "50%", opacity: 0, scale: 0.9 },
        {
          y: "0%",
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: container,
            start: `top+=${index * 100}px bottom`,
            end: `bottom+=${index * 100}px top`,
            scrub: 1,
            onEnter: () => {
              // Update content when this image becomes active
              updateContent(index);
            },
            onEnterBack: () => {
              updateContent(index);
            },
          },
        }
      );
    });

    // Content reveal animation
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    const updateContent = (projectIndex: number) => {
      if (currentProjectRef.current === projectIndex) return;
      currentProjectRef.current = projectIndex;

      const project = projects[projectIndex];
      if (!project || !content) return;

      // Animate content change
      gsap.to(content, {
        opacity: 0,
        y: 30,
        duration: 0.3,
        onComplete: () => {
          // Update content
          const titleElement = content.querySelector("[data-project-title]");
          const descriptionElement = content.querySelector(
            "[data-project-description]"
          );
          const technologiesElement = content.querySelector(
            "[data-project-technologies]"
          );

          if (titleElement) titleElement.textContent = project.title;
          if (descriptionElement)
            descriptionElement.textContent = project.description;
          if (technologiesElement) {
            technologiesElement.innerHTML = project.technologies
              .map(
                (tech) =>
                  `<span class="inline-block px-3 py-1 bg-foreground/10 text-foreground/70 text-sm rounded-full">${tech}</span>`
              )
              .join(" ");
          }

          // Animate back in
          gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.3,
          });
        },
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [projects, containerRef]);

  return {
    imagesRef,
    contentRef,
  };
}
