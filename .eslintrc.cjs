module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "airbnb",
      "airbnb/hooks",
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "eslint-config-prettier",
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
   plugins: ["import", "react", "@stylistic/js"],
   rules: {
      "@stylistic/js/indent": ["warn", 3],
      "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
      quotes: ["error", "double"],
      semi: ["warn", "always"],
      "max-len": ["error", { code: 110 }],
      "react-hooks/exhaustive-deps": 0,
      "@typescript-eslint/no-misused-promises": 0,
      "react/require-default-props": 0,
      "@typescript-eslint/no-floating-promises": 0,
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": 0,
      "react/react-in-jsx-scope": 0,
      "import/extensions": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "import/no-extraneous-dependencies": 0,
      "react/function-component-definition": [
         2,
         {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function"
         }
      ],
      "import/order": [
         "error",
         {
            groups: [
               "builtin",
               "external",
               "internal",
               "parent",
               "sibling",
               "index",
               "object",
               "type"
            ],
            "newlines-between": "always-and-inside-groups",
            pathGroups: [
               {
                  pattern: "@components/**",
                  group: "external",
                  position: "after"
               },
               {
                  pattern: "@helpers/**",
                  group: "external",
                  position: "after"
               },
               {
                  pattern: "@types/**",
                  group: "external",
                  position: "after"
               },
               {
                  pattern: "@utils/**",
                  group: "external",
                  position: "after"
               },
               {
                  pattern: "@constants/**",
                  group: "external",
                  position: "after"
               },
               {
                  pattern: "@styles/**",
                  group: "external",
                  position: "after"
               },
               {
                  pattern: "@/**",
                  group: "external",
                  position: "after"
               }
            ],
            pathGroupsExcludedImportTypes: ["builtin"],
            alphabetize: {
               order: "asc",
               caseInsensitive: true
            }
         }
      ]
   }
};
