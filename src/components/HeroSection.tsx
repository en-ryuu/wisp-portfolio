import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Aurora from "./Aurora";
import ClickSpark from "./ClickSpark";
import Magnet from "./Magnet";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Aurora Background - More Prominent */}
      <div className="absolute inset-0 opacity-40">
        <Aurora
          colorStops={["#000000", "#00FFFF", "#000000"]}
          amplitude={1.3}
          blend={0.9}
          speed={0.5}
        />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32">
        {/* Top Logo Row */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/30 transition-all duration-300"></div>
              <div className="relative w-56 h-20 bg-gradient-to-br from-black via-cyan-900/20 to-black border-2 border-cyan-500 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_ease-in-out_infinite]"></div>
                <span className="relative text-cyan-500 text-3xl font-bold tracking-[0.3em] text-glow-cyan">
                  WISP
                </span>
              </div>
            </div>
          </div>

          {/* Top Right Badge */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wide">
              AI-Powered Solutions
            </span>
          </div>
        </div>

        {/* Main Content - Asymmetrical Split */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Main Headline (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-cyan-500 text-sm font-semibold uppercase tracking-widest">
                Next-Gen Development
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-bold leading-none">
              <span className="block text-white mb-4">Ignite Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 text-glow-cyan animate-pulse">
                Digital Future
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-2xl">
              Transform your vision into reality with{" "}
              <span className="text-white font-semibold">cutting-edge AI</span>{" "}
              and{" "}
              <span className="text-white font-semibold">
                high-performance web solutions
              </span>{" "}
              that scale from startup to enterprise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <ClickSpark
                sparkColor="#00FFFF"
                sparkCount={24}
                sparkRadius={40}
                duration={800}
              >
                <Magnet magnetStrength={2.5} padding={100}>
                  <button className="group relative px-10 py-6 bg-cyan-500 text-black font-bold text-xl rounded overflow-hidden transition-all duration-300 hover:scale-105">
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                    <span className="relative flex items-center gap-3">
                      Start Building
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </Magnet>
              </ClickSpark>

              <Magnet magnetStrength={2} padding={80}>
                <button className="group px-10 py-6 bg-transparent border-2 border-white/20 text-white font-bold text-xl rounded hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 flex items-center gap-3">
                  View Our Work
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </button>
              </Magnet>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-cyan-500/20">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-500 mb-2 group-hover:text-glow-cyan transition-all">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 1 - Web Development */}
            <div className="group relative p-6 bg-gradient-to-br from-white/5 to-transparent border border-cyan-500/20 rounded-lg hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] cursor-pointer">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>

              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <Zap className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Web Development
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Lightning-fast, scalable websites built with Next.js, React,
                    and modern frameworks
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - AI Solutions */}
            <div className="group relative p-6 bg-gradient-to-br from-white/5 to-transparent border border-cyan-500/20 rounded-lg hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] cursor-pointer ml-8">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>

              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <Sparkles className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    AI Integration
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Intelligent automation, ML models, and predictive analytics
                    for data-driven decisions
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Consulting */}
            <div className="group relative p-6 bg-gradient-to-br from-white/5 to-transparent border border-cyan-500/20 rounded-lg hover:border-cyan-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] cursor-pointer">
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>

              <div className="relative flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <ArrowRight className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Strategic Consulting
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Expert guidance for digital transformation and technology
                    leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trusted By Section */}
        <div className="mt-24 pt-12 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-gray-500 text-sm uppercase tracking-wider">
              Trusted by innovative companies worldwide
            </span>
            <div className="flex items-center gap-8 opacity-40 hover:opacity-60 transition-opacity">
              {["TechCo", "DataFlow", "CloudScale", "InnovateLab"].map(
                (company, i) => (
                  <div
                    key={i}
                    className="text-white/50 font-bold text-lg tracking-wider hover:text-cyan-500 transition-colors cursor-pointer"
                  >
                    {company}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="text-cyan-500 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Add shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }
      `}</style>
    </section>
  );
}
