/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./src/assets/images/banner.png')",
      },
      fontFamily: {
       inter: [ "Inter", "sans-serif"]
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}