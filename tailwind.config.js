/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sora"', 'sans-serif'],
        body: ['"Karla"', 'sans-serif'],
        mono: ['"Jetbrains Mono", mono']
      }
    }
  },
  plugins: []
}
