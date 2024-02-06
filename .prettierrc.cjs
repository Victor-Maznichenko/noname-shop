/** @type {import('prettier').Config} */

module.exports = {
	plugins: ["prettier-plugin-tailwindcss"],
	quoteProps: "as-needed",
	bracketSameLine: false,
	jsxSingleQuote: false,
	bracketSpacing: true,
	singleQuote: false,
	endOfLine: "lf",
	useTabs: false,
	semi: true,
	arrowParens: "always",
	printWidth: 100,
	trailingComma: "none",
	tabWidth: 3,
	tailwindConfig: "./tailwind.config.js",
	tailwindAttributes: ["className"],
	importOrder: ["^components/(.*)$", "^[./]"],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
};
