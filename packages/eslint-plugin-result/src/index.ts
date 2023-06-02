import { recommendedConfig } from './configs/recommended';
import { noDiscordResultRule } from './rules/no-discard-result';

/**
 * ESLint plugin result for @shotcowboystyle/result package
 * @example
 * ```json
 * {
 *   "extends": "plugin:@shotcowboystyle/result/recommended"
 * }
 * ```
 * @example
 * ```json
 * {
 *   "plugins": ["@shotcowboystyle/result"],
 *   "rules": {
 *     "@shotcowboystyle/result/no-discard-result": "error"
 *   }
 *}
 *```
 */
const eslintPluginResult = {
  rules: {
    'no-discard-result': noDiscordResultRule,
  },
  configs: {
    recommended: recommendedConfig,
  },
};

module.exports = eslintPluginResult;
