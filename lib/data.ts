export const profile = {
  name: "NAVEEN RAJ M",
  title: "Software Engineering Student",
  phone: "+91 8667484806",
  email: "naveenofficial573@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveen-raj-m-794061256/",
  github: "https://github.com/22mis0246",
  summary:
    "Passionate software engineering student with hands-on experience in full-stack web development, data analytics, and machine learning. Proficient in building secure, scalable web applications from robust backend APIs and database design to responsive frontend interfaces. Experienced in extracting insights from data and integrating AI and ML capabilities into real-world workflows. Grounded in core computer science principles with a practical, build-first approach. Eager to work on challenging problems alongside teams that value engineering quality, intelligent systems, and continuous learning.",
};

export const education = [
  {
    degree: "Integrated MTech in Software Engineering",
    school: "Vellore Institute of Technology, Vellore",
    period: "Expected: 2027",
    detail: "CGPA: 8.01 / 10",
    logo: "/images/vit-logo.png",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    school: "Sunbeam Matric Higher Secondary School, Vellore",
    period: "2022",
    detail: "Percentage: 84.1%",
    logo: "/images/sunbeam-logo.png",
    logoTint: "opacity(1)",
    logoWidth: "25%",   
    logoLeft: "55%",
  },
];

export const projects = [
  {
    name: "OneSpot Finance",
    subtitle: "Personal Finance & Asset Management Platform",
    stack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "React",
      "REST API",
    ],
    highlights: [
      "Engineered a full-stack personal finance platform integrating expense tracking, investment management, liabilities, financial goals, and dashboard analytics into a unified application.",
      "Deployed the application on Render with a live database and real-time stock price updates, while continuously expanding the platform with additional financial modules and features",
    ],
    liveUrl: "https://onespot-frontend.onrender.com/",
    repoUrl: "https://github.com/22mis0246/onespot-finance",
  },
  {
    name: "Flower Classification",
    subtitle: "Convolutional Neural Networks",
    stack: [
      "Python",
      "TensorFlow",
      "CNN",
      "Keras",
      "Pillow",
      "NumPy",
    ],
    highlights: [
      "Developed a multi-class flower image classification system using Convolutional Neural Networks (CNN) with Conv2D, MaxPooling, ReLU, and Softmax layers to classify 5 flower categories.",
      "Implemented a health analysis module using RGB-to-HSV color analysis to estimate visible dryness, overwatering, and poor lighting conditions from flower images using Pillow and NumPy.",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/22mis0246/Flower-CNN-Classifier",
  },
  {
    {
  name: "Real-Time RAG-Based Hallucination Firewall for LLMs",
  subtitle: "Ongoing SDD Project",
  stack: [
    "Python",
    "RAG",
    "Ollama",
    "ChromaDB",
    "FAISS",
    "NLI",
  ],
  highlights: [
    "Designed a real-time hallucination verification architecture for LLM-based banking customer support to reduce unsupported or contradictory information reaching end users.",

    "Proposed a claim-level verification pipeline combining RAG, atomic factual claim extraction, trusted evidence retrieval, and Natural Language Inference (NLI) for real-time response validation.",

    "Designed an intervention workflow to classify generated claims as entailment, contradiction, or unsupported, followed by suppression or evidence-grounded regeneration before final response delivery.",
  ],
  liveUrl: null,
  repoUrl: null,
},
];
export const skillGroups = [
  {
    title: "Core CS & Programming",
    items: [
      "Java",
      "Data Structures",
      "Computer Networks",
      "OOP",
      "DBMS",
      "Operating Systems",
    ],
  },

  {
    title: "Authentication & Security",
    items: [
      "JWT Authentication",
      "Password Hashing (bcrypt)",
    ],
  },

  {
    title: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
    ],
  },

  {
    title: "AI & Machine Learning",
    items: [
      "Model Training & Optimization",
      "Deep Learning",
      "LLM and RAG Fundamentals",
    ],
  },

  {
    title: "Methodologies & Tools",
    items: [
      "SDLC",
      "Agile (Scrum)",
      "GitHub",
      "Postman",
    ],
  },
];

export const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    certificateUrl:
      "https://drive.google.com/file/d/189tGZ4LyX8mbYgTFsK681HPpGFvcnCSH/view",
  },
  {
    name: "Generative AI Leader",
    issuer: "Google",
    certificateUrl:
      "https://drive.google.com/file/d/1ewDvNjln8DpYfk4oiwz49dG7DGduP4Pj/view",
  },
];

export const interests = {
  technical: [
    "Generative AI",
    "Cloud Technologies",
    "Machine Learning",
  ],

  nonTechnical: [
    "Videography",
    "Editing",
    "Stock Market Analysis",
  ],
};
