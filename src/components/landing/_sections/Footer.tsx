import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div ref={contentRef} className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 ref={titleRef} className="text-3xl font-bold text-white mb-4">
              Wisp Technologies
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Building the future of software with innovative solutions and
              cutting-edge technology. We&apos;re passionate about creating
              digital experiences that make a difference.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@wisp.ai"
                className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400/30 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "Cloud Solutions",
                "AI Integration",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Careers", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              © 2024 Wisp Technologies. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:bg-cyan-300 transition-all duration-200 shadow-lg hover:shadow-xl z-50"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </section>
  );
};

export default Footer;
