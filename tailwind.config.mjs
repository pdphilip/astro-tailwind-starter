/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: colors.white,
				base: colors.slate,
				primary: {
					'50': '#eefdfd',
					'100': '#d4f8f9',
					'200': '#afeef2',
					'300': '#77e1e9',
					'400': '#47ceda',
					'500': '#1daebd',
					'600': '#1b8c9f',
					'700': '#1d7181',
					'800': '#205c6a',
					'900': '#1f4d5a',
					'950': '#0f323d',
					'base': '#47ceda'
				},
				secondary: {
					'50': '#fcf3f8',
					'100': '#fae9f2',
					'200': '#f7d3e5',
					'300': '#f1b0d0',
					'400': '#e77fb0',
					'500': '#dc5c95',
					'600': '#c93972',
					'700': '#ad295a',
					'800': '#8f254b',
					'900': '#782341',
					'950': '#490e23',
					'base': '#dc5c95'
				},
				success: colors.emerald,
				info: colors.indigo,
				warning: colors.amber,
				danger: colors.rose,
			}
		},
	},
	plugins: [
		forms,
		aspectRatio,
	],
}
