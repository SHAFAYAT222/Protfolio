/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        script: ['"Caveat"', 'cursive'],
      },
      colors: {
        demo: {
          blue: '#2563eb',
          navy: '#1e3a8a',
          dark: '#1e293b',
          light: '#f8f9fa',
          card: '#ffffff',
          border: '#e2e8f0',
          text: '#334155',
        }
      }
    },
  },
  plugins: [],
}
