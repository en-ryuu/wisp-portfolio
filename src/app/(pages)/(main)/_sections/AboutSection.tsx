"use client";
import {
  useImageSlideIn,
  useIntersectionReveal,
} from "@/hooks/useIntersectionReveal";

export default function AboutSection() {
  const sectionTitleRef = useIntersectionReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });
  const sectionSubtitleRef = useIntersectionReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });
  const sectionImageRef = useImageSlideIn<HTMLDivElement>({
    delay: 0.8,
    duration: 1.2,
    reverse: true,
  });

  // Content sequence refs for "Crafting Digital Solutions"
  const craftingTitleRef = useIntersectionReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });
  const craftingDescriptionRef = useIntersectionReveal<HTMLParagraphElement>({
    delay: 0.4,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });
  const craftingListRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });
  const craftingButtonRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.8,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            ILLUMINATING
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            Digital Excellence
          </h3>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Container */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <div
                ref={sectionImageRef}
                className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-foreground/5 to-background"
              >
                {/* Placeholder for image - you can replace this with an actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-foreground/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-foreground/40 rounded-full"></div>
                    </div>
                    <p className="text-foreground/60 text-lg">
                      Image Placeholder
                    </p>
                  </div>
                </div>

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <h3
                ref={craftingTitleRef}
                className="text-3xl md:text-4xl font-light tracking-wide text-foreground"
              >
                Crafting Digital Solutions
              </h3>

              <p
                ref={craftingDescriptionRef}
                className="text-lg text-foreground/70 leading-relaxed"
              >
                We specialize in creating cutting-edge software solutions that
                illuminate the path to digital transformation. Our expertise
                spans across modern web technologies, cloud infrastructure, and
                innovative development practices.
              </p>

              <div ref={craftingListRef} className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                  <span className="text-foreground/80">
                    Modern Web Development
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                  <span className="text-foreground/80">Cloud Architecture</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-foreground/40 rounded-full"></div>
                  <span className="text-foreground/80">
                    Performance Optimization
                  </span>
                </div>
              </div>

              <div ref={craftingButtonRef} className="pt-8">
                <button className="group relative px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
                  <span className="relative z-10">LEARN MORE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
