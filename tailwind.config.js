/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        body: "linear-gradient(to bottom right, #eff6ff , #faf5ff)",
        head: "linear-gradient(to right, #2563eb , #9333ea)",
      },
    },
  },
  plugins: [],
};
