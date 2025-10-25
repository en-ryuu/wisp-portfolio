"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { FormEvent } from "react";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin tracking-tight text-foreground mb-6 sm:mb-8"
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
                    wisptech.np@gmail.com
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
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/9779818420487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-light text-lg flex items-center gap-2"
                  >
                    +977 981-8420487
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
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
                      href="https://x.com/wisptech_np"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                      <span className="text-sm tracking-wider uppercase">
                        Twitter
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/wisp-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                      <span className="text-sm tracking-wider uppercase">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/wisp.technology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                    >
                      <span className="text-sm tracking-wider uppercase">
                        Instagram
                      </span>
                    </a>
                    <a
                      href="https://github.com/wisptech-np"
                      target="_blank"
                      rel="noopener noreferrer"
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
            <form className="space-y-8" onSubmit={handleSubmit} id="contact-form">
              {/* Inquiry Type */}
              <div>
                <label className="text-foreground/60 text-sm tracking-wider uppercase mb-3 block">
                  I am a *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="individual"
                      className="mr-2 accent-foreground"
                      defaultChecked
                    />
                    <span className="text-foreground/80">Individual</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="inquiryType"
                      value="company"
                      className="mr-2 accent-foreground"
                    />
                    <span className="text-foreground/80">Company</span>
                  </label>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                    placeholder="First Name *"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                    placeholder="Last Name *"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                    placeholder="Email Address *"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                    placeholder="Phone Number *"
                  />
                </div>
              </div>

              {/* Company/Organization */}
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                  placeholder="Company/Organization (Optional)"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                  placeholder="Subject *"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="text-foreground/60 text-sm tracking-wider uppercase mb-3 block">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full px-0 py-4 bg-transparent text-foreground focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60"
                >
                  <option value="" className="bg-background">Select a service</option>
                  <option value="web-development" className="bg-background">Web Development</option>
                  <option value="mobile-app" className="bg-background">Mobile App Development</option>
                  <option value="ai-ml" className="bg-background">AI/ML Solutions</option>
                  <option value="cloud-services" className="bg-background">Cloud Services</option>
                  <option value="consulting" className="bg-background">Consulting</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-0 py-4 bg-transparent text-foreground placeholder-foreground/40 focus:outline-none transition-colors duration-300 border-b border-foreground/20 focus:border-foreground/60 resize-none"
                  placeholder="Tell us about your project... *"
                ></textarea>
              </div>

              {/* Required Fields Note */}
              <p className="text-foreground/50 text-xs">* Required fields</p>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105 w-full md:w-auto"
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                  <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
