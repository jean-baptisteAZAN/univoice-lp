/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        fontFamily: {
            adlam: ['ADLaM Display', 'sans-serif'],
            onest: ['Onest', 'sans-serif'],
        }
    }
  },
  plugins: []
};