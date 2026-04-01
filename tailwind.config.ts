import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#08090d",
          raised: "#0f1118",
          border: "#1a1d28",
        },
        accent: {
          DEFAULT: "#3ee8b5",
          dim: "#2bc49a",
          muted: "rgba(62, 232, 181, 0.12)",
        },
        ink: {
          DEFAULT: "#e8eaef",
          muted: "#8b92a5",
          faint: "#5c6378",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(62,232,181,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(62,232,181,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(62, 232, 181, 0.15), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
