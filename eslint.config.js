import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import { importX } from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['build', 'node_modules', '.react-router'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  react.configs['recommended-typescript'],
  reactHooks.configs.flat.recommended,
  prettier,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'prettier/prettier': 'error',
      // styled-components and react-dom trip these on their default exports
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      // Covered by the react-hooks equivalents
      '@eslint-react/exhaustive-deps': 'off',
      '@eslint-react/set-state-in-effect': 'off',
      'react-hooks/set-state-in-effect': 'warn',
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['constructors'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_images'],
          allowAfterThis: true,
          allowAfterSuper: true,
        },
      ],
    },
  }
);
