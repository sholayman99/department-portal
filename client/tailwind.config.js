/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0047AB",
          "secondary": "#002244",
          "accent": "#4c1d95",
          "neutral": "#000000",
          "base-100": "#ffffff",
          "info": "#86198f",
          "success": "#22c55e",
          "warning": "#ff9100",
          "error": "#ef4444"
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}