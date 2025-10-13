"use client";
import { serviceCategories } from "@/config/services";
import { useGSAPStagger } from "@/hooks/useGSAPStagger";
import { useSmoothReveal } from "@/hooks/useSmoothReveal";

export default function ServicesOverviewSection() {
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

  // Use GSAP staggered animation for cards
  const cardsContainerRef = useGSAPStagger<HTMLDivElement>({
    delay: 0.2,
    duration: 0.8,
    from: "bottom",
    reverse: true,
    stagger: 0.08,
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
            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            OUR EXPERTISE
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            Comprehensive Technology Solutions
          </h3>
        </div>

        {/* Service Categories Grid */}
        <div
          ref={cardsContainerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              data-stagger-item
              className="group p-8 bg-gradient-to-br from-background via-background to-muted/20 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h4 className="text-2xl font-light tracking-wide text-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                {category.title}
              </h4>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                <p className="text-sm text-foreground/60 tracking-wider uppercase">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-foreground/10 text-foreground/80 text-sm rounded-full hover:bg-foreground/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
