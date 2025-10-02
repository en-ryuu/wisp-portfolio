import { Brain, Globe, Layers, TrendingUp } from "lucide-react";
import FadeContent from "./FadeContent";
import GlareHover from "./GlareHover";
import Magnet from "./Magnet";

const serviceGroups = [
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Web Development for Online Presence",
    description:
      "High-performance, scalable websites built with modern frameworks. Responsive design, SEO optimization, and lightning-fast load times ensure your brand stands out online.",
    features: ["Next.js & React", "Responsive Design", "Performance Optimized"],
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "AI Solutions for Intelligent Automation",
    description:
      "Leverage machine learning and NLP to automate complex workflows. Our AI systems learn, adapt, and optimize operations for maximum efficiency and accuracy.",
    features: ["Machine Learning", "NLP Integration", "Predictive Analytics"],
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: "Bespoke Software for Custom Needs",
    description:
      "Tailored applications designed specifically for your business processes. From CRM systems to inventory management, we build what you need, not what exists.",
    features: [
      "Custom Development",
      "API Integration",
      "Cloud-Native Architecture",
    ],
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Consulting for Scalable Growth",
    description:
      "Strategic AI consulting and technical leadership to guide your digital transformation. We help you navigate complexity and make informed technology decisions.",
    features: ["AI Strategy", "Tech Leadership", "Agile Practices"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <FadeContent delay={100} duration={1000}>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
                Our Services
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Solutions by Context
            </h2>
            <p className="text-xl text-gray-300">
              Segmented expertise to address every aspect of your digital
              journey
            </p>
          </div>
        </FadeContent>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {serviceGroups.map((service, index) => (
            <FadeContent key={index} delay={200 + index * 150} duration={1000}>
              <div
                className={
                  index % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
                }
              >
                <Magnet magnetStrength={4} padding={60}>
                  <GlareHover
                    height="100%"
                    background="rgba(0, 255, 255, 0.02)"
                    borderColor="#00FFFF"
                    glareColor="#00FFFF"
                    glareOpacity={0.4}
                    className="h-full"
                  >
                    <div className="p-8 space-y-6 h-full flex flex-col">
                      <div className="text-cyan-500">{service.icon}</div>

                      <h3 className="text-2xl font-bold text-cyan-500">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-cyan-500/20">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-500"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <button className="text-cyan-500 hover:text-white transition-colors inline-flex items-center gap-2 group mt-4">
                        Learn More
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                    </div>
                  </GlareHover>
                </Magnet>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
