module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2B5A87", // blue-800
          50: "#EBF2F8", // blue-50
          100: "#D6E4F0", // blue-100
          200: "#ADC9E1", // blue-200
          300: "#84AED2", // blue-300
          400: "#5B93C3", // blue-400
          500: "#3278B4", // blue-500
          600: "#2B5A87", // blue-600
          700: "#244B73", // blue-700
          800: "#1D3C5F", // blue-800
          900: "#162D4B", // blue-900
        },
        secondary: {
          DEFAULT: "#4A90E2", // blue-500
          50: "#EDF5FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#4A90E2", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        accent: {
          DEFAULT: "#27AE60", // green-600
          50: "#ECFDF5", // green-50
          100: "#D1FAE5", // green-100
          200: "#A7F3D0", // green-200
          300: "#6EE7B7", // green-300
          400: "#34D399", // green-400
          500: "#10B981", // green-500
          600: "#27AE60", // green-600
          700: "#047857", // green-700
          800: "#065F46", // green-800
          900: "#064E3B", // green-900
        },
        background: "#FAFBFC", // gray-50
        surface: "#F8F9FA", // gray-100
        text: {
          primary: "#2C3E50", // slate-700
          secondary: "#6C757D", // gray-600
        },
        success: "#28A745", // green-600
        warning: "#FFC107", // yellow-400
        error: "#DC3545", // red-600
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          accent: "#27AE60", // green-600
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(43, 90, 135, 0.08)',
        'gentle': '0 1px 3px rgba(43, 90, 135, 0.05)',
        'medium': '0 4px 12px rgba(43, 90, 135, 0.10)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'gentle-bounce': 'gentleBounce 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}