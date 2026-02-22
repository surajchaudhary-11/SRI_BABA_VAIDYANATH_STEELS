import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blackx: "#080808",
        gray900x: "#0f0f0f",
        gray800x: "#1a1a1a",
        whitex: "#f8f8f8"
      }
    }
  },
  plugins: []
};

export default config;

