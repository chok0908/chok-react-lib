module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        es2021: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'react/jsx-filename-extension': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0,
        'react/button-has-type': 0,
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'no-shadow': [
            'error',
            {
                builtinGlobals: false,
                hoist: 'functions',
                allow: [],
                ignoreOnInitialization: false,
            },
        ],
    },
}
