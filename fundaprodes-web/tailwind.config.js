/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          navy: '#0F172A',
          gold: '#C5A059',
          goldlight: '#E5C585',
          slate: '#334155',
          light: '#F8FAFC',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C5A059 0%, #E5C585 100%)',
        'navy-gradient': 'linear-gradient(135deg, #0F172A 0%, #1e293b 100%)',
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      }
    },
  },
  plugins: [],
}