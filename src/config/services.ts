// Services configuration data

export const serviceCategories = [
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

export const detailedServices = [
  {
    category: "Financial Technology",
    image: "/finance.webp",
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
    image: "/ecom.webp",
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
    image: "/health.webp",
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
    image: "/education.webp",
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
    image: "/iot.webp",
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
    image: "/real-estate.webp",
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

export const aiSolutions = [
  {
    title: "Natural Language Processing",
    description:
      "Intelligent text analysis, chatbots, and language understanding systems.",
    applications: [
      "Customer Support Automation",
      "Content Generation",
      "Sentiment Analysis",
      "Language Translation",
      "Document Processing",
    ],
    technologies: ["OpenAI GPT", "LangChain", "Hugging Face", "spaCy", "NLTK"],
  },
  {
    title: "Computer Vision",
    description:
      "Image and video analysis for automated recognition and processing.",
    applications: [
      "Object Detection",
      "Facial Recognition",
      "Medical Image Analysis",
      "Quality Control",
      "Augmented Reality",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "YOLO", "MediaPipe"],
  },
  {
    title: "Predictive Analytics",
    description:
      "Machine learning models for forecasting and decision support.",
    applications: [
      "Sales Forecasting",
      "Risk Assessment",
      "Demand Planning",
      "Fraud Detection",
      "Market Analysis",
    ],
    technologies: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Recommendation Systems",
    description: "Personalized content and product recommendations.",
    applications: [
      "E-commerce Recommendations",
      "Content Curation",
      "Personalized Marketing",
      "Music & Video Streaming",
      "News Feed Optimization",
    ],
    technologies: [
      "Collaborative Filtering",
      "Matrix Factorization",
      "Deep Learning",
      "Apache Spark",
      "Redis",
    ],
  },
  {
    title: "Process Automation",
    description: "Intelligent automation of business processes and workflows.",
    applications: [
      "Document Automation",
      "Workflow Optimization",
      "Data Entry Automation",
      "Report Generation",
      "Process Monitoring",
    ],
    technologies: ["RPA", "Workflow Engines", "API Integration", "OCR", "NLP"],
  },
  {
    title: "Conversational AI",
    description: "Advanced chatbot and virtual assistant solutions.",
    applications: [
      "Virtual Assistants",
      "Voice Interfaces",
      "Multi-language Support",
      "Context Awareness",
      "Integration APIs",
    ],
    technologies: [
      "Dialogflow",
      "Rasa",
      "Microsoft Bot Framework",
      "Amazon Lex",
      "Custom NLP",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We begin by understanding your vision, requirements, and business objectives through comprehensive discovery sessions.",
    activities: [
      "Requirements Analysis",
      "Technical Architecture Planning",
      "Timeline & Resource Planning",
      "Risk Assessment",
      "Stakeholder Alignment",
    ],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Creating intuitive user experiences and technical blueprints that align with your brand and user needs.",
    activities: [
      "User Experience Design",
      "Technical Architecture",
      "Prototype Development",
      "Design System Creation",
      "User Testing",
    ],
  },
  {
    step: "03",
    title: "Development & Integration",
    description:
      "Building robust, scalable solutions using modern technologies and best practices.",
    activities: [
      "Agile Development",
      "Code Quality Assurance",
      "Third-party Integrations",
      "API Development",
      "Database Design",
    ],
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing to ensure reliability, performance, and security of your solution.",
    activities: [
      "Unit & Integration Testing",
      "Performance Testing",
      "Security Audits",
      "User Acceptance Testing",
      "Bug Fixing & Optimization",
    ],
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description:
      "Seamless deployment to production with monitoring and support for a successful launch.",
    activities: [
      "Production Deployment",
      "Performance Monitoring",
      "User Training",
      "Documentation",
      "Launch Support",
    ],
  },
  {
    step: "06",
    title: "Maintenance & Growth",
    description:
      "Ongoing support, updates, and enhancements to ensure your solution continues to evolve with your business.",
    activities: [
      "24/7 Monitoring",
      "Regular Updates",
      "Feature Enhancements",
      "Performance Optimization",
      "Technical Support",
    ],
  },
];
