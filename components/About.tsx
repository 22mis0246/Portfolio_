"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-surface-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Profile" title="Professional summary" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-surface-border bg-surface-raised/50 p-8 md:p-10"
        >
          <p className="max-w-3xl text-lg leading-relaxed text-ink-muted text-balance">
            {profile.summary}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
