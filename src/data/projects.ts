export type ImagePosition = "left" | "center" | "right" | "top" | "bottom";
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imagePosition?: ImagePosition;
  technologies: string[];
  category: string;
  status: "completed" | "in-progress" | "planned";
  year: number;
  client?: string;
  duration?: string;
  teamSize?: number;
  challenges: string[];
  solutions: string[];
  results: string[];
  timeline: ProjectTimelineItem[];
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export interface ProjectTimelineItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  technologies: string[];
  images?: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Naafa",
    description:
      "An innovative stock market analysis platform tailored for the Nepali context, offering real-time buy/sell recommendations and market insights powered by AI algorithms.",
    longDescription:
      "Naafa is a comprehensive stock market analysis platform designed specifically for the Nepali market. It combines real-time data processing, machine learning algorithms, and intuitive user interfaces to help local investors make informed decisions. The platform features advanced charting capabilities, predictive analytics, and personalized recommendations based on market trends and individual investment patterns.",
    image: "/naafa-demo.png",
    imagePosition: "left",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "Chart.js",
      "Redis",
      "Docker",
    ],
    category: "FinTech",
    status: "completed",
    year: 2024,
    client: "Nepal Stock Exchange",
    duration: "8 months",
    teamSize: 5,
    challenges: [
      "Real-time data processing from multiple sources",
      "Building accurate prediction models for volatile markets",
      "Creating intuitive UI for non-technical users",
      "Ensuring data security and compliance",
    ],
    solutions: [
      "Implemented microservices architecture for scalable data processing",
      "Developed custom ML models trained on historical Nepali market data",
      "Created responsive design with progressive web app features",
      "Established comprehensive security protocols and data encryption",
    ],
    results: [
      "40% improvement in user investment decisions",
      "95% accuracy in short-term predictions",
      "10,000+ active users within 6 months",
      "Featured in major Nepali financial publications",
    ],
    timeline: [
      {
        id: "1-1",
        phase: "Research & Planning",
        title: "Market Analysis & Requirements",
        description:
          "Conducted extensive research on Nepali stock market patterns and user needs",
        duration: "2 months",
        challenges: [
          "Limited historical data",
          "Understanding local market dynamics",
        ],
        solutions: [
          "Partnered with local brokers",
          "Created custom data collection methods",
        ],
        technologies: ["Python", "Pandas", "Jupyter"],
        date: "2024-01-01",
      },
      {
        id: "1-2",
        phase: "Development",
        title: "Core Platform Development",
        description:
          "Built the main application with real-time data processing and ML integration",
        duration: "4 months",
        challenges: ["Real-time data synchronization", "ML model optimization"],
        solutions: [
          "Implemented WebSocket connections",
          "Used TensorFlow for model training",
        ],
        technologies: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
        date: "2024-03-01",
      },
      {
        id: "1-3",
        phase: "Testing & Optimization",
        title: "Performance Tuning & User Testing",
        description:
          "Optimized performance and conducted extensive user testing",
        duration: "2 months",
        challenges: ["Performance bottlenecks", "User adoption"],
        solutions: [
          "Implemented caching strategies",
          "Created comprehensive user guides",
        ],
        technologies: ["Redis", "Docker", "Jest"],
        date: "2024-07-01",
      },
    ],
    links: {
      live: "https://naafa.com",
      github: "https://github.com/wisp/naafa",
      demo: "https://demo.naafa.com",
    },
  },
  {
    id: "2",
    title: "ForgeLM",
    description:
      "A one-click deployment solution for large language models, simplifying the process of hosting and scaling AI models on cloud infrastructure.",
    longDescription:
      "ForgeLM is a comprehensive platform that streamlines the deployment and management of large language models. It provides developers with a simple interface to deploy, scale, and monitor LLMs across different cloud providers. The platform handles infrastructure provisioning, model optimization, and automatic scaling based on demand.",
    image: "/forgelm-demo.png",
    imagePosition: "right",
    technologies: [
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Hugging Face Transformers",
      "AWS",
      "TypeScript",
      "Terraform",
      "Prometheus",
    ],
    category: "AI/ML",
    status: "in-progress",
    year: 2024,
    client: "Internal",
    duration: "6 months",
    teamSize: 4,
    challenges: [
      "Complex infrastructure management",
      "Model optimization for different hardware",
      "Cost optimization for cloud resources",
      "Ensuring high availability and reliability",
    ],
    solutions: [
      "Created infrastructure-as-code templates",
      "Implemented automatic model quantization",
      "Built intelligent resource allocation algorithms",
      "Designed fault-tolerant architecture with auto-recovery",
    ],
    results: [
      "90% reduction in deployment time",
      "60% cost savings through optimization",
      "99.9% uptime achieved",
      "Support for 50+ different model architectures",
    ],
    timeline: [
      {
        id: "2-1",
        phase: "Research & Planning",
        title: "Infrastructure Analysis",
        description: "Analyzed cloud providers and containerization strategies",
        duration: "1 month",
        challenges: ["Multi-cloud compatibility", "Resource optimization"],
        solutions: [
          "Created provider abstraction layer",
          "Implemented cost analysis tools",
        ],
        technologies: ["Terraform", "AWS", "GCP", "Azure"],
        date: "2024-06-01",
      },
      {
        id: "2-2",
        phase: "Development",
        title: "Core Platform Development",
        description: "Built the main deployment and management platform",
        duration: "3 months",
        challenges: ["Kubernetes complexity", "Model loading optimization"],
        solutions: ["Created custom operators", "Implemented model caching"],
        technologies: ["Kubernetes", "FastAPI", "Docker", "TypeScript"],
        date: "2024-07-01",
      },
      {
        id: "2-3",
        phase: "Testing & Integration",
        title: "Performance Testing & Integration",
        description: "Comprehensive testing and third-party integrations",
        duration: "2 months",
        challenges: ["Load testing", "Integration complexity"],
        solutions: ["Automated testing pipeline", "API standardization"],
        technologies: ["Jest", "Prometheus", "Grafana"],
        date: "2024-10-01",
      },
    ],
    links: {
      github: "https://github.com/wisp/ForgeLM",
      demo: "https://demo.ForgeLM.com",
    },
  },
  // {
  //   id: "3",
  //   title: "E-Commerce Platform",
  //   description:
  //     "A modern, scalable e-commerce solution built with Next.js and microservices architecture, featuring real-time inventory management and AI-powered recommendations.",
  //   longDescription:
  //     "A comprehensive e-commerce platform designed for high-traffic scenarios with advanced features like real-time inventory management, AI-powered product recommendations, and seamless payment processing. The platform supports multiple vendors, complex product catalogs, and provides analytics for business insights.",
  //   image: "/api/placeholder/800/600",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "PostgreSQL",
  //     "Redis",
  //     "Stripe",
  //     "Docker",
  //     "Kubernetes",
  //     "Elasticsearch",
  //   ],
  //   category: "E-Commerce",
  //   status: "completed",
  //   year: 2023,
  //   client: "TechCorp Solutions",
  //   duration: "10 months",
  //   teamSize: 6,
  //   challenges: [
  //     "Handling high traffic loads",
  //     "Real-time inventory synchronization",
  //     "Complex payment processing",
  //     "Multi-vendor management",
  //   ],
  //   solutions: [
  //     "Implemented microservices with auto-scaling",
  //     "Built real-time inventory system with Redis",
  //     "Integrated multiple payment gateways",
  //     "Created vendor management dashboard",
  //   ],
  //   results: [
  //     "99.9% uptime during peak traffic",
  //     "50% increase in conversion rates",
  //     "Support for 1000+ concurrent users",
  //     "30% reduction in cart abandonment",
  //   ],
  //   timeline: [
  //     {
  //       id: "3-1",
  //       phase: "Planning & Design",
  //       title: "Architecture Design & Planning",
  //       description: "Designed microservices architecture and database schema",
  //       duration: "2 months",
  //       challenges: ["Scalability planning", "Database design"],
  //       solutions: ["Microservices architecture", "Event-driven design"],
  //       technologies: ["Figma", "PostgreSQL", "Redis"],
  //       date: "2023-01-01",
  //     },
  //     {
  //       id: "3-2",
  //       phase: "Development",
  //       title: "Core Platform Development",
  //       description:
  //         "Built the main e-commerce platform with all core features",
  //       duration: "6 months",
  //       challenges: ["Payment integration", "Real-time features"],
  //       solutions: ["Stripe integration", "WebSocket implementation"],
  //       technologies: ["Next.js", "TypeScript", "Stripe", "WebSocket"],
  //       date: "2023-03-01",
  //     },
  //     {
  //       id: "3-3",
  //       phase: "Testing & Launch",
  //       title: "Testing & Production Launch",
  //       description: "Comprehensive testing and production deployment",
  //       duration: "2 months",
  //       challenges: ["Performance testing", "Security audits"],
  //       solutions: ["Load testing", "Security hardening"],
  //       technologies: ["Jest", "Cypress", "Docker"],
  //       date: "2023-09-01",
  //     },
  //   ],
  //   links: {
  //     live: "https://ecommerce.techcorp.com",
  //     github: "https://github.com/wisp/ecommerce-platform",
  //   },
  // },
  // {
  //   id: "4",
  //   title: "AI Analytics Dashboard",
  //   description:
  //     "An intelligent analytics platform that processes millions of data points to provide actionable insights with machine learning algorithms and real-time data visualization.",
  //   longDescription:
  //     "A sophisticated analytics platform that leverages machine learning to process and analyze vast amounts of data in real-time. The platform provides interactive dashboards, predictive analytics, and automated reporting capabilities for businesses to make data-driven decisions.",
  //   image: "/api/placeholder/800/600",
  //   technologies: [
  //     "React",
  //     "Python",
  //     "TensorFlow",
  //     "D3.js",
  //     "WebSocket",
  //     "Apache Kafka",
  //     "MongoDB",
  //     "Grafana",
  //   ],
  //   category: "Analytics",
  //   status: "completed",
  //   year: 2023,
  //   client: "DataInsights Inc",
  //   duration: "7 months",
  //   teamSize: 5,
  //   challenges: [
  //     "Processing large datasets in real-time",
  //     "Creating intuitive data visualizations",
  //     "Building accurate ML models",
  //     "Ensuring data privacy and security",
  //   ],
  //   solutions: [
  //     "Implemented Apache Kafka for data streaming",
  //     "Created custom D3.js visualizations",
  //     "Developed ensemble ML models",
  //     "Established comprehensive data governance",
  //   ],
  //   results: [
  //     "Process 10M+ data points daily",
  //     "95% accuracy in predictions",
  //     "50% reduction in analysis time",
  //     "ROI of 300% for clients",
  //   ],
  //   timeline: [
  //     {
  //       id: "4-1",
  //       phase: "Research & Planning",
  //       title: "Data Architecture & ML Research",
  //       description: "Researched data processing patterns and ML algorithms",
  //       duration: "2 months",
  //       challenges: ["Data volume handling", "Algorithm selection"],
  //       solutions: ["Stream processing architecture", "Ensemble methods"],
  //       technologies: ["Python", "TensorFlow", "Apache Kafka"],
  //       date: "2023-02-01",
  //     },
  //     {
  //       id: "4-2",
  //       phase: "Development",
  //       title: "Platform Development",
  //       description: "Built the core analytics platform with ML integration",
  //       duration: "4 months",
  //       challenges: ["Real-time processing", "Visualization complexity"],
  //       solutions: ["Kafka streams", "Custom D3.js components"],
  //       technologies: ["React", "D3.js", "WebSocket", "MongoDB"],
  //       date: "2023-04-01",
  //     },
  //     {
  //       id: "4-3",
  //       phase: "Testing & Optimization",
  //       title: "Performance Optimization & Testing",
  //       description: "Optimized performance and conducted extensive testing",
  //       duration: "1 month",
  //       challenges: ["Performance bottlenecks", "Data accuracy"],
  //       solutions: ["Caching strategies", "Automated testing"],
  //       technologies: ["Jest", "Cypress", "Redis"],
  //       date: "2023-08-01",
  //     },
  //   ],
  //   links: {
  //     live: "https://analytics.datainsights.com",
  //     demo: "https://demo.analytics.datainsights.com",
  //   },
  // },
];
