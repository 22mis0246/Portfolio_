import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-ink-faint sm:flex-row sm:text-left sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <p className="font-mono text-xs">Vellore, India</p>
      </div>
    </footer>
  );
}
