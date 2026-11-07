/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pirate-red': '#C41E3A',
        'pirate-red-dark': '#9A1830',
        'ocean-blue': '#0B3D91',
        'ocean-blue-light': '#1565C0',
        'deep-sea': '#0A1628',
        'deep-sea-light': '#0F2240',
        'treasure-gold': '#FFD700',
        'treasure-gold-dark': '#DAA520',
        'parchment': '#F5E6C8',
        'parchment-dark': '#E8D5A8',
        'sky-blue': '#87CEEB',
        'marine-teal': '#20B2AA',
      },
      fontFamily: {
        'pirata': ['"Pirata One"', 'cursive'],
        'manga': ['"Bangers"', 'cursive'],
        'dela': ['"Dela Gothic One"', 'cursive'],
        'cinzel': ['"Cinzel"', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wave': 'wave 8s ease-in-out infinite',
        'wave-slow': 'wave 12s ease-in-out infinite',
        'wave-slower': 'wave 16s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slam': 'slam 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'odometer': 'odometer 2s ease-out forwards',
        'sail': 'sail 4s ease-in-out infinite',
        'ring': 'ring 1.5s ease-in-out',
        'quill-write': 'quillWrite 0.05s steps(1) forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-25px) translateY(5px)' },
          '50%': { transform: 'translateX(0) translateY(-5px)' },
          '75%': { transform: 'translateX(25px) translateY(5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4)' },
        },
        slam: {
          '0%': { transform: 'translateY(-100vh) rotate(-5deg)', opacity: '0' },
          '60%': { transform: 'translateY(10px) rotate(1deg)', opacity: '1' },
          '80%': { transform: 'translateY(-5px) rotate(-0.5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        odometer: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        sail: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0)' },
          '50%': { transform: 'rotate(3deg) translateY(-10px)' },
        },
        ring: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(15deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '40%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '60%': { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #0A1628 0%, #0B3D91 50%, #1565C0 100%)',
        'parchment-gradient': 'linear-gradient(135deg, #F5E6C8 0%, #E8D5A8 50%, #D4C098 100%)',
      },
    },
  },
  plugins: [],
}
