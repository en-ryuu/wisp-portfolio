"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";

const serviceCategories = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript"],
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    title: "Backend Systems",
    description:
      "Robust server-side applications, APIs, and microservices architecture.",
    technologies: ["Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies.",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by artificial intelligence and data science.",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Python"],
  },
  {
    title: "Enterprise Software",
    description:
      "Custom business applications, ERP systems, and enterprise integrations.",
    technologies: ["Java", "C#", ".NET", "Oracle", "SAP", "Salesforce"],
  },
];

export default function ServicesOverviewSection() {
  const sectionTitleRef = useIntersectionReveal<HTMLHeadingElement>({
    delay: 0.2,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });

  const sectionSubtitleRef = useIntersectionReveal<HTMLHeadingElement>({
    delay: 0.4,
    duration: 0.8,
    from: "bottom",
    reverse: true,
  });

  // Create individual refs for each category
  const categoryRef1 = useIntersectionReveal<HTMLDivElement>({ delay: 0.6, duration: 0.8, from: "bottom", reverse: true, stagger: 0.1 });
  const categoryRef2 = useIntersectionReveal<HTMLDivElement>({ delay: 0.7, duration: 0.8, from: "bottom", reverse: true, stagger: 0.1 });
  const categoryRef3 = useIntersectionReveal<HTMLDivElement>({ delay: 0.8, duration: 0.8, from: "bottom", reverse: true, stagger: 0.1 });
  const categoryRef4 = useIntersectionReveal<HTMLDivElement>({ delay: 0.9, duration: 0.8, from: "bottom", reverse: true, stagger: 0.1 });
  const categoryRef5 = useIntersectionReveal<HTMLDivElement>({ delay: 1.0, duration: 0.8, from: "bottom", reverse: true, stagger: 0.1 });
  const categoryRef6 = useIntersectionReveal<HTMLDivElement>({ delay: 1.1, duration: 0.8, from: "bottom", reverse: true, stagger: 0.1 });
  
  const categoryRefs = [categoryRef1, categoryRef2, categoryRef3, categoryRef4, categoryRef5, categoryRef6];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            OUR EXPERTISE
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            Comprehensive Technology Solutions
          </h3>
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              ref={categoryRefs[index]}
              className="group p-8 bg-gradient-to-br from-background via-background to-muted/20 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h4 className="text-2xl font-light tracking-wide text-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                {category.title}
              </h4>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {category.description}
              </p>

              <div className="space-y-3">
                <p className="text-sm text-foreground/60 tracking-wider uppercase">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-foreground/10 text-foreground/80 text-sm rounded-full hover:bg-foreground/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
