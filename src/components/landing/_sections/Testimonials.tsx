import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechCorp Inc.",
      role: "CEO",
      content:
        "Wisp Technologies transformed our digital presence. Their innovative approach exceeded our expectations.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "David Kim",
      company: "StartupXYZ",
      role: "Founder",
      content:
        "The team's expertise helped us scale rapidly. Highly recommend their services for any tech project.",
      rating: 5,
      image: "👨‍💻",
    },
    {
      name: "Lisa Thompson",
      company: "Enterprise Solutions",
      role: "CTO",
      content:
        "Outstanding work quality and professional communication throughout. Truly exceptional team.",
      rating: 5,
      image: "👩‍🔬",
    },
    {
      name: "Robert Chen",
      company: "Innovation Labs",
      role: "Product Manager",
      content:
        "Wisp delivered beyond our requirements. Their creative solutions made all the difference.",
      rating: 5,
      image: "👨‍🎨",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <ScrollReveal
            containerClassName="text-center"
            textClassName="text-white"
          >
            What Our Clients Say
          </ScrollReveal>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-6" />

            <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
              &quot;{testimonials[currentTestimonial].content}&quot;
            </blockquote>

            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                )
              )}
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full flex items-center justify-center text-xl">
                {testimonials[currentTestimonial].image}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-cyan-400 text-sm">
                  {testimonials[currentTestimonial].role} at{" "}
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="p-3 bg-white/10 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? "bg-cyan-400"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="p-3 bg-white/10 rounded-full text-cyan-400 hover:bg-cyan-400/20 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
