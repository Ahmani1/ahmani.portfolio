import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E182C",
        secondary: "#F3F9F6",
        accent: {
          DEFAULT: "#16C172",
          hover: "#16C172",
        } 
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
      fontFamily: {
        primary: ["var(--font-jetbrains-mono)", "monospace"],
      },
      container: {
        center: true,
        padding: "0",
        
        screens: {
          xl: '1200px',
        },


      },
    },
  },

  plugins: [],
} satisfies Config;
