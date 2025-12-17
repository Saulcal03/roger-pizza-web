/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'roger-red': '#e61d2b',
				'roger-yellow': '#facc15',
			},
		},
	},
	plugins: [],
}