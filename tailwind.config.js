/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Red Glass", "serif"]
      },
      colors: {
        'primary': '#83DAFA',
        'secondary': '#F2BEFF',
        'neutral-light': '#E1E1E1',
        'neutral-card-light': '#B4B2B2',
        'neutral-card-dark': '#282828',
        'neutral-dark': '#1C1C1C',
      }
    },
  },
  plugins: [],
}
