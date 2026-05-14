"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  function handleMobileNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  e.preventDefault();
  setOpen(false);
  const id = href.startsWith("#") ? href.slice(1) : href;
  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", href);
  }, 300); // matches Framer Motion exit duration
}

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] isolate border-b border-surface-border/80 bg-surface md:bg-surface/80 backdrop-blur-none md:backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-ink transition hover:text-accent"
        >
          NR<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-muted transition hover:bg-accent-muted hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-surface-border bg-surface backdrop-blur-none md:bg-surface/95 md:backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col px-4 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-ink-muted transition hover:bg-accent-muted hover:text-accent"
                  onClick={(e) => handleMobileNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
