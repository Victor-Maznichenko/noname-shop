/** @type {import('prettier').Config} */

module.exports = {
   quoteProps: "as-needed",
   bracketSameLine: false,
   jsxSingleQuote: false,
   bracketSpacing: true,
   singleQuote: false,
   endOfLine: "lf",
   useTabs: false,
   semi: true,
   arrowParens: "always",
   printWidth: 110,
   trailingComma: "none",
   tabWidth: 3,
   tailwindConfig: "./tailwind.config.js",
   plugins: ["prettier-plugin-tailwindcss"]
};
