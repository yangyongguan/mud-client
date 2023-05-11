module.exports = {
    root: true,
    env: {
        browser: true
    },
    plugins: [
        "react",
        "react-hooks",
        "eslint-plugin-react",
        "@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    // 全局变量
    globals: {
        Vlog: false
    },
    rules: {
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                types: {
                    "{}": false,
                    Function: false
                },
                extendDefaults: true
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": 'off',
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": 0,
        "camelacse": 0,
        "react/prop-types": 'off',
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        'react/react-in-jsx-scope': 'off',
        'no-extra-parens': 'off',
        'dot-location': 'warn',
        'dot-notation': 'warn',
        'no-async-promise-executor': 'off',
        semi: ['warn', 'never'],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        eqeqeq: [1],
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'block-spacing': [2, 'always'],
        'brace-style': [
            2,
            '1tbs'
        ],
        camelcase: [
            0,
            {
                properties: 'always'
            }
        ],
        'constructor-super': 2,
        'comma-dangle': 'error',
        'dot-location': [2, 'property'],
        'eol-last': 2,
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'generator-star-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        indent: [
            2, 4
        ],
        'jsx-quotes': [2, 'prefer-single'],
        'space-before-function-paren': [0],
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'new-parens': 2,
        'no-caller': 2,
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-depe-args': 'off',
        'no-eval': 2,
        'no-undef': 2,
        "no-alert": 2,
        "no-else-return": 2,
        'no-unsafe-finally': 2,
        "no-implicit-globals": 2,
        "no-invalid-this": 2,
        "object-curly-newline": 2,
        "object-curly-spacing": 2,
        "spaced-comment": 2,
        "jsx-quotes": ["error", "prefer-single"],
        'no-unused-vars': [
            2,
            {
                vars: 'all',
                args: 'none'
            }
        ],
        'no-console': 'off',
        'no-debugger': 'off',
        'react/display-name': 0,
        "react-hooks/rules-of-hooks": "warn",
        "no-unused-vars" : "off" ,
        "@typescript-eslint/no-unused-vars" : [ "error" ]
        // "react-hooks/exhaustive-deps": "warn"
    }
}
