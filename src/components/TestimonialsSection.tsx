import BlurText from "./BlurText";
import FadeContent from "./FadeContent";

const testimonials = [
  {
    quote:
      "Wisp Technologies transformed our customer service with an AI chatbot that understands context like a human. Our response time dropped by 80% and customer satisfaction soared.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
  },
  {
    quote:
      "The predictive analytics model they built increased our sales forecasting accuracy from 65% to 94%. Absolutely game-changing for our quarterly planning.",
    author: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "DataDrive Solutions",
  },
  {
    quote:
      "Their web application is not only beautiful but incredibly fast. Our user engagement went up 150% in the first month. Best investment we made this year.",
    author: "Emily Nakamura",
    role: "Founder & CEO",
    company: "CloudScale",
  },
  {
    quote:
      "Professional, innovative, and reliable. Wisp Technologies delivered our MVP in record time without compromising on quality or security. True partners in growth.",
    author: "David Kim",
    role: "Head of Product",
    company: "StartupHub",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-16">
        <FadeContent delay={100} duration={1000}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
                Client Testimonials
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from businesses we&apos;ve helped transform
            </p>
          </div>
        </FadeContent>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeContent key={index} delay={200 + index * 100} duration={1000}>
              <div className="relative group">
                {/* Card */}
                <div className="p-8 bg-white/5 border border-cyan-500/30 rounded-lg hover:border-cyan-500 transition-all duration-300 space-y-6 h-full flex flex-col border-glow-cyan hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]">
                  {/* Quote Icon */}
                  <div className="text-cyan-500 text-6xl leading-none opacity-50">
                    &ldquo;
                  </div>

                  {/* Testimonial Text with Typewriter Effect */}
                  <div className="flex-grow">
                    <BlurText
                      text={testimonial.quote}
                      className="text-lg text-gray-200 leading-relaxed"
                      animateBy="words"
                      delay={20}
                      threshold={0.3}
                    />
                  </div>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-cyan-500/20">
                    <div className="flex items-center gap-4">
                      {/* Avatar Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
                        <span className="text-cyan-500 font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>

                      <div>
                        <p className="font-semibold text-cyan-500 text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-500/30 hover:bg-cyan-500 transition-colors cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
