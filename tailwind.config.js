const with_MT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = with_MT({
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Oswald, sans-serif',
        subtitle: 'Roboto, serif',
        text: 'Parkinsans, sans-serif'
      },
    },
  },
  darkMode: "class",
  plugins: [],
})