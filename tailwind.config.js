/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        "fade-in": {
					"0%": {
						opacity: "0%",
          },
					"100%": {
						opacity: "100%",
					},
        	"fade-left": {
            "0%": {
              transform: "translateX(100%)",
              opacity: "0%",
            },
  
            "30%": {
              transform: "translateX(0%)",
              opacity: "100%",
            },
            "100%": {
              opacity: "0%",
            },
          },
				}
      },  animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fade-in 3s ease-in-out forwards',
        fadeL: "fade-left 10s ease-in-out forwards",
      }
    },
  },
  
  plugins: [],
}
