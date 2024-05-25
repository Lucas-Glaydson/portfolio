/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(319deg, rgba(0,69,73,1) 32%, rgba(0,75,0,1) 100%, rgba(18,255,0,1) 100%)',
      },
    },
  },
  plugins: [],
}