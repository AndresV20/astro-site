/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
