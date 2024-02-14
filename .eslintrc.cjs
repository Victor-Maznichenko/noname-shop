module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "airbnb",
      "airbnb/hooks",
      "airbnb-typescript",
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended",
      "plugin:react/jsx-runtime",
      "prettier"
   ],
   overrides: [
      {
         files: ["*.ts", "*.tsx"],
         parserOptions: {
            project: ["tsconfig.json"]
         }
      }
   ],
   parserOptions: {
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
   },
   plugins: ["prettier", "import", "react", "@stylistic/js", "jsx-a11y"],
   rules: {
      "import/order": [
         "error",
         {
            groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
            "newlines-between": "always-and-inside-groups",
            pathGroups: [
               {
                  pattern: "@components/**",
                  group: "internal",
                  position: "after"
               },
               {
                  pattern: "@helpers",
                  group: "internal"
               },
               {
                  pattern: "@types/**",
                  group: "internal"
               },
               {
                  pattern: "@redux/**",
                  group: "internal"
               },
               {
                  pattern: "@utils/**",
                  group: "internal"
               },
               {
                  pattern: "@styles/**",
                  group: "internal",
                  position: "after"
               },
               {
                  pattern: "@/**",
                  group: "internal"
               }
            ],
            pathGroupsExcludedImportTypes: ["builtin"],
            alphabetize: {
               order: "asc",
               caseInsensitive: true
            }
         }
      ],
      "@stylistic/js/indent": ["warn", 3],
      "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
      "no-param-reassign": 0,
      "import/no-unresolved": 0,
      semi: ["warn", "always"],
      "react/button-has-type": 0,
      quotes: ["error", "double"],
      "react/jsx-boolean-value": 0,
      "react/no-array-index-key": 0,
      "react/require-default-props": 0,
      "react/jsx-props-no-spreading": 0,
      "import/prefer-default-export": 0,
      "import/no-extraneous-dependencies": 0,
      "react/function-component-definition": [
         2,
         {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function"
         }
      ]
   }
};
