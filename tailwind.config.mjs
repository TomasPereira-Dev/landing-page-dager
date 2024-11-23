/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Jost, sans-serif',
			},
			colors: {
				'primary': "#9380FF",
				'secondary': "#B8B8FF",
				'text': "#09080C"
			},
			backgroundColor:{
				'bg1': "#F6F5FF",

			}
		},
	},
	plugins: [],
}
