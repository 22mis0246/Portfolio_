"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { CodingBoy } from "@/components/CodingBoy"; {/* ← only new import */}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-90"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col justify-center px-4 pb-20 pt-12 sm:px-6 lg:pt-0">

        {/* ↓ only structural change: wrap in flex row so boy sits on right */}
        <div className="flex items-center gap-0 lg:gap-4">

          {/* ── everything below is YOUR original code, zero edits ── */}
          <div className="flex-1 min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
            >
              Software engineering · Full-stack · ML
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {profile.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="bg-gradient-to-r from-accent to-emerald-300/90 bg-clip-text text-transparent">
                {profile.name.split(" ").slice(-1)[0]}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl"
            >
              {profile.title}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-surface transition hover:bg-accent-dim"
              >
                Get in touch
                <ArrowDownRight
                  size={18}
                  className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#projects"
                className="rounded-full border border-surface-border px-6 py-3 text-sm font-medium text-ink-muted transition hover:border-accent/40 hover:text-accent"
              >
                View work
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-surface-border pt-10"
            >
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-ink-muted transition hover:text-accent"
                >
                  <Phone size={16} className="text-accent/80" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-ink-muted transition hover:text-accent"
                >
                  <Mail size={16} className="text-accent/80" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-muted transition hover:text-accent"
                >
                  <Linkedin size={16} className="text-accent/80" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-ink-muted transition hover:text-accent"
                >
                  <Github size={16} className="text-accent/80" />
                  GitHub
                </a>
              </li>
            </motion.ul>
          </div>

          {/* ↓ only new element — hidden on mobile, shows on lg+ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block flex-shrink-0 w-[480px]"
          >
            <CodingBoy />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
