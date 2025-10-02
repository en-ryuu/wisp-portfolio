import FadeContent from "./FadeContent";

const aboutPoints = [
  "AI-powered solutions tailored to your unique business needs",
  "Cutting-edge technology stack for maximum performance and reliability",
  "Agile development methodology with rapid iteration cycles",
  "Security-first approach ensuring data protection and compliance",
  "Scalable architecture designed to grow seamlessly with your business",
  "Dedicated support and continuous optimization for sustained success",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text Content */}
          <FadeContent delay={200} duration={1200}>
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
                <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
                  Platform Overview
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Empowering Startups to Enterprises
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Wisp Technologies partners with{" "}
                <span className="text-cyan-500 font-semibold">
                  ambitious businesses
                </span>{" "}
                to achieve measurable results through secure, compliant, and
                fully integrated solutions. From intelligent automation to
                predictive analytics, we build systems that enhance efficiency,
                elevate experiences, and accelerate growth.
              </p>

              <div className="space-y-4 pt-6">
                {aboutPoints.map((point, index) => (
                  <FadeContent
                    key={index}
                    delay={300 + index * 100}
                    duration={800}
                  >
                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 group-hover:w-2 group-hover:h-2 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                      <p className="text-lg text-gray-200 group-hover:text-white transition-colors">
                        {point}
                      </p>
                    </div>
                  </FadeContent>
                ))}
              </div>
            </div>
          </FadeContent>

          {/* Right: SVG Illustration - AI-Web Integration Network */}
          <FadeContent delay={400} duration={1200}>
            <div className="relative">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Central Core */}
                <circle
                  cx="200"
                  cy="200"
                  r="50"
                  fill="none"
                  stroke="#00FFFF"
                  strokeWidth="2"
                  opacity="0.3"
                  className="animate-pulse"
                />
                <circle cx="200" cy="200" r="30" fill="#00FFFF" opacity="0.8" />
                <text
                  x="200"
                  y="208"
                  textAnchor="middle"
                  fill="#000"
                  fontSize="20"
                  fontWeight="bold"
                >
                  AI
                </text>

                {/* Orbiting Nodes - Web Services */}
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const x = 200 + 130 * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + 130 * Math.sin((angle * Math.PI) / 180);
                  const labels = ["WEB", "API", "ML", "DB", "UI"];
                  return (
                    <g key={i}>
                      <line
                        x1="200"
                        y1="200"
                        x2={x}
                        y2={y}
                        stroke="#00FFFF"
                        strokeWidth="1"
                        opacity="0.4"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="25"
                        fill="none"
                        stroke="#00FFFF"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="18"
                        fill="rgba(0, 255, 255, 0.2)"
                        stroke="#00FFFF"
                        strokeWidth="1"
                      />
                      <text
                        x={x}
                        y={y + 5}
                        textAnchor="middle"
                        fill="#FFF"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        {labels[i]}
                      </text>
                    </g>
                  );
                })}

                {/* Data Flow Particles */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <circle
                    key={`particle-${i}`}
                    cx="200"
                    cy="200"
                    r="3"
                    fill="#00FFFF"
                    opacity="0.6"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: "1.5s",
                    }}
                  />
                ))}
              </svg>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
