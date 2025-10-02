import ScrollReveal from "@/components/reactbits/ScrollReveal";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications with modern frameworks",
      icon: "🌐",
      features: ["React/Next.js", "TypeScript", "Performance"],
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform applications",
      icon: "📱",
      features: ["React Native", "Flutter", "iOS & Android"],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable infrastructure and deployment",
      icon: "☁️",
      features: ["AWS/Azure", "Docker", "CI/CD"],
    },
    {
      title: "AI Integration",
      description: "Machine learning powered solutions",
      icon: "🤖",
      features: ["ML Models", "NLP", "Analytics"],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <ScrollReveal
            containerClassName="text-center"
            textClassName="text-white"
          >
            Our Services
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 text-xs leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-cyan-400 text-xs flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
