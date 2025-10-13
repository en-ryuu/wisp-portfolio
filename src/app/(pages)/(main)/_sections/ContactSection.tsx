"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";

export default function ContactSection() {
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
  const contactInfoRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });
  const contactFormRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.8,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            CONTACT
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            Let&apos;s Illuminate Together
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-light tracking-wide text-foreground mb-6">
                  Get In Touch
                </h4>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Ready to illuminate your next digital project? We&apos;re here
                  to guide you through the darkness of complex development
                  challenges.
                </p>
              </div>

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

              <div className="pt-8">
                <div className="space-y-6">
                  <h5 className="text-lg font-light tracking-wide text-foreground">
                    Follow Our Journey
                  </h5>
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

          {/* Contact Form */}
          <div ref={contactFormRef} className="space-y-8">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                  placeholder="Company"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105"
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
