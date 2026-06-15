/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A1A3C',
        midnight: '#0D2552',
        mist: '#F2F6FF',
        line: '#E2E8F5',
        accent: {
          DEFAULT: '#1E80FF',
          dark: '#1366D6',
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
        card: '0 1px 2px rgba(10, 26, 60, 0.04), 0 10px 30px rgba(10, 26, 60, 0.08)',
        glow: '0 24px 70px -20px rgba(30, 128, 255, 0.45)',
      },
      backgroundImage: {
        spectrum:
          'linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4, #10B981, #F59E0B, #F97316)',
        'spectrum-diag':
          'linear-gradient(120deg, #1366D6, #1E80FF, #2563EB, #0891B2)',
      },
    },
  },
  plugins: [],
};
