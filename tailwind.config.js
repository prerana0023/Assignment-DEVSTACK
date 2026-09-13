/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0F1115',
        surface: '#FFFFFF',
        muted: '#6B7280',
        line: '#E7E7EA',
        // Single source of truth for the three brand stops.
        // Change these three values to re-theme the entire app.
        brand: {
          from: '#F97316', // orange
          via: '#EC4899', // pink
          to: '#8B5CF6', // violet
        },
      },
      backgroundImage: {
        // Every gradient usage in the app pulls from this one token.
        'brand-gradient': 'linear-gradient(90deg, #F97316 0%, #EC4899 55%, #8B5CF6 100%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 17, 21, 0.04), 0 8px 24px -12px rgba(15, 17, 21, 0.12)',
      },
    },
  },
  plugins: [],
}
