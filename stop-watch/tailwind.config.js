/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
    colors: {
      'regal-blue': '#243c5a',
      'gradient-blue': '#6cD0FF',
      'gradient-green': '#1FC5A8',
      'gradient-lightblue': '#92E1E2',
      'dark-grey': '#2C3f50',
      'light-grey': '#BEC3C7',
      'white': '#EBf1F1'
    },
  }
  },
  plugins: [],
}
