// tailwind.config.js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  maxWidth: {
    screen: "100vw",
    screenSm: "640px",
    screenMd: "768px",
    screenLg: "1024px",
    screenXl: "1280px",
    screen2xl: "1536px",
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: false, // <✅ Pas de // commentaire ici !
  },
};
