"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-surface-border py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="mt-12 space-y-6">
          {education.map((item, i) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-raised/40 p-6 transition hover:border-accent/25 md:p-8"
            >
              {item.logo && (
                <img
                  src={item.logo}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute top-0 select-none"
     style={{
  left: item.logoLeft ?? "32%",
  width: item.logoWidth ?? "72%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center",
  opacity: 1,
  filter: item.logoTint ?? "none",
  mixBlendMode: "luminosity" as React.CSSProperties["mixBlendMode"],
}}
                />
              )}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-ink-muted">{item.school}</p>
                    <p className="mt-3 font-mono text-sm text-accent">
                      {item.detail}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-surface-border px-4 py-1.5 text-sm text-ink-faint md:text-right">
                  {item.period}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}