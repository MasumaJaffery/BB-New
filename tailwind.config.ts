import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0c1c33", // main background / navbar
          700: "#1c3a5e", // solid button
          600: "#25517f", // solid button hover
        },
        gold: {
          400: "#c9a876", // "Together." + stat icons
        },
        cream: {
          200: "#efe6d2", // outlined "Start a Project" button
        },
      },
    },
  },
  plugins: [],
};

export default config;
