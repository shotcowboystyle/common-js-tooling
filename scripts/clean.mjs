import { rm } from 'fs/promises';

const rootDir = new URL('../', import.meta.url);
const packagesDir = new URL('packages/', rootDir);
const options = { recursive: true, force: true };

const paths = [
  // Dist folders
  new URL('eslint-config/dist/', packagesDir),
  new URL('eslint-plugin-result/dist/', packagesDir),
  new URL('fetch/dist/', packagesDir),
  new URL('node-utilities/dist/', packagesDir),
  new URL('result/dist/', packagesDir),
  new URL('prettier-config/dist/', packagesDir),

  // Turbo folders
  new URL('eslint-config/.turbo/', packagesDir),
  new URL('eslint-plugin-result/.turbo/', packagesDir),
  new URL('fetch/.turbo/', packagesDir),
  new URL('node-utilities/.turbo/', packagesDir),
  new URL('prettier-config/.turbo/', packagesDir),
  new URL('result/.turbo/', packagesDir),
  new URL('ts-config/.turbo/', packagesDir),
];

await Promise.all(paths.map((path) => rm(path, options)));
