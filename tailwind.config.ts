import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0a0c10",
          800: "#101319",
          700: "#161a22",
          600: "#1e232d",
          500: "#2a303c",
        },
        chrome: {
          50: "#f4f6fa",
          100: "#e5e9f0",
          200: "#c9d0dc",
          300: "#a4adbf",
          400: "#7c8598",
          500: "#5b6377",
        },
        accent: {
          DEFAULT: "#7dd3fc",
          bio: "#4ade80",
          code: "#818cf8",
          cao: "#facc15",
          fab: "#fb923c",
          data: "#f472b6",
          embed: "#22d3ee",
          soft: "#c084fc",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(125,211,252,0.15), transparent 60%)",
        chrome:
          "linear-gradient(135deg, #f4f6fa 0%, #a4adbf 25%, #f4f6fa 50%, #5b6377 75%, #c9d0dc 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(125,211,252,0.25)",
        brick:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
