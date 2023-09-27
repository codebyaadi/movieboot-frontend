/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['Open Sans', 'sans'],
        'syne': ['Syne', 'sans'],
        'poppins': ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
}
