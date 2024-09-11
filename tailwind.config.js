/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        redHatDisplay: ["Red Hat Display", "sans-serif"], // 300-900
        delaGothicOne: ["Dela Gothic One", "cursive"], // 400
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade", "dark"],
  },
};
