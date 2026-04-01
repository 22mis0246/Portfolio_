"use client";

import { motion } from "framer-motion";
import { Clapperboard, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { interests } from "@/lib/data";

export function Interests() {
  return (
    <section className="border-t border-surface-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Beyond code" title="Interests" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-surface-border bg-surface-raised/40 p-8"
          >
            <div className="flex items-center gap-3 text-accent">
              <Cpu size={22} />
              <h3 className="font-display text-lg font-semibold text-ink">
                Technical
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {interests.technical.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-ink-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-2xl border border-surface-border bg-surface-raised/40 p-8"
          >
            <div className="flex items-center gap-3 text-accent">
              <Clapperboard size={22} />
              <h3 className="font-display text-lg font-semibold text-ink">
                Non-technical
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {interests.nonTechnical.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-ink-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
