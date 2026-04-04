"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderKanban } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-surface-border py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Selected work" title="Projects" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-surface-border bg-gradient-to-b from-surface-raised/80 to-surface/40 p-6 transition hover:border-accent/30"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                  <FolderKanban size={20} />
                </div>
                <div className="flex gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-surface-border px-3 py-1 text-xs font-medium text-accent transition hover:bg-accent-muted"
                    >
                      Live
                      <ExternalLink size={12} />
                    </a>
                  ) : null}
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-ink-faint">{project.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface border border-surface-border px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-ink-muted">
                {project.highlights.map((line) => (
                  <li key={line.slice(0, 40)} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-surface-border py-2.5 text-xs font-medium text-ink-muted transition hover:border-accent/50 hover:text-accent hover:bg-accent-muted"
                >
                  <ExternalLink size={13} />
                  View Repository
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
