"use client";
import { processSteps } from "@/config/services";
import { useSmoothReveal } from "@/hooks/useSmoothReveal";

export default function ProcessSection() {
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

  // Create individual refs for each step with smooth animations
  const stepRef1 = useSmoothReveal<HTMLDivElement>({
    delay: 0.4,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const stepRef2 = useSmoothReveal<HTMLDivElement>({
    delay: 0.5,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const stepRef3 = useSmoothReveal<HTMLDivElement>({
    delay: 0.6,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const stepRef4 = useSmoothReveal<HTMLDivElement>({
    delay: 0.7,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const stepRef5 = useSmoothReveal<HTMLDivElement>({
    delay: 0.8,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });
  const stepRef6 = useSmoothReveal<HTMLDivElement>({
    delay: 0.9,
    duration: 1.2,
    from: "bottom",
    reverse: true,
    scale: 0.98,
  });

  const stepRefs = [stepRef1, stepRef2, stepRef3, stepRef4, stepRef5, stepRef6];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            OUR PROCESS
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            From Vision to Reality
          </h3>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div key={index} ref={stepRefs[index]} className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center mb-6">
                    <span className="text-6xl font-thin text-foreground/20 mr-6">
                      {step.step}
                    </span>
                    <h4 className="text-3xl font-light tracking-wide text-foreground">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.activities.map((activity, activityIndex) => (
                      <div
                        key={activityIndex}
                        className="flex items-center space-x-3 p-3 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                        <span className="text-foreground/80 font-light">
                          {activity}
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
                      <div className="text-8xl font-thin text-foreground/20 group-hover:text-foreground/30 transition-all duration-700">
                        {step.step}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Summary */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent rounded-lg">
            <h4 className="text-2xl font-light tracking-wide text-foreground mb-4">
              Collaborative Approach
            </h4>
            <p className="text-foreground/70 mb-6 max-w-3xl mx-auto">
              We believe in transparent communication and collaborative
              development. Throughout the entire process, you&apos;ll have
              direct access to our team, regular progress updates, and the
              ability to provide feedback at every stage.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
              <span className="px-4 py-2 bg-foreground/10 rounded-full">
                Agile Methodology
              </span>
              <span className="px-4 py-2 bg-foreground/10 rounded-full">
                Regular Updates
              </span>
              <span className="px-4 py-2 bg-foreground/10 rounded-full">
                Quality Assurance
              </span>
              <span className="px-4 py-2 bg-foreground/10 rounded-full">
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
