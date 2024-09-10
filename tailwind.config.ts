import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#ed3849',
        'primary-dark': "#d23141",
        'primary-light': '#f4e5ec',
        'text-dark': '#0f172a',
        'text-light': '#64748b',
        'extra-light': '#f8fafc'
      },
      maxWidth: {
        'screen-2xl': '1400px', 
        'custom-1200': '1200px', 
        'custom-900': '900px', 
      },
    },
  },
  plugins: [],
};
export default config;
