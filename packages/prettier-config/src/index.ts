import type { PrettierSchema } from './schema';
/**
 * Standard Prettier config for at_shotcowboystyle personal projects
 * @example
 * ```json
 * {
 *   "prettier": "@shotcowboystyle/prettier-config"
 * }
 * ```
 */
const prettierConfig: PrettierSchema = {
  $schema: 'http://json.schemastore.org/prettierrc',
  endOfLine: 'lf',
  printWidth: 150,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.yml',
      options: {
        tabWidth: 2,
        useTabs: false,
      },
    },
  ],
};

module.exports = prettierConfig;
