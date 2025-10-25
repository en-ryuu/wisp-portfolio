"use client";
import { aiSolutions } from "@/config/services";
import { useContactNavigation } from "@/hooks/useContactNavigation";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import { useSmoothReveal } from "@/hooks/useSmoothReveal";

export default function AISolutionsSection() {
  const navigateToContact = useContactNavigation();
  const sectionTitleRef = useSmoothReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 1.0,
    from: "bottom",
    reverse: true,
  });

  const sectionSubtitleRef = useSmoothReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 1.0,
    from: "bottom",
    reverse: true,
  });

  // Use GSAP staggered animation for AI solution cards
  const cardsContainerRef = useGSAPStagger<HTMLDivElement>({
    delay: 0.2,
    duration: 0.8,
    from: "bottom",
    reverse: true,
    stagger: 0.06,
    scale: 0.96,
    threshold: 0.1,
    y: 40,
  });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
          >
            AI SOLUTIONS
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            Intelligent Technology for Modern Business
          </h3>
        </div>

        {/* AI Solutions Grid */}
        <div
          ref={cardsContainerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              data-stagger-item
              className="group p-8 bg-gradient-to-br from-background via-background to-muted/20 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer border border-foreground/10 hover:border-foreground/20"
            >
              <h4 className="text-2xl font-light tracking-wide text-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                {solution.title}
              </h4>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* Applications */}
              <div className="mb-6">
                <p className="text-sm text-foreground/60 tracking-wider uppercase mb-3">
                  Applications
                </p>
                <div className="space-y-2">
                  {solution.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full"></div>
                      <span className="text-sm text-foreground/80">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-sm text-foreground/60 tracking-wider uppercase mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-foreground/10 text-foreground/70 text-xs rounded-full hover:bg-foreground/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for AI Solutions */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent rounded-lg">
            <h4 className="text-2xl font-light tracking-wide text-foreground mb-4">
              Ready to Harness AI?
            </h4>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Let us help you implement cutting-edge AI solutions that transform
              your business operations and unlock new possibilities for growth
              and innovation.
            </p>
            <button
              onClick={navigateToContact}
              className="px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105"
            >
              DISCUSS AI PROJECT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
