import ScrollReveal from "@/components/reactbits/ScrollReveal";

const About = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <ScrollReveal
            containerClassName="text-center"
            textClassName="text-white"
          >
            About Wisp
          </ScrollReveal>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center">
            We&apos;re a team of passionate developers building cutting-edge
            software solutions that push the boundaries of what&apos;s possible.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed text-center">
            At Wisp Technologies, we specialize in creating innovative
            applications with modern frameworks, combining technical expertise
            with creative vision to deliver exceptional user experiences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: "50+", label: "Projects" },
              { number: "5+", label: "Years" },
              { number: "100%", label: "Satisfaction" },
              { number: "25+", label: "Clients" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
