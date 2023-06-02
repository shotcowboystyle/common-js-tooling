// @ts-expect-error TS considers the src to not be a module because it uses module.exports but vitest transpiles it just fine for this
import prettierConfig from '../src';

describe('Prettier Config', () => {
  test('should export rules', () => {
    expect(prettierConfig.$schema).toBe('http://json.schemastore.org/prettierrc');
    expect(prettierConfig.endOfLine).toBe('lf');
    expect(prettierConfig.printWidth).toBe(150);
    expect(prettierConfig.trailingComma).toBe('all');
    expect(prettierConfig.semi).toBe(true);
    expect(prettierConfig.tabWidth).toBe(2);
    expect(prettierConfig.useTabs).toBe(false);
    expect(prettierConfig.quoteProps).toBe('as-needed');
    expect(prettierConfig).toMatchSnapshot();
  });
});
