/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'targetBlue': '#28354e',
        'targetGreen': '#239058',
        'targetGreenDark': '#165a37',
        'targetYellow': '#ffad00',
      }
    },
  },
  plugins: [],
}
