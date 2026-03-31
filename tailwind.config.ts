import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0D9488",
          accent: "#FF6B35",
          ai: "#FFB347",
          dark: "#1A1A2E",
          light: "#F0FDFA",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        "card-lg": "16px",
      },
    },
  },
  plugins: [],
};
export default config;
