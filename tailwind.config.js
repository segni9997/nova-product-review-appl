/** @type {import('tailwindcss').Config} */
export default {
  content: [
   
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@mantine/core/**/*.js",

  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ED930C',
        'secondary': '#0F2051',
        'teritary': '#9197B3',
      },backgroundImage: {
        'hero-image': "url('./assets/images/herobackground.jpg')",
        'ethiostudent': "url('/assets/images/ethiostudent.jpg')",
        'signin':"url('/assets/images/ethio1.jpg')",
      }
    },
  },
  plugins: [
    // require('@tailwindcss/scrollbar'),
  ],
}

