/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0F172A',      // Slate 900 - Premium minimal dark background
          card: '#1E293B',    // Slate 800 - Crisp container differentiation
          accent: '#38BDF8',  // Sky 400 - Professional Data/Insights Blue
          textMuted: '#94A3B8', // Slate 400 - High-readability secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Premium, highly-legible data font
      },
    },
  },
  plugins: [],
}