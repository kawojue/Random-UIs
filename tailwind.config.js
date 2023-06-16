/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-0': 'rgb(241, 245, 248)',
        'clr-1': 'rgb(16, 42, 66)',
        'clr-2': 'rgb(197, 157, 95)',
        'clr-3': 'rgb(97, 125, 152)'
      },
    },
  },
  plugins: [],
}
