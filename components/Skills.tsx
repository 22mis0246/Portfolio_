"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { id: "lang",     label: "Languages"  },
  { id: "frontend", label: "Frontend"   },
  { id: "backend",  label: "Backend"    },
  { id: "ai",       label: "AI & ML"    },
  { id: "tools",    label: "Tools"      },
  { id: "cs",       label: "Core CS"    },
];

const skills: Record<string, { name: string; logo: string }[]> = {
  lang: [
    { name: "Python",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Java",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "SQL",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "C / C++",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  ],
  frontend: [
    { name: "React",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "HTML",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  ],
  backend: [
    { name: "Node.js",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "FastAPI",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "REST APIs",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  ],
  ai: [
    { name: "TensorFlow",  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "scikit-learn",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "NumPy",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "OpenCV",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Python",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  tools: [
    { name: "Git",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
    { name: "Linux",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ],
  cs: [
    { name: "Algorithms", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OOP",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "DBMS",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Networks",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "OS",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  ],
};

function SkillCard({ name, logo, index }: { name: string; logo: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group flex flex-col items-center gap-3"
    >
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-border bg-surface transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2 group-hover:-rotate-2 group-hover:border-ink/20"
        style={{
          boxShadow: `0 1px 0 0 var(--tw-border, #ffffff10),
                      0 2px 0 0 #0d0d0d,
                      0 3px 0 0 var(--tw-border, #ffffff10),
                      0 4px 0 0 #0d0d0d,
                      0 5px 0 0 var(--tw-border, #ffffff10)`,
        }}
      >
        <img src={logo} alt={name} className="h-8 w-8 object-contain" />
      </div>
      <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-ink-muted transition group-hover:text-ink">
        {name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  const [active, setActive] = useState("lang");

  return (
    <section id="skills" className="scroll-mt-24 border-t border-surface-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Toolbox" title="Tech Arsenal" />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition ${
                active === cat.id
                  ? "border-ink bg-ink text-surface"
                  : "border-surface-border text-ink-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stage */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-surface-border bg-surface-raised/30 p-8">
          {/* Grid bg */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
                                linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative z-10 flex flex-wrap gap-6"
            >
              {skills[active].map((s, i) => (
                <SkillCard key={s.name} name={s.name} logo={s.logo} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}