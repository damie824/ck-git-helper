import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      keyframes: {
        "typewriter-cursor": {
          "0%": {
            opacity: "0%",
          },
          "50%": {
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
      },
      animation: {
        "typewriter-cursor": "typewriter-cursor 1000ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
