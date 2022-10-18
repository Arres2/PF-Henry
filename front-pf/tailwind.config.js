/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '127': '31rem',
        '128': '32rem',
      },
      fontFamily: {
        "josefin": "'Josefin Sans', sans-serif"
      },
      colors: {
        "1-color": "var(--oxford-blue)",
        "2-color": "var(--space-cadet)",
        "3-color": "var(--y-in-mn-blue)",
        "4-color": "var(--maximum-blue-green)",
        "5-color": "var(--turquoise-blue)"
      },
      backgroundImage: (theme) => ({
        'page-destinations': "url('/img/pageD.jpg')",
        'rock-lake': "url('/img/bgM.jpg')"
      }),
    },
  },
  plugins: [],
}