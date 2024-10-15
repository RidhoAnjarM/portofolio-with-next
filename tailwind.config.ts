import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maroon: '#800000',
        dark: '#020403',
        green: '#6E8880',
        primary: '#F3F1EF',
        secondary: '#2F4D4B'
      },
    },
  },
  plugins: [],
};
export default config;
