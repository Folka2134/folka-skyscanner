import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      screens: {
        "2xl": "1400px",
        "3xl": "1600px"
      },
    },
    
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config