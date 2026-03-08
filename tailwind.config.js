/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        aletheia: {
          bg: '#0a0a0b',
          sidebar: '#0d0d0e',
          sidebarHover: '#18181b',
          border: '#27272a',
          surface: '#fafafa',
          surfaceAlt: '#f4f4f5',
          card: '#ffffff',
          muted: '#71717a',
          mutedLight: '#a1a1aa',
          accent: '#c9a962',
          accentHover: '#b8954a',
          accentGlow: 'rgba(201, 169, 98, 0.15)',
          danger: '#dc2626',
          dangerSoft: '#fef2f2',
        },
        classic: {
          turquoise: '#33D4D6',
          turquoiseDark: '#22b8ba',
          coral: '#E74C3C',
          coralSoft: '#fef2f2',
          plum: '#4A148C',
          plumSoft: '#f3e8ff',
          peach: '#FFAD6B',
          white: '#FFFFFF',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glass': '0 4px 24px -1px rgb(0 0 0 / 0.06), 0 2px 8px -2px rgb(0 0 0 / 0.04)',
        'card': '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'card-hover': '0 12px 40px -8px rgb(0 0 0 / 0.12), 0 4px 16px -4px rgb(0 0 0 / 0.06)',
        'glow': '0 0 40px -8px rgba(201, 169, 98, 0.25)',
      },
      borderRadius: {
        'aletheia': '12px',
        'aletheia-lg': '16px',
      },
    },
  },
  plugins: [],
}
