"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-surface-border py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="mt-10 space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-4 rounded-2xl border border-surface-border bg-surface-raised/40 p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {cert.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-muted">{cert.issuer}</p>
                </div>
              </div>
              {cert.certificateUrl ? (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent-muted px-5 py-2.5 text-sm font-medium text-accent transition hover:bg-accent/20"
                >
                  View certificate
                  <ExternalLink size={14} />
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
