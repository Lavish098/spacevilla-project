/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero/hero.jpg')", // Relative to your public directory
        "hero-pattern2": "url('/src/assets/hero/hero2.jpg')", // Relative to your public directory
        "hero-pattern3": "url('/src/assets/hero/hero3.jpg')", // Relative to your public directory
        lekki: "url('/src/assets/lekki.png')", // Relative to your public directory
        aja: "url('/src/assets/aja.png')", // Relative to your public directory
        ikeja: "url('/src/assets/ikeja.png')", // Relative to your public directory
        vi: "url('/src/assets/vi.png')", // Relative to your public directory
        feather: "url('/src/assets/feather.jpg')", // Relative to your public directory
      },
    },
  },
  plugins: [],
};
