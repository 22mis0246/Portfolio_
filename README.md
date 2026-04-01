# Portfolio_
My Portfolio that showcase my skills and achievements as a pre final year student.

Portfolio — tech stack overview
Core framework

Next.js (App Router) — React framework with file-based routing, static generation for the home page, and built-in optimizations (code splitting, image/font handling).
React 19 — UI built from components (Header, Hero, sections, etc.).
TypeScript — Typed components and shared data in lib/data.ts for safer refactors and fewer runtime mistakes.
Styling

Tailwind CSS — Utility-first styling with a custom theme in tailwind.config.ts (colors like surface, accent, typography tokens).
PostCSS + Autoprefixer — Processes CSS for broad browser support.
Global styles — app/globals.css for base layers and small utilities.
Typography

next/font (Google Fonts) — IBM Plex Sans (body), Syne (display/headings), JetBrains Mono (mono accents), loaded with display: swap for performance.
UI & motion

Framer Motion — Scroll/viewport animations on sections and cards.
Lucide React — Consistent icon set (mail, phone, social, section icons).
Code quality

ESLint with eslint-config-next — Next/React/TypeScript lint rules.
Architecture

App Router — app/layout.tsx (shell, metadata, fonts), app/page.tsx (composition of sections).
Client components ("use client") where interactivity and Framer Motion are needed; server-first layout for SEO and metadata.
Deployment

Vercel — Natural fit for Next.js (Git push → build → edge/CDN). Build output is a standard Next production build (npm run build / npm run start locally).
Content

Resume copy is centralized in lib/data.ts so you can update text without touching layout code.
One-line pitch:
A Next.js 15 + React 19 + TypeScript portfolio, styled with Tailwind, animated with Framer Motion, optimized for Vercel and fast static delivery.


