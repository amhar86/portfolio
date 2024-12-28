/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
		
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
		keyframes: {
			"accordion-down": {
				from: { height: 0 },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: 0 },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
  		colors: {
			primary: '#000000',
			accent: {
				DEFAULT: '#ff0000',
				hover: '#cc0000',
			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
