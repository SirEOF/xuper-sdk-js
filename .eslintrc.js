module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'indent': ['error', 4],
        'no-multi-spaces': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'error',
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'object-curly-spacing': 'off',
        'max-len': ['error', {code: 120, ignoreUrls: true}],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        'no-bitwise': 'off',
        'no-plusplus': 'off',
        'no-throw-literal': 'off',
        'arrow-parens': 'off',
        'no-useless-catch': 'off',
        // Todo
        '@typescript-eslint/ban-ts-ignore': 'off',
        'no-unused-expressions': 'off',
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        '@typescript-eslint/camelcase': 'off',
        'class-methods-use-this': 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
};
