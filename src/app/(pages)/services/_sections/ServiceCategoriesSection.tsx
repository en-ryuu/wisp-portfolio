"use client";
import { detailedServices } from "@/config/services";
import { useSmoothReveal } from "@/hooks/useSmoothReveal";

export default function ServiceCategoriesSection() {
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

  // Create individual refs for each category with smooth animations
  const categoryRef1 = useSmoothReveal<HTMLDivElement>({
    delay: 0.4,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const categoryRef2 = useSmoothReveal<HTMLDivElement>({
    delay: 0.5,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const categoryRef3 = useSmoothReveal<HTMLDivElement>({
    delay: 0.6,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const categoryRef4 = useSmoothReveal<HTMLDivElement>({
    delay: 0.7,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const categoryRef5 = useSmoothReveal<HTMLDivElement>({
    delay: 0.8,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const categoryRef6 = useSmoothReveal<HTMLDivElement>({
    delay: 0.9,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });

  const categoryRefs = [
    categoryRef1,
    categoryRef2,
    categoryRef3,
    categoryRef4,
    categoryRef5,
    categoryRef6,
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            INDUSTRY SOLUTIONS
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            Tailored Software for Every Sector
          </h3>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {detailedServices.map((category, index) => (
            <div key={index} ref={categoryRefs[index]} className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <h4 className="text-3xl font-light tracking-wide text-foreground">
                      {category.category}
                    </h4>
                  </div>

                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center space-x-3 p-3 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                        <span className="text-sm text-foreground/80 font-light">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative h-80 bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent rounded-lg overflow-hidden group-hover:scale-[1.02] transition-all duration-700 ease-out">
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-transparent group-hover:from-foreground/30 transition-all duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                        {category.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
