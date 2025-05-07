// @ts-check

import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        files: [
            '**/*.ts',
            '**/*.tsx',
            '**/*.mts',
            '**/*.cts'
        ],
        ignores: [
            '**/*.js',
        ],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            'arrow-parens': [
                'warn',
                'as-needed',
                {
                    requireForBlockBody: false,
                },
            ],
            'comma-dangle': [
                'warn',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'never',
                    exports: 'never',
                    functions: 'never',
                },
            ],
            curly: 'error',
            'default-case': 'error',
            eqeqeq: 'error',
            'no-extra-semi': 'error',
            'no-fallthrough': 'error',
            'no-restricted-syntax': [
                'error',
                {
                    selector: "VariableDeclaration[kind = 'let'] > VariableDeclarator[init = null]:not([id.typeAnnotation])",
                    message: 'Type must be inferred at variable declaration',
                },
            ],
            'no-trailing-spaces': [
                'warn',
                {
                    skipBlankLines: true,
                    ignoreComments: true,
                },
            ],
            'no-unreachable': 'warn',
            'no-var': 'warn',
            'prefer-const': 'warn',
            quotes: [
                'warn',
                'single',
                {
                    avoidEscape: true,
                },
            ],
            semi: 'error',
            yoda: 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': 'warn',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/no-unnecessary-condition': [
                'error',
                {
                    allowConstantLoopConditions: true,
                },
            ],
            '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_$',
                    varsIgnorePattern: '^_$',
                },
            ],
            '@typescript-eslint/strict-boolean-expressions': 'error',
        },
    },
);