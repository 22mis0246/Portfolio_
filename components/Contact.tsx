"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-surface-border py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Let's talk" title="Contact" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-3xl border border-surface-border bg-gradient-to-br from-accent-muted/50 via-surface-raised/80 to-surface p-8 md:p-12"
        >
          <p className="max-w-xl text-lg text-ink-muted">
            Open to internships, collaborations, and teams that care about
            solid engineering and continuous learning. Prefer email or
            LinkedIn for first contact.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 text-ink transition hover:text-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface/80 group-hover:border-accent/40">
                <Mail size={18} />
              </span>
              <span className="text-sm sm:text-base">{profile.email}</span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-3 text-ink transition hover:text-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface/80 group-hover:border-accent/40">
                <Phone size={18} />
              </span>
              <span className="text-sm sm:text-base">{profile.phone}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-ink transition hover:text-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface/80 group-hover:border-accent/40">
                <Linkedin size={18} />
              </span>
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-ink transition hover:text-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-surface/80 group-hover:border-accent/40">
                <Github size={18} />
              </span>
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
