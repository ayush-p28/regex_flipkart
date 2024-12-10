/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: '#61f4d3',
        silvertxt: '#CCD6F6',
        silvertxt2: '#8892B0',
        bgcard: 'rgb(3,7,18)',
        bgavatar: '#0f172a',
        dgray:'#030712',
      },
      backgroundImage: {
        'banner': "url('/images/banner.png')", // Define your custom image path here
      },
    },
  },
  plugins: [],
}


