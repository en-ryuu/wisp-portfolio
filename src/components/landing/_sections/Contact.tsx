import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Threads Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(45deg, transparent 49%, rgba(0, 224, 255, 0.3) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0, 224, 255, 0.3) 50%, transparent 51%)
          `,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="mb-12">
          <ScrollReveal
            containerClassName="text-center"
            textClassName="text-white"
          >
            Get In Touch
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 mb-8">
                We&apos;re always excited to hear about new projects and
                opportunities. Reach out to us and let&apos;s discuss how we can
                help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">hello@wisp.ai</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "< 24h", label: "Response Time" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 text-center border-none"
                >
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl p-8 border-none">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/40 border-none rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/40 border-none rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/40 border-none rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black/40 border-none rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
