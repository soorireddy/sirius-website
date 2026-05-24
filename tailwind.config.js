/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Premium ink palette - sophisticated black, not pure
        ink: {
          DEFAULT: '#0a0a0b',
          900: '#0a0a0b',
          800: '#15161a',
          700: '#1f2126',
          600: '#2a2d34',
        },
        // Refined grayscale
        paper: '#ffffff',
        cream: '#fafaf9',
        mist: '#f5f5f4',
        line: '#e7e5e4',
        muted: {
          DEFAULT: '#57534e',
          soft: '#78716c',
          light: '#a8a29e',
        },
        // Brand colors - sophisticated, not basic
        teal: {
          DEFAULT: '#0d9488',
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        amber: {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        coral: {
          DEFAULT: '#f97316',
          50: '#fff7ed',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        violet: {
          DEFAULT: '#7c3aed',
          50: '#f5f3ff',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        emerald: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Display sizes for hero/section headlines
        'display-2xl': ['clamp(64px, 8vw, 112px)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-xl': ['clamp(48px, 6vw, 84px)', { lineHeight: '0.98', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-lg': ['clamp(40px, 5vw, 64px)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-md': ['clamp(32px, 4vw, 48px)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      boxShadow: {
        'glow-teal': '0 0 0 1px rgba(13, 148, 136, 0.18), 0 20px 60px -20px rgba(13, 148, 136, 0.55)',
        'glow-violet': '0 0 0 1px rgba(124, 58, 237, 0.18), 0 20px 60px -20px rgba(124, 58, 237, 0.55)',
        'inset-line': 'inset 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'inset-line-dark': 'inset 0 0 0 1px rgba(10, 10, 11, 0.06)',
        card: '0 1px 2px rgba(10, 10, 11, 0.04), 0 8px 24px -8px rgba(10, 10, 11, 0.08)',
        'card-hover': '0 1px 2px rgba(10, 10, 11, 0.04), 0 20px 40px -12px rgba(10, 10, 11, 0.18)',
        elevated: '0 24px 80px -20px rgba(10, 10, 11, 0.25), 0 8px 24px -8px rgba(10, 10, 11, 0.10)',
      },
      backgroundImage: {
        'mesh-dark': 'radial-gradient(at 18% 22%, rgba(13, 148, 136, 0.22) 0px, transparent 38%), radial-gradient(at 82% 14%, rgba(249, 115, 22, 0.18) 0px, transparent 36%), radial-gradient(at 50% 90%, rgba(124, 58, 237, 0.20) 0px, transparent 42%)',
        'mesh-light': 'radial-gradient(at 12% 18%, rgba(13, 148, 136, 0.08) 0px, transparent 38%), radial-gradient(at 88% 12%, rgba(249, 115, 22, 0.06) 0px, transparent 36%)',
        'grid-dark': 'linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(rgba(10, 10, 11, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 10, 11, 0.04) 1px, transparent 1px)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 7s ease-in-out infinite',
        'dash': 'dash 5s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(13, 148, 136, 0.55)' },
          '70%': { opacity: '0.85', boxShadow: '0 0 0 12px rgba(13, 148, 136, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dash: { to: { strokeDashoffset: '-120' } },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
