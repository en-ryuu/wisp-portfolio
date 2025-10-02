import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack solution with AI recommendations",
      image: "🛒",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Healthcare Dashboard",
      description: "Real-time monitoring with analytics",
      image: "🏥",
      tech: ["Vue.js", "Python", "TensorFlow"],
      link: "#",
    },
    {
      title: "FinTech Mobile App",
      description: "Secure banking with biometric auth",
      image: "💳",
      tech: ["React Native", "Blockchain", "AWS"],
      link: "#",
    },
    {
      title: "AI Content Platform",
      description: "Automated content generation",
      image: "🤖",
      tech: ["Next.js", "OpenAI", "Docker"],
      link: "#",
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
            Our Portfolio
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{project.image}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
