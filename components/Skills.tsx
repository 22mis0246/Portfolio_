"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-surface-border py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Toolbox" title="Technical skills" />
        <div className="mt-12 columns-1 gap-6 space-y-6 md:columns-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="break-inside-avoid rounded-2xl border border-surface-border bg-surface-raised/30 p-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-surface-border bg-surface/60 px-3 py-1.5 text-sm text-ink-muted transition hover:border-accent/30 hover:text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}