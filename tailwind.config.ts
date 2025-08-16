import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#253648",
        gallery: "#F7F7F8",
        cta: "#0F81A3",
        "cta-hover": "#66AEC5",
        "pill-green-text": "#15693B",
        "pill-green-bg": "#DDF9EA",
        "pill-orange-text": "#764C25",
        "pill-orange-bg": "#FDEFE2",
        "pill-gray-bg": "#EEEFF1",
        "ink-muted": "#74808A",
      },
      boxShadow: {
        cs: "0 0.5rem 0.75rem rgba(0,0,0,0.16)",
      },
      borderRadius: {
        cs: "8px",
        "cs-sm": "4px",
      },
      fontSize: {
        "cs-20": "20px",
        "cs-16": "16px",
        "cs-14": "14px",
        "cs-12": "12px",
      },
      spacing: {
        "cs-24": "24px",
        "cs-16": "16px",
        "cs-10": "10px",
        "cs-8": "8px",
        "cs-4": "4px",
      },
      screens: {
        small:  "375px",
        medium: "768px",
        large:  "1024px",
        xlarge: "1280px",
        sm:  "375px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
      },
    },
  },
  plugins: [],
};
export default config;