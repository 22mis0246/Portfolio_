export const profile = {
  name: "NAVEEN RAJ M",
  title: "Software Engineering Student · Full-Stack & ML",
  phone: "+91 8667484806",
  email: "naveenofficial573@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveen-raj-794061256/",
  github: "https://github.com/22mis0246",
  summary:
    "Passionate software engineering student with hands-on experience in full-stack web development, data analytics, and machine learning. Proficient in building secure, scalable web applications from robust backend APIs and database design to responsive frontend interfaces. Experienced in extracting insights from data and integrating AI and ML capabilities into real-world workflows. Grounded in core computer science principles with a practical, build-first approach. Eager to work on challenging problems alongside teams that value engineering quality, intelligent systems, and continuous learning.",
};

export const education = [
  {
    degree: "Integrated MTech in Software Engineering",
    school: "Vellore Institute of Technology, Vellore",
    period: "Expected: 2027",
    detail: "CGPA: 7.98 / 10",
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
      "Prisma ORM",
      "React",
      "TypeScript",
      "REST API",
    ],
    highlights: [
      "Engineered a full-stack personal finance platform centralizing expense tracking, liability management, goal planning, and investment monitoring.",
      "Implemented a dynamic dashboard with Net worth calculation, financial insights, and secure user authentication.",
      "Designed scalable REST APIs using Express and Prisma ORM with PostgreSQL for efficient data handling.",
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
      "Implemented a plant health analysis module using RGB-to-HSV color analysis to estimate visible dryness, overwatering, and poor lighting conditions from flower images using Pillow and NumPy.",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/22mis0246/Flower-CNN-Classifier",
  },
  {
    name: "Medical Device Predictive Monitoring System",
    subtitle: "Real-time anomaly detection & alerts",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "scikit-learn",
      "Streamlit",
      "Plotly",
    ],
    highlights: [
      "Developed a real-time predictive maintenance system using Isolation Forest anomaly detection to monitor medical device sensor data and trigger automated critical alerts.",
      "Implemented role-based JWT authentication (Admin/Technician) with a live monitoring dashboard and device data simulator for end-to-end system validation.",
    ],
    liveUrl: null,
    repoUrl: "https://github.com/22mis0246/medical-device-predictive-maintenance",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "SQL", "Python", "C / C++", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React", "HTML", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Model Training & Optimization",
      "Supervised Learning",
      "Deep Learning",
    ],
  },
  {
    title: "Methodologies & Tools",
    items: [
      "SDLC",
      "Agile (Scrum)",
      "Version Control",
      "GitHub",
      "Microsoft Excel",
      "Cross-functional Collaboration",
    ],
  },
  {
    title: "Authentication & Security",
    items: ["JWT Authentication", "Password Hashing (bcrypt)"],
  },
  {
    title: "Core CS Concepts",
    items: [
      "Data Structures",
      "OOP",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

export const certifications = [
  {
    name: "Full Stack Development",
    issuer: "Udemy",
    certificateUrl: null as string | null,
  },
];

export const interests = {
  technical: [
    "Generative AI",
    "Cloud Technologies ",
    "Blockchain Technology",
  ],
  nonTechnical: [
    "Videography",
    "Editing",
    "Event Coordination",
    "Stock Market Analysis",
  ],
};
