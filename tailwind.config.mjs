/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F22',
        midnight: '#141C38',
        mist: '#F4F6FC',
        line: '#E5E8F2',
        accent: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
        display: ['"Sora Variable"', '"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 15, 34, 0.04), 0 10px 30px rgba(10, 15, 34, 0.07)',
        glow: '0 24px 70px -20px rgba(79, 70, 229, 0.45)',
      },
      backgroundImage: {
        spectrum:
          'linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4, #10B981, #F59E0B, #F97316)',
        'spectrum-diag':
          'linear-gradient(120deg, #6D28D9, #4F46E5, #2563EB, #0891B2)',
      },
    },
  },
  plugins: [],
};
