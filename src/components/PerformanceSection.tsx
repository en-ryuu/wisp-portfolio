import { Gauge, Rocket, Shield, Zap } from "lucide-react";
import FadeContent from "./FadeContent";

const performanceStats = [
  {
    icon: <Zap className="w-12 h-12" />,
    stat: "15%",
    label: "Faster AI Insights",
    description:
      "Cutting-edge algorithms deliver actionable intelligence 15% faster than industry standards",
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    stat: "99.9%",
    label: "Uptime Guarantee",
    description:
      "Enterprise-grade infrastructure with agile delivery and continuous deployment",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    stat: "100%",
    label: "Security Compliant",
    description:
      "SOC 2, GDPR, and HIPAA compliance built into every solution we deliver",
  },
  {
    icon: <Gauge className="w-12 h-12" />,
    stat: "3x",
    label: "Performance Boost",
    description:
      "Optimized architecture delivering 3x faster load times and response rates",
  },
];

export default function PerformanceSection() {
  return (
    <section
      id="performance"
      className="relative py-24 lg:py-32 bg-black border-y border-cyan-500/20"
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px energy-line opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px energy-line opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <FadeContent delay={100} duration={1000}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
                Performance Metrics
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Built for Speed, Security & Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry-leading performance metrics that set new standards
            </p>
          </div>
        </FadeContent>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {performanceStats.map((item, index) => (
            <FadeContent key={index} delay={200 + index * 100} duration={1000}>
              <div className="relative group">
                {/* Card */}
                <div className="p-8 bg-white/5 border-2 border-cyan-500/20 rounded-lg hover:border-cyan-500 transition-all duration-300 h-full flex flex-col items-center text-center space-y-4 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                  {/* Icon */}
                  <div className="text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Stat */}
                  <div className="text-5xl font-bold text-cyan-500 group-hover:text-glow-cyan">
                    {item.stat}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-white">
                    {item.label}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4">
                    <div
                      className="h-full bg-cyan-500 rounded-full animate-pulse"
                      style={{
                        width: "100%",
                        animationDelay: `${index * 0.2}s`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-cyan-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeContent delay={800} duration={1000}>
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Ready to experience the difference?
            </p>
            <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold rounded hover:bg-cyan-500 hover:text-black transition-all duration-300">
              View Technical Specifications
            </button>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
