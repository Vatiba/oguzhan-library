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
				'accentColor': '#BEBEBE',
				'primary': {
					'light': '#C8D7F1',
					'normal': '#ECF2FF',
					'dark': '#5D87FF'
				},
				'textColors': {
					'light': '#7C8FAC',
					'normal': '#5A6A85',
					'dark': '#2A3447'
				},
				'grey': {
					'light': '#DFE5EF',
					'normal': '#EAEFF4',
					'dark': '#F2F6FA'
				}
			},
		},
		fontFamily: {
			'display': ['Roboto', 'Lato', 'sans-serif'],
			'body': ['"Roboto"', '"Lato"', '"sans-serif"'],
		}
	},
	plugins: [],
}
