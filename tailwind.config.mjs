import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        wall: "#f3efe6",
        frame: "#1a1a1a",
        mat: "#ffffff",
        ochre: "#b45309",
        slateink: "#2c2c2c",
        hush: "#6b6560",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Figtree", "Segoe UI", "sans-serif"],
      },
      aspectRatio: {
        frame: "4 / 5",
        wide: "16 / 10",
      },
    },
  },
  plugins: [typography],
};
