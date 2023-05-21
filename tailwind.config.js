const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			primary: '#BF3335',
			gray: {
				DEFAULT: '#2f2f2f',
				500: '#424242'
			},
			black: '#030207',
			white: colors.white,
			transparent: colors.transparent,
			red: colors.red['500']
		},
		extend: {
			zIndex: {
				1: '1'
			}
		}
	},
	plugins: []
}
