"use client";
import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";

const detailedServices = [
  {
    category: "Financial Technology",
    icon: "💰",
    services: [
      "Payment Processing Systems",
      "Digital Banking Platforms",
      "Cryptocurrency Exchanges",
      "Risk Management Tools",
      "Regulatory Compliance Systems",
      "Trading Platforms",
    ],
    description:
      "Secure, scalable fintech solutions that handle complex financial operations with precision and reliability.",
  },
  {
    category: "E-Commerce & Retail",
    icon: "🛒",
    services: [
      "Online Marketplaces",
      "Inventory Management Systems",
      "Point of Sale (POS) Systems",
      "Customer Relationship Management",
      "Supply Chain Optimization",
      "Analytics Dashboards",
    ],
    description:
      "Complete e-commerce ecosystems that drive sales and optimize business operations.",
  },
  {
    category: "Healthcare & Life Sciences",
    icon: "🏥",
    services: [
      "Electronic Health Records (EHR)",
      "Telemedicine Platforms",
      "Medical Device Integration",
      "Patient Management Systems",
      "Clinical Trial Management",
      "Health Analytics Platforms",
    ],
    description:
      "HIPAA-compliant healthcare solutions that improve patient care and streamline medical workflows.",
  },
  {
    category: "Education & E-Learning",
    icon: "🎓",
    services: [
      "Learning Management Systems (LMS)",
      "Virtual Classrooms",
      "Student Information Systems",
      "Assessment Platforms",
      "Content Management Systems",
      "Educational Analytics",
    ],
    description:
      "Interactive learning platforms that enhance educational experiences and track student progress.",
  },
  {
    category: "Manufacturing & IoT",
    icon: "🏭",
    services: [
      "Industrial IoT Solutions",
      "Manufacturing Execution Systems",
      "Quality Control Systems",
      "Predictive Maintenance",
      "Supply Chain Management",
      "Real-time Monitoring Dashboards",
    ],
    description:
      "Smart manufacturing solutions that optimize production processes and reduce operational costs.",
  },
  {
    category: "Real Estate & Property",
    icon: "🏠",
    services: [
      "Property Management Systems",
      "Real Estate Portals",
      "Virtual Property Tours",
      "Tenant Management Platforms",
      "Property Valuation Tools",
      "Investment Analytics",
    ],
    description:
      "Comprehensive property management solutions that streamline real estate operations and enhance user experiences.",
  },
];

export default function ServiceCategoriesSection() {
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

  const categoryRefs = useIntersectionReveal<HTMLDivElement[]>({
    delay: 0.6,
    duration: 0.8,
    from: "bottom",
    reverse: true,
    stagger: 0.1,
  });

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            ref={sectionTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground mb-8"
          >
            INDUSTRY SOLUTIONS
          </h2>
          <h3
            ref={sectionSubtitleRef}
            className="text-2xl md:text-3xl font-light tracking-wider text-foreground/70"
          >
            Tailored Software for Every Sector
          </h3>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {detailedServices.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                if (categoryRefs.current) {
                  categoryRefs.current[index] = el;
                }
              }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <h4 className="text-3xl font-light tracking-wide text-foreground">
                      {category.category}
                    </h4>
                  </div>

                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center space-x-3 p-3 bg-foreground/5 rounded-lg hover:bg-foreground/10 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-foreground/60 rounded-full"></div>
                        <span className="text-sm text-foreground/80 font-light">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative h-80 bg-gradient-to-br from-foreground/10 via-foreground/5 to-transparent rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">{category.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
