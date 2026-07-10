export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  apiDocsUrl?: string;
  image: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies?: string[];
}

export interface JourneyStep {
  title: string;
  period: string;
  description: string;
}

export interface Article {
  title: string;
  description: string;
  link: string;
  readTime: string;
}

export const personalInfo = {
  name: "Kaushalya Rathnayake",
  role: "Full Stack Software Engineer",
  heroLabel: "FULL STACK · BACKEND · AI SOLUTIONS",
  heroHeading: "I build scalable software\nand intelligent systems.",
  heroDescription:
    "Full Stack Software Engineer with 4+ years of experience building scalable web applications, backend services, APIs, and practical AI-powered solutions using modern web, Python, and NLP technologies.",

  about:
    "I build reliable, user-focused software across the full stack from polished web applications and scalable backend systems to AI-powered tools. My work combines React, Next.js, Node.js, Python, FastAPI, NLP, and LLM technologies to turn ideas into practical, maintainable products that solve real business problems.",

  availability:
    "Available for freelance projects in full-stack development, backend APIs, Python, and AI-powered applications.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export const experience: ExperienceItem[] = [
  {
    company: "EZ Networks Inc",
    role: "Senior Software Engineer",
    period: "Mar 2025 — Present",
    summary:
      "Develop and maintain Driver EZ, a large-scale logistics and operations platform, contributing across frontend, backend integrations, deployment infrastructure, CI/CD, and production operations.",

    highlights: [
      "Designed and developed scalable features across React frontend, backend API integrations, and business-critical logistics workflows.",
      "Implemented secure authentication, JWT session management, role-based access control, and application security improvements.",
      "Integrated third-party services including Stripe, Google & Microsoft Calendar, Socket.IO, maps, and real-time vehicle tracking.",
      "Managed production deployments, GitLab CI/CD pipelines, Linux servers, Nginx configuration, PM2 process management, and virtual machine environments.",
      "Built and maintained automated testing, monitored production systems, investigated issues, and improved application performance and reliability.",
      "Collaborated across engineering teams to design, deliver, and maintain scalable software throughout the complete development lifecycle.",
    ],
    technologies: [
    "React",
    "Node.js",
    "Redux Toolkit",
    "RTK Query",
    "RabbitMQ",
    "MySQL",
    "JWT",
    "Socket.IO",
    "Stripe",
    "Linux",
    "Nginx",
    "PM2",
    "GitLab CI/CD"
  ]
  },
  {
    company: "EZ Networks Inc",
    role: "Software Engineer",
    period: "Mar 2024 — Mar 2025",
    summary:
      "Developed and maintained full-stack web and mobile applications while contributing to scalable backend architecture and deployment workflows.",
    highlights: [
      "Built web and mobile applications using React.js, Node.js, Flutter, Redux, and MySQL.",
      "Developed and integrated microservices, APIs, and RabbitMQ-based messaging workflows.",
      "Contributed to CI/CD pipeline improvements and streamlined deployment processes.",
      "Improved frontend performance and implemented scalable state management with Redux Toolkit.",
    ],
    technologies:[]
  },
  {
    company: "Intaap",
    role: "Associate Software Engineer",
    period: "Apr 2023 — Mar 2024",
    summary:
      "Worked as a full-stack JavaScript developer, contributing to frontend and backend application development.",
    highlights: [
      "Developed and maintained application features using modern JavaScript technologies.",
      "Contributed across frontend and backend development workflows.",
      "Collaborated with the engineering team to deliver maintainable software solutions.",
    ],
    technologies:[]
  },
  {
    company: "TecWyze",
    role: "Software Engineer Intern",
    period: "Sep 2021 — Feb 2023",
    summary:
      "Built a strong foundation in professional software engineering through frontend application development.",
    highlights: [
      "Developed responsive frontend features and reusable user-interface components.",
      "Gained experience working with production development workflows.",
      "Collaborated with developers while improving frontend engineering practices.",
    ],
    technologies:[]
  },
];

export const projects: Project[] = [
  {
    title: "Production-Ready NLP Service for News Classification",
    description:
      "An end-to-end NLP system for classifying news articles into four categories, with a FastAPI inference service, real-time Streamlit interface, automated testing, CI/CD, and containerized deployment.",
    technologies: [
      "Python",
      "FastAPI",
      "spaCy",
      "Scikit-learn",
      "Docker",
      "GitHub Actions",
      "Streamlit",
    ],
    githubUrl: "https://github.com/KaushalyaDasanayake/news-nlp-classifier",
    liveUrl: "https://news-nlp-classifier.streamlit.app/",
    apiDocsUrl: "https://kaush97-news-classifier-api.hf.space/docs",
    image: "/images/news classifier.jpeg",
    featured: true,
  },
  {
    title: "Production-Ready ML API for Housing Price Prediction",
    description:
      "A production-style machine learning system covering model training, FastAPI inference, Redis caching, request logging, drift detection, automated retraining, CI/CD, and cloud deployment.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Railway",
    ],
    githubUrl: "https://github.com/KaushalyaDasanayake/housing-price-ml-api",
    liveUrl: "https://housing-price-ml-api-production.up.railway.app/docs",
    image: "/images/HousingPricePredictionAPIDoc.jpeg",
    featured: true,
  },
  // {
  //   title: "LLM Customer Feedback Analyzer",
  //   description:
  //     "An LLM-powered application that transforms customer feedback into validated structured outputs using prompt engineering, strict schemas, retry handling, logging, and automated evaluation.",
  //   technologies: [
  //     "Python",
  //     "OpenAI API",
  //     "Pydantic",
  //     "Structured Outputs",
  //     "Prompt Evaluation",
  //   ],
  //   githubUrl: "PASTE_YOUR_REAL_GITHUB_URL",
  //   image: "/images/customer-feedback-analyzer.png",
  //   featured: true,
  // },
  // {
  //   title: "Named Entity Recognition API",
  //   description:
  //     "A Transformer-based NLP service for extracting structured entities from text, with model evaluation and predictions exposed through a FastAPI REST API.",
  //   technologies: [
  //     "Python",
  //     "PyTorch",
  //     "Hugging Face",
  //     "FastAPI",
  //     "NER",
  //   ],
  //   githubUrl: "PASTE_YOUR_REAL_GITHUB_URL",
  //   image: "/images/ner-api.png",
  //   featured: true,
  // },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Material UI",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "React Hook Form",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "REST APIs",
      "RabbitMQ",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "Hugging Face",
      "spaCy",
      "Scikit-learn",
      "Transformers",
      "NLP",
      "LLMs",
      "Prompt Engineering",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Linux",
      "Nginx",
      "GitLab CI/CD",
      "GitHub Actions",
      "PM2",
      "Git",
    ],
  },
];

export const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "Responsive and scalable web applications built with React, Next.js, TypeScript, Node.js, and modern development practices.",
  },
  {
    number: "02",
    title: "Backend & API Development",
    description:
      "Reliable REST APIs, backend services, database integrations, and business logic using Python, FastAPI, and Node.js.",
  },
  {
    number: "03",
    title: "AI & NLP Applications",
    description:
      "Practical AI-powered applications using NLP, Transformers, LLMs, embeddings, and retrieval-based workflows.",
  },
  {
    number: "04",
    title: "Deployment & DevOps",
    description:
      "Application deployment, Docker setup, Linux server configuration, CI/CD workflows, and production support.",
  },
];
export const articles: Article[] = [
  {
    title:
      "Valid JSON Is Not Enough: What I Learned Building My First LLM Application",
    description:
      "Lessons from building a customer feedback analysis application with structured LLM outputs, validation, and reliable application integration.",
    link: "https://kaushalyadasanayake.medium.com/valid-json-is-not-enough-what-i-learned-building-my-first-llm-application-1c89e0f39b51?sharedUserId=kaushalyadasanayake",
    readTime: "2 min read",
  },
  {
    title: "Why Most NLP Projects Fail (And What I Changed in Mine)",
    description:
      "How I improved an NLP project by moving beyond accuracy and adding better evaluation metrics, confusion matrices, error analysis, reproducible experiments, and a structured training pipeline.",
    link: "https://kaushalyadasanayake.medium.com/why-most-nlp-projects-fail-and-what-i-changed-in-mine-f738cc1126c2?sharedUserId=kaushalyadasanayake",
    readTime: "3 min read",
  },
  {
    title:
      "Beyond Accuracy: How I Turned a Transformer Classifier Into a Deployable NLP System",
    description:
      "How I moved beyond model metrics and built a more complete NLP system with evaluation, deployment, and production considerations.",
    link: "https://kaushalyadasanayake.medium.com/beyond-accuracy-how-i-turned-a-transformer-classifier-into-a-deployable-nlp-system-54934c234da7?sharedUserId=kaushalyadasanayake",
    readTime: "6 min read",
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/kaushalya-rathnayake-d/",
  github: "https://github.com/KaushalyaDasanayake",
  email: "kaushalyadasanayake97@gmail.com",
  // TODO: Add your Medium profile URL when it is ready.
  medium: "",
};

export const siteMetadata = {
  name: personalInfo.name,
  title: `${personalInfo.name} · Full Stack Engineer & AI NLP Builder`,
  description:
    "Modern portfolio for Kaushalya Rathnayake, a Full Stack Software Engineer specializing in AI, NLP, and LLM application engineering.",
  url: "https://kaushalya.dev",
};
