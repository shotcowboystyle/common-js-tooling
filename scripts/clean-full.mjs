import { rm } from 'fs/promises';

const rootDir = new URL('../', import.meta.url);
const packagesDir = new URL('packages/', rootDir);
const options = { recursive: true, force: true };

const paths = [
  // Root node_modules
  new URL('node_modules/', rootDir),

  // Nested node_modules folders
  new URL('eslint-config/node_modules/', packagesDir),
  new URL('eslint-plugin-result/node_modules/', packagesDir),
  new URL('fetch/node_modules/', packagesDir),
  new URL('node-utilities/node_modules/', packagesDir),
  new URL('prettier-config/node_modules/', packagesDir),
  new URL('result/node_modules/', packagesDir),
  new URL('ts-config/node_modules/', packagesDir),

  // Dist folders
  new URL('eslint-config/dist/', packagesDir),
  new URL('eslint-plugin-result/dist/', packagesDir),
  new URL('fetch/dist/', packagesDir),
  new URL('node-utilities/dist/', packagesDir),
  new URL('result/dist/', packagesDir),
  new URL('prettier-config/dist/', packagesDir),
];

await Promise.all(paths.map((path) => rm(path, options)));
