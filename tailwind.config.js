/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#09090D',
          850: '#0F0F15',
          800: '#14141E',
          700: '#1D1D2B',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D5',
          200: '#EEDDAA',
          300: '#E5C97E',
          400: '#DFBA5B',
          500: '#D4AF37', // Classic French Jewelry Gold
          600: '#BD9628',
          700: '#99731C',
          800: '#755416',
          900: '#4D360E',
        },
        champagne: {
          light: '#F8F5EE',
          DEFAULT: '#EBDCB9',
          dark: '#D1BD90',
        },
        rosegold: {
          light: '#F5DDD6',
          DEFAULT: '#E8B4A6',
          dark: '#B87A6C',
        },
        platinum: {
          light: '#F1F5F9',
          DEFAULT: '#E2E8F0',
          dark: '#94A3B8',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Montserrat', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.35em',
        'subtle-wide': '0.2em',
      },
      animation: {
        'light-sweep': 'sweep 4.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'translateX(-150%) skewX(-25deg)' },
          '40%, 100%': { transform: 'translateX(250%) skewX(-25deg)' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '24px',
        '3xl': '36px',
      }
    },
  },
  plugins: [],
}
