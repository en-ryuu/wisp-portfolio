"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";

export default function CTASection() {
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

  const ctaRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });

  const contactInfoRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.8,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
          >
            LET&apos;S BUILD
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-foreground/70"
          >
            Your Vision, Our Expertise
          </h3>
        </div>

        {/* CTA Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={ctaRef} className="space-y-8">
            <div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-foreground mb-4 sm:mb-6">
                Ready to Illuminate Your Next Project?
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                Whether you need a simple website, a complex enterprise system,
                or cutting-edge AI solutions, we have the expertise to bring
                your vision to life. Let&apos;s discuss how we can help
                transform your business with technology.
              </p>
            </div>

            <div className="space-y-6">
              <button className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105 w-full lg:w-auto">
                <span className="relative z-10">START YOUR PROJECT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/60 hover:bg-foreground/5 w-full lg:w-auto">
                <span className="relative z-10">SCHEDULE CONSULTATION</span>
              </button>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div ref={contactInfoRef} className="space-y-12">
            <div>
              <h5 className="text-2xl font-light tracking-wide text-foreground mb-8">
                Get In Touch
              </h5>

              <div className="space-y-8">
                <div>
                  <p className="text-foreground/60 text-sm tracking-wider uppercase mb-2">
                    Email
                  </p>
                  <p className="text-foreground font-light text-lg">
                    hello@wisptechnologies.com
                  </p>
                </div>

                <div>
                  <p className="text-foreground/60 text-sm tracking-wider uppercase mb-2">
                    Phone
                  </p>
                  <p className="text-foreground font-light text-lg">
                    +977 9861215345
                  </p>
                </div>

                <div>
                  <p className="text-foreground/60 text-sm tracking-wider uppercase mb-2">
                    Location
                  </p>
                  <p className="text-foreground font-light text-lg">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="space-y-6">
                <h6 className="text-lg font-light tracking-wide text-foreground">
                  Follow Our Journey
                </h6>
                <div className="flex space-x-8">
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    <span className="text-sm tracking-wider uppercase">
                      Twitter
                    </span>
                  </a>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    <span className="text-sm tracking-wider uppercase">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="#"
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    <span className="text-sm tracking-wider uppercase">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent rounded-lg">
            <h4 className="text-2xl font-light tracking-wide text-foreground mb-4">
              Free Project Consultation
            </h4>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Not sure where to start? Schedule a free consultation with our
              team to discuss your project requirements and explore the best
              solutions for your needs.
            </p>
            <button className="px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105">
              BOOK FREE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
