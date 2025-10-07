"use client";
import {
  useImageSlideIn,
  useIntersectionReveal,
} from "@/hooks/useIntersectionReveal";
import { useStickyParallaxProjects } from "@/hooks/useStickyParallaxProjects";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link as TransitionLink } from "next-transition-router";
import { useRef } from "react";

// Sample projects data
const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution built with Next.js and microservices architecture. Features include real-time inventory management, AI-powered recommendations, and seamless payment processing.",
    image: "/api/placeholder/800/600",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Stripe"],
  },
  {
    id: "2",
    title: "AI Analytics Dashboard",
    description:
      "An intelligent analytics platform that processes millions of data points to provide actionable insights. Built with machine learning algorithms and real-time data visualization.",
    image: "/api/placeholder/800/600",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "WebSocket"],
  },
  {
    id: "3",
    title: "Cloud Infrastructure",
    description:
      "A robust cloud infrastructure solution designed for high availability and scalability. Implements containerization, auto-scaling, and comprehensive monitoring systems.",
    image: "/api/placeholder/800/600",
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "Prometheus"],
  },
  {
    id: "4",
    title: "Mobile Banking App",
    description:
      "A secure and intuitive mobile banking application with biometric authentication, real-time transactions, and advanced fraud detection capabilities.",
    image: "/api/placeholder/800/600",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometric"],
  },
];

export default function Home() {
  const titleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 1.2,
    from: "bottom",
  });
  const subtitleRef = useTextReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 1,
    from: "bottom",
  });
  const descriptionRef = useTextReveal<HTMLParagraphElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
  });
  const ctaRef = useTextReveal<HTMLDivElement>({
    delay: 0.8,
    duration: 0.8,
    from: "bottom",
  });
  const particlesRef = useRef<HTMLDivElement>(null);

  // New section animation refs
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
  const sectionContentRef = useIntersectionReveal<HTMLDivElement>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
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

  // Projects section refs
  const projectsContainerRef = useRef<HTMLElement | null>(null);
  const { projectRefs, imageRefs, contentRefs } = useStickyParallaxProjects({
    projects,
    containerRef: projectsContainerRef as React.RefObject<HTMLElement>,
  });

  useGSAP(() => {
    // Animate floating particles
    if (particlesRef.current) {
      gsap.to(particlesRef.current.children, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5,
      });
    }
  });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10">
        {/* Floating light particles */}
        <div ref={particlesRef} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-foreground/30 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-foreground/15 rounded-full"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-foreground/25 rounded-full"></div>
          <div className="absolute top-1/2 left-1/5 w-0.5 h-0.5 bg-foreground/40 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-foreground/10 rounded-full"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Radial gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 70%, rgba(0,0,0,0.05) 100%)",
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="text-center max-w-5xl">
          <h1
            ref={titleRef}
            className="text-8xl md:text-9xl lg:text-[12rem] font-thin tracking-tight text-foreground mb-8"
          >
            WISP
          </h1>
          <h2
            ref={subtitleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-foreground/80 mb-12"
          >
            Technologies
          </h2>
          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/60 max-w-4xl mx-auto leading-relaxed mb-16"
          >
            The light that guides you through the darkness of complex software
            development. We illuminate the path to digital excellence.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <TransitionLink href="/about">
              <button className="group relative px-8 py-4 bg-foreground text-background font-medium tracking-wide transition-all duration-300 hover:bg-foreground/90 hover:scale-105">
                <span className="relative z-10">EXPLORE OUR LIGHT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground to-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </TransitionLink>
            <button className="px-8 py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>

      {/* New Section with Image Reveal */}
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
                  spans across modern web technologies, cloud infrastructure,
                  and innovative development practices.
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
                    <span className="text-foreground/80">
                      Cloud Architecture
                    </span>
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

      {/* Projects Section with Sticky Parallax */}
      <section ref={projectsContainerRef} className="relative">
        {/* Section Title */}
        <div className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8">
              PROJECTS
            </h2>
            <h3 className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70">
              Digital Innovations
            </h3>
          </div>
        </div>

        {/* Projects with Sticky Parallax */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className={`relative min-h-screen flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Sticky Image Container */}
            <div className="w-full lg:w-1/2 sticky top-0 h-screen overflow-hidden">
              <div
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-foreground/5 to-background"
              >
                {/* Project Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-foreground/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 lg:mb-6 bg-foreground/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-foreground/40 rounded-full"></div>
                    </div>
                    <p className="text-foreground/60 text-lg lg:text-xl font-light">
                      {project.title}
                    </p>
                  </div>
                </div>

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 xl:p-24">
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="max-w-lg space-y-6 lg:space-y-8"
              >
                <div className="space-y-3 lg:space-y-4">
                  <span className="text-sm text-foreground/60 tracking-wider uppercase">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-wide text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-foreground/10 text-foreground/70 text-xs lg:text-sm rounded-full border border-foreground/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 lg:pt-8">
                  <button className="group relative px-6 py-3 lg:px-8 lg:py-4 border border-foreground/20 text-foreground font-medium tracking-wide transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5">
                    <span className="relative z-10 text-sm lg:text-base">
                      VIEW PROJECT
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8">
              CONTACT
            </h2>
            <h3 className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70">
              Let's Illuminate Together
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-light tracking-wide text-foreground mb-6">
                    Get In Touch
                  </h4>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Ready to illuminate your next digital project? We're here to
                    guide you through the darkness of complex development
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
                      +1 (555) 123-4567
                    </p>
                  </div>

                  <div>
                    <p className="text-foreground/60 text-sm tracking-wider uppercase mb-2">
                      Location
                    </p>
                    <p className="text-foreground font-light text-lg">
                      San Francisco, CA
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
            <div className="space-y-8">
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
    </div>
  );
}
