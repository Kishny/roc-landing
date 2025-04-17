// tailwind.config.js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: false, // <✅ Pas de // commentaire ici !
  },
};
