/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#fad1db',
          300: '#f7aab9',
          400: '#f17a92',
          500: '#e63c5c',
          600: '#d1284a',
          700: '#b01d3c',
          800: '#931b37',
          900: '#7d1a33',
          950: '#4a0f1e',
        },
        gold: {
          300: '#ffd95a',
          400: '#ffd700',
          500: '#ffc107',
          600: '#f9a825',
        },
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
        }
      },
      backgroundImage: {
        'luxury-dark': 'linear-gradient(180deg, #0a0a0a 0%, #121212 50%, #0a0a0a 100%)',
        'wine-glow': 'radial-gradient(circle at center, rgba(125, 26, 51, 0.15) 0%, transparent 70%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.1) 50%, transparent 100%)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 0 60px rgba(125, 26, 51, 0.4), 0 0 100px rgba(0, 0, 0, 0.8)',
        'luxury-hover': '0 0 80px rgba(125, 26, 51, 0.6), 0 0 120px rgba(0, 0, 0, 0.9)',
        'gold': '0 0 40px rgba(255, 215, 0, 0.3)',
        'gold-strong': '0 0 60px rgba(255, 215, 0, 0.5)',
      },
      animation: {
        'glow': 'glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease-out',
        'fade-in-up': 'fadeInUp 1.4s ease-out',
        'fade-in-down': 'fadeInDown 1.4s ease-out',
        'scale-in': 'scaleIn 1.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-40px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.85)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
      }
    },
  },
  plugins: [],
}