/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'mainBgColor': '#F5F5F5',
				'primaryColor': '#2D4059',
				'secondaryColor': '#FF7700',
				'textColor': '#3F3F3F',
				'accentColor': '#BEBEBE'
			},
		},
		fontFamily: {
			'display': ['Roboto', 'Lato', 'sans-serif'],
			'body': ['"Roboto"', '"Lato"', '"sans-serif"'],
		}
	},
	plugins: [],
}
