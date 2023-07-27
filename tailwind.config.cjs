/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			body: ["Söhne"],
			display: ["SöhneBreit"],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: "#ffe233",
			secondary: "#f7f5e9",
			black: "#0f0d03",
		},
		extend: {},
	},
	plugins: [],
};
