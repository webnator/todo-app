/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#8B5CF6', // Replace with your exact purple color
        'custom-blue': '#3B82F6',   // Replace with your exact blue color
      },
    },
  },
  plugins: [],
}
