import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import React, { useState } from "react";
import ClickSpark from "./ClickSpark";
import FadeContent from "./FadeContent";
import Magnet from "./Magnet";
import Particles from "./Particles";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-black border-t border-cyan-500/20"
    >
      {/* Particles Background - Black with Cyan */}
      <div className="absolute inset-0 opacity-15">
        <Particles
          particleCount={80}
          particleColors={["#00FFFF", "#FFFFFF"]}
          alphaParticles={true}
          speed={0.04}
          particleBaseSize={60}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <FadeContent delay={100} duration={1000}>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Project Today
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to ignite your business transformation? Let&apos;s build
              something extraordinary together.
            </p>
          </div>
        </FadeContent>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <FadeContent delay={200} duration={1000}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-cyan-500 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 bg-white/5 border-2 border-cyan-500/30 rounded text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all duration-300"
                    style={{
                      boxShadow:
                        focusedField === "name"
                          ? "0 0 20px rgba(0, 255, 255, 0.3)"
                          : "none",
                    }}
                  />
                  {focusedField === "name" && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-cyan-500 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 bg-white/5 border-2 border-cyan-500/30 rounded text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all duration-300"
                    style={{
                      boxShadow:
                        focusedField === "email"
                          ? "0 0 20px rgba(0, 255, 255, 0.3)"
                          : "none",
                    }}
                  />
                  {focusedField === "email" && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-cyan-500 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-cyan-500/30 rounded text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none"
                    style={{
                      boxShadow:
                        focusedField === "message"
                          ? "0 0 20px rgba(0, 255, 255, 0.3)"
                          : "none",
                    }}
                  />
                  {focusedField === "message" && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                  )}
                </div>

                <ClickSpark
                  sparkColor="#00FFFF"
                  sparkCount={15}
                  sparkRadius={30}
                >
                  <Magnet magnetStrength={3} padding={60}>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded border-2 border-cyan-500 hover:bg-transparent hover:text-cyan-500 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Magnet>
                </ClickSpark>
              </form>
            </div>
          </FadeContent>

          {/* Right: Company Info */}
          <FadeContent delay={400} duration={1000}>
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Wisp Technologies
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Igniting digital transformation with AI-powered innovation,
                  cutting-edge development, and world-class engineering
                  expertise.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-cyan-500">
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@wisp.tech"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-500 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/5 border border-cyan-500/30 rounded flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>contact@wisp.tech</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-500">
                  Connect With Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-cyan-500/30 rounded flex items-center justify-center text-gray-300 hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-cyan-500/30 rounded flex items-center justify-center text-gray-300 hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-white/5 border border-cyan-500/20 rounded">
                <h4 className="text-lg font-semibold text-cyan-500 mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-cyan-500/20 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Wisp Technologies. All rights reserved. Built with precision
            and passion.
          </p>
        </div>
      </div>
    </section>
  );
}
