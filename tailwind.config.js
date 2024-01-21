/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        'pattern-1': "url('/images/pattern/pattern-1.svg')",
        'pattern-2': "url('/images/pattern/pattern-2.svg')",
      },
      fontFamily:{
        'vazir':'vazir'
      },
   
    },
  },
  plugins: [],
}
