import { Target, TrendingUp, Zap } from "lucide-react";
import FadeContent from "./FadeContent";

const caseStudies = [
  {
    company: "TechStart Solutions",
    industry: "SaaS Startup",
    icon: <Zap className="w-8 h-8" />,
    challenge:
      "Needed to scale rapidly while maintaining performance and user experience during 10x user growth.",
    solution:
      "Implemented AI-optimized web architecture with predictive caching and intelligent load balancing.",
    results: [
      { metric: "2x", label: "User Growth" },
      { metric: "45%", label: "Faster Load Times" },
      { metric: "99.9%", label: "Uptime Achieved" },
    ],
    testimonial:
      "Wisp Technologies transformed our infrastructure. We scaled from 1,000 to 10,000 users without a single performance hiccup.",
  },
  {
    company: "GlobalManu Corp",
    industry: "Manufacturing Enterprise",
    icon: <Target className="w-8 h-8" />,
    challenge:
      "Manual processes causing inefficiencies and errors in supply chain management across 50+ facilities.",
    solution:
      "Deployed intelligent automation system with ML-powered demand forecasting and real-time inventory optimization.",
    results: [
      { metric: "50%", label: "Efficiency Gain" },
      { metric: "30%", label: "Cost Reduction" },
      { metric: "95%", label: "Accuracy Rate" },
    ],
    testimonial:
      "The automation system paid for itself in 6 months. Our operations are now streamlined and error-free.",
  },
  {
    company: "HealthMetrics Pro",
    industry: "Healthcare Tech",
    icon: <TrendingUp className="w-8 h-8" />,
    challenge:
      "Complex patient data analytics requiring HIPAA compliance and real-time processing capabilities.",
    solution:
      "Built secure, compliant AI platform with advanced analytics and predictive health insights.",
    results: [
      { metric: "80%", label: "Faster Diagnostics" },
      { metric: "100%", label: "HIPAA Compliant" },
      { metric: "3x", label: "Data Processing Speed" },
    ],
    testimonial:
      "Security and performance delivered together. Wisp understood our healthcare compliance needs from day one.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-16">
        <FadeContent delay={100} duration={1000}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
                Success Stories
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we&apos;ve helped businesses achieve measurable results
            </p>
          </div>
        </FadeContent>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <FadeContent key={index} delay={200 + index * 100} duration={1000}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-500">
                      {study.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {study.company}
                      </h3>
                      <p className="text-cyan-500 text-sm">{study.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-500 uppercase tracking-wide mb-2">
                        Challenge
                      </h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-500 uppercase tracking-wide mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-cyan-500/5 border-l-4 border-cyan-500 rounded">
                    <p className="text-white italic">
                      &ldquo;{study.testimonial}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Results Graphics */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="grid grid-cols-3 gap-6">
                    {study.results.map((result, i) => (
                      <div
                        key={i}
                        className="p-6 bg-black border-2 border-cyan-500/30 rounded-lg text-center hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                      >
                        <div className="text-4xl font-bold text-cyan-500 mb-2">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-400">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visual Data Representation */}
                  <div className="mt-8 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full animate-pulse"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="text-center text-cyan-500 text-sm mt-2">
                    Success Rate: 85% Average Improvement
                  </p>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  );
}
