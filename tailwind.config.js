/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
const { addIconSelectors } = require('@iconify/tailwind');
import plugin from "tailwindcss/plugin";


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FFFCF5",
          2: "#FFD285",
        },
      },
      fontFamily: {
        epilogue: "var(--font-epilogue)",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  plugins: [
    addIconSelectors(['mdi', 'mdi-light']),
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-zinc-800 text-4xl":
            {},
        },
        ".h2": {
          "@apply text-zinc-800 text-xl font-medium leading-relaxed":
            {},
        },
        ".h3": {
          "@apply text-zinc-800 text-2xl font-semibold leading-relaxed tracking-[.15em]":
            {},
        },
        ".h4": {
          "@apply text-zinc-800 text-xl font-semibold leading-relaxed tracking-[.15em]":
            {},
        },
        ".body-1": {
          "@apply text-zinc-800 font-normal":
            {},
        },
        ".body-2": {
          "@apply text-zinc-800 text-base font-normal leading-relaxed": {},
        },
        ".nav-txt": {
          "@apply text-zinc-800 text-xl font-normal leading-7": {},
        },
        ".ftr-txt": {
          "@apply text-zinc-800 text-3xl font-semibold": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

