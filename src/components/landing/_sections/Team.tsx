import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "👨‍💼",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "alex@wisp.ai",
      },
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "👩‍💻",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "sarah@wisp.ai",
      },
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      image: "👨‍🔬",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "mike@wisp.ai",
      },
    },
    {
      name: "Emma Wilson",
      role: "Design Director",
      image: "👩‍🎨",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        email: "emma@wisp.ai",
      },
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
            Meet Our Team
          </ScrollReveal>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              {/* Profile Image */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full mx-auto flex items-center justify-center text-2xl mb-3">
                {member.image}
              </div>

              {/* Member Info */}
              <h3 className="text-lg font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-cyan-400 mb-4 text-sm">{member.role}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-2">
                <a
                  href={member.social.github}
                  className="p-1.5 bg-white/10 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={14} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="p-1.5 bg-white/10 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-1.5 bg-white/10 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="p-1.5 bg-white/10 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
