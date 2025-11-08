// About page configuration data

export interface Resume {
  location: string;
  phone: string;
  email: string;
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
  }>;
  skills: string[];
  projects: Array<{
    name: string;
    description: string;
  }>;
  awards: string[];
  certifications: string[];
}

export interface TeamMember {
  id: string;
  initials: string;
  name: string;
  title: string;
  description: string;
  isCEO: boolean;
  isCoFounder: boolean;
  image?: string;
  resume?: Resume;
}

export const teamMembers: TeamMember[] = [
  {
    id: "diwakar-adhikari",
    initials: "DA",
    name: "Diwakar Adhikari",
    title: "Chief Executive Officer",
    description:
      "Visionary leader driving strategic direction and company growth",
    isCEO: true,
    isCoFounder: true,
    image: "/diwakar.png",
    resume: {
      location: "Pune",
      phone: "9378067880",
      email: "diwakar.adhikari0@gmail.com",
      summary:
        "Lead Engineer at Bajaj Finserv Direct Ltd (outsourced to Bajaj Allianz) specializing in AI/ML innovations for the insurance sector. Passionate about deploying large language models (LLMs) and agent-based systems to enhance risk assessment, claims automation, and customer personalization. Skilled in Python, deep learning frameworks (e.g., PyTorch via Hugging Face), AWS services, and leading cross-functional teams to architect scalable AI infrastructures. Proven track record in full-stack development (Angular, Node.js) integrated with AI/ML for performance optimization and security, with active research in quantized LLMs for edge computing to advance conversational AI in financial services.",
      experience: [
        {
          title: "Dev Lead",
          company: "Bajaj Finserv Direct Ltd",
          period: "June 2022 – Present",
          location: "Pune, India",
          achievements: [
            "Promoted to Dev Lead, managing a 10-member development team delivering multiple critical digital journeys (related to term-insurances) with significant revenue impact.",
            "Collaborate cross-functionally with AEM and Java teams at the Bajaj Allianz client office, aligning requirements and streamlining end-to-end integration efforts.",
            "Lead API design and deployment, enhancing system integration and operational efficiency by 25% (Deployment Star Award recipient).",
            "Develop and optimize Angular components, boosting application performance by 30%; integrated Angular Universal for server-side rendering, improving SEO and organic traffic by 15%.",
            "Directed multiple high-impact projects using agile methodologies, including new Angular components for motor and mutual fund modules, resulting in a 20% increase in user engagement.",
            "Enhance system scalability and code quality (35% improvement) to support high-traffic user loads and strengthen security architecture.",
            "Remediate critical security vulnerabilities (authentication/authorization) through VAPT fixes, improving system security by 45%.",
            "Contribute to the launch of Bajaj Finserv Asset Management's NFO platform, increasing user adoption by 50% and earning the Esteemed Contributor to Financial Innovation award.",
          ],
        },
      ],
      education: [
        {
          degree: "Bachelor of Technology in Computer Science Engineering",
          institution: "SRM University",
          period: "Apr 2018 - May 2022",
          gpa: "8.8 CGPA",
        },
      ],
      skills: [
        "Java",
        "Angular",
        "Next.js",
        "Vite",
        "Docker",
        "API Design & Integration",
        "Redis & Apache Kafka",
        "Python",
        "LangChain",
        "Hugging Face Transformers",
        "PyTorch",
      ],
      projects: [
        {
          name: "NgrokF2P",
          description:
            "A web-based local file transfer system that allows users on the same WiFi network to easily share files between devices.",
        },
        {
          name: "Ollama Bridge Extension",
          description:
            "Creates a secure communication channel between web applications and a locally running Ollama LLM server.",
        },
        {
          name: "Teeny: LLM Quantization Research",
          description:
            "Research project focused on LLM quantization techniques.",
        },
      ],
      awards: [
        "International Recognition for Excellence in Sustainable Energy Research - California State University, USA, and the International Association of Academicians (IAASSE), USA",
        "Deployment Star Award",
        "Esteemed Contributor to Financial Innovation Award",
        "COMPEX Scholarship Scheme Awardee",
      ],
      certifications: ["Full-Stack Java Developer - 3 Months - Bajaj Finserv"],
    },
  },
  {
    id: "cto",
    initials: "AP",
    name: "Abhishek",
    title: "Chief Technology Officer",
    description: "Leading technical architecture and development excellence",
    isCEO: false,
    isCoFounder: true,
    image: "",
  },
  {
    id: "marketing",
    initials: "PS",
    name: "Prasiddha Shakya",
    title: "Marketing & Research Director",
    description: "Driving market strategy and research initiatives",
    isCEO: false,
    isCoFounder: true,
    image: "/prassidha.jpg",
    resume: {
      location: "Lalitpur, Nepal",
      phone: "9840265924",
      email: "shakyaprasiddha8@gmail.com",
      summary:
        "Senior Support Assistant at Worldlink Communications Pvt Ltd specializing in System Engineering and Computer Networking. Motivated and technically skilled professional with hands on experience in email infrastructure management, Virtualization platforms like VMware and HyperV, Backup Solutions and Windows Server with Active Directory.",
      experience: [
        {
          title: "Enterprise Support Representative",
          company: "Worldlink Communications",
          period: "December 2023 – Present",
          location: "Jamal, Nepal",
          achievements: [
            "Administer and maintain Microsoft Exchange Server 2019, including mailbox management, SSL certificates, and transport rules to ensure secure email delivery.",
            "Manage and optimize Barracuda Email Security Gateway (ESG) for advanced spam and phishing protection, including email filtering, quarantine management, and threat investigation.",
            "Oversee virtualization environments using VMware vCenter and ESXi, performing VM deployment, snapshot management, and resource allocation for efficient infrastructure performance.",
            "Configure and monitor networking devices including firewalls, switches, and wireless access points, ensuring secure and stable connectivity.",
            "Utilize PRTG Network Monitor for real-time performance tracking, alert configuration, and uptime analysis of servers and network components.",
            "Troubleshoot complex email flow and connectivity issues involving DNS, SMTP, and TLS; collaborate with users and vendors to resolve escalations.",
            "Maintain accurate documentation of configurations, network layouts, and incident resolutions to support operational continuity and audits.",
            "Provide end-user support and contribute to IT security awareness by guiding users on identifying phishing and suspicious emails.",
          ],
        },
      ],
      education: [
        {
          degree: "Bachelor of Engineering in Information Technology",
          institution: "NCIT College",
          period: "Apr 2018 - May 2022",
        },
      ],
      skills: [
        "Microsoft Exchange Server",
        "Barracuda Email Security Gateway",
        "VMware vCenter & ESXi",
        "Windows Server",
        "Active Directory",
        "Network Administration",
        "Firewalls & Security",
        "PRTG Network Monitor",
        "DNS, SMTP, TLS",
        "Backup Solutions",
        "Virtualization",
      ],
      projects: [],
      awards: [],
      certifications: [
        "Barracuda Email Protection – Email Gateway Defense",
        "Fortinet Certified Fundamentals",
        "Fortinet Certified Associate",
      ],
    },
  },
  {
    id: "finance",
    initials: "HC",
    name: "Harsh Chachan",
    title: "Head of Finance",
    description: "Managing financial strategy and operational excellence",
    isCEO: false,
    isCoFounder: true,
    image: "/harsh.jpg",
    resume: {
      location: "Kathmandu, Nepal",
      phone: "+977-9818420487",
      email: "chachan.harsh@gmail.com",
      summary:
        "Finance professional with an MBA and a BBA Honors degree, specializing in Financial Management. Keen interest in leveraging financial modeling and analytical skills to contribute to business growth and strategic decision-making. Proven experience in financial operations, business development, and entrepreneurial leadership. Skilled in Tally ERP, Microsoft Office, and financial analysis, with a strong foundation in managing business operations and driving revenue.",
      experience: [
        {
          title: "CEO",
          company: "Malmal the Fabric Store",
          period: "Mar 2023 – Present",
          location: "Kathmandu, Nepal",
          achievements: [
            "Oversee all wholesale operations for a fabric store specializing in lining cloths for women's apparel",
            "Develop and execute business strategies to drive sales, expand market reach, and manage supplier relationships",
            "Manage end-to-end financial operations, including budgeting, inventory control, and profitability analysis",
          ],
        },
        {
          title: "Business Development Executive",
          company: "Technorio",
          period: "Jul 2023 – Aug 2023",
          location: "Kathmandu, Nepal",
          achievements: [
            "Identified and pursued new business opportunities to drive company growth and market presence",
            "Built and maintained strong client relationships, contributing to revenue generation and market expansion",
            "Collaborated with cross-functional teams to align business development strategies with company capabilities",
          ],
        },
        {
          title: "Finance & HR Intern",
          company: "Chaudhary Group",
          period: "Apr 2015 – May 2015",
          location: "Nepal",
          achievements: [
            "Managed cash receipts and payments entries using Swastik (CG's Accounting Software), ensuring accurate financial records",
            "Prepared Bank Reconciliation Statements (BRS) and analyzed purchase, expenditure, and advertisement vouchers",
            "Performed data entry in Excel for company revenues, supporting financial reporting and analysis",
            "Assisted the HR team in organizing training programs, analyzing feedback, and suggesting team-building activities",
            "Prepared compiled reports on team activities, enhancing employee engagement initiatives",
          ],
        },
      ],
      education: [
        {
          degree: "MBA (General)",
          institution:
            "Asian Institute of Management, Satdobato, Lalitpur, Nepal",
          period: "2022 – 2024",
          gpa: "3.6",
        },
        {
          degree: "BBA Honors (Finance)",
          institution: "Christ University, Bangalore, India",
          period: "",
          gpa: "3.76",
        },
        {
          degree: "Pre-University",
          institution: "DAVSKVB, Kathmandu, Nepal",
          period: "",
          gpa: "95%",
        },
      ],
      skills: [
        "Financial Modeling",
        "Financial Analysis",
        "Bank Reconciliation",
        "Data Analysis",
        "Investment Analysis",
        "Risk Management",
        "Financial Reporting",
        "Tally ERP",
        "Microsoft Office Suite",
        "Excel (Coursera Certified)",
        "Swastik Accounting Software",
        "Data Visualization",
        "Business Strategy",
        "Business Development",
        "Client Acquisition",
        "Stakeholder Management",
        "Team Leadership",
        "Strategic Planning",
        "Problem Solving",
        "Time Management",
        "Communication",
        "Negotiation",
      ],
      projects: [
        {
          name: "Dissertation Project",
          description:
            "Exploring the Impact of Liquidity on Profitability of Sunrise Bank Limited",
        },
        {
          name: "Social Responsibility Project",
          description: "Old Age Home community support initiative",
        },
        {
          name: "Entrepreneurship Development Project",
          description:
            "Master Mind - Business development and strategy project",
        },
      ],
      awards: [],
      certifications: [
        "Excel Skills for Business: Essentials - Coursera",
        "Excel Skills for Business: Intermediate I - Coursera",
        "Excel Skills for Business: Intermediate II - Coursera",
        "Financial Markets - Coursera",
      ],
    },
  },
  {
    id: "jay-shakya",
    initials: "JS",
    name: "Jay Shakya",
    title: "Product Strategy Director",
    description: "Leading product vision, research, and strategic development",
    isCEO: false,
    isCoFounder: true,
    image: "/jay.jpg",
    resume: {
      location: "Nagbahal, Lalitpur, Nepal",
      phone: "",
      email: "shakyajay321@gmail.com",
      summary:
        "I am a highly motivated individual with a Bachelor's in Business Administration degree seeking a job opportunity. I am a detail-oriented professional with experience in financial documentation, compliance, and loan processing. I am skilled in analyzing data, ensuring accuracy, and adhering to regulatory standards. I seek to apply my strong attention to detail and problem-solving skills in a dynamic role.",
      experience: [
        {
          title: "IO Retail Agent",
          company: "Invisible Technologies",
          period: "Oct 2024 - Present",
          location: "",
          achievements: [
            "Structured and Enriched vendor data, item IDs, and metrics using Excel Online",
            "Ensured compliance with high standards according to the project requirement",
            "To help process refinement and coordinate with a global team",
          ],
        },
        {
          title: "Data Specialist",
          company: "CloudFactory Ltd",
          period: "Sep 2021 - July 2024",
          location: "",
          achievements: [
            "Ensured accuracy and consistency in annotations to enhance the quality of training data",
            "Provide feedback to ensure the desired results are achieved",
            "Collaborate closely with other teams, and used to communicate insights and recommendations to facilitate the data process effectively",
            "To articulate issues and errors found on tasks",
          ],
        },
      ],
      education: [
        {
          degree: "Bachelors in Business Administration (BBA)",
          institution: "",
          period: "",
          gpa: "3.20 GPA",
        },
      ],
      skills: [
        "AI-Powered Marketing Analytics",
        "Marketing Automation & CRM",
        "Predictive Customer Analytics",
        "SEO & Content Optimization with AI",
        "Social Media Analytics",
        "Customer Segmentation & Targeting",
        "A/B Testing & Conversion Optimization",
        "Generative AI for Content Creation",
        "Prompt Engineering for Marketing",
        "Machine Learning",
        "AI Model Training",
        "Data Annotation & Quality Assurance",
      ],
      projects: [],
      awards: [],
      certifications: [
        "Local Tour Guide Training Program - NATHM (2017)",
        "Tourism Business Centric Entrepreneurship Training Program - Outlines Research and Development (2017)",
      ],
    },
  },
];

export const stats = [
  {
    value: "50+",
    label: "Projects Completed",
    description: "Successfully delivered across various industries",
  },
  {
    value: "25+",
    label: "Happy Clients",
    description: "Long-term partnerships and repeat business",
  },
  {
    value: "5+",
    label: "Years Experience",
    description: "Deep expertise in modern technologies",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
    description: "Consistent quality and reliable delivery",
  },
];
