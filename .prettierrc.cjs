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
   printWidth: 110,
   arrowParens: "avoid",
   trailingComma: "es5",
   tabWidth: 2,
   tailwindConfig: "./tailwind.config.js",
   plugins: ["prettier-plugin-tailwindcss"]
};
