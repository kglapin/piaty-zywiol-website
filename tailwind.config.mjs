/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EC',
        sand: '#E9DDD0',
        cocoa: '#2A211B',
        clay: '#B96F55',
        blush: '#D8A89C',
        sage: '#A4A986',
        gold: '#C9A56A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 28px 80px rgba(42, 33, 27, .13)',
        innerSoft: 'inset 0 1px 0 rgba(255,255,255,.55)',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        rotateBadge: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        rotateBadge: 'rotateBadge 24s linear infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
