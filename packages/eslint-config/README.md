<div align="center">

# @shotcowboystyle/eslint-config

**ESLint configuration for all at_shotcowboystyle personal projects.**

[![codecov](https://codecov.io/gh/shotcowboystyle/common-js-tooling/branch/main/graph/badge.svg?token=OEGIV6RFDO)](https://codecov.io/gh/shotcowboystyle/common-js-tooling)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@shotcowboystyle/eslint-config?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@shotcowboystyle/eslint-config)
[![npm](https://img.shields.io/npm/v/@shotcowboystyle/eslint-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@shotcowboystyle/eslint-config)

</div>

## Installation

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install --save-dev @shotcowboystyle/eslint-config
```

---

## Usage

Add the ESLint config to your `package.json`:

```json
{
	"name": "my-project",
	"eslintConfig": {
		"extends": "@shotcowboystyle"
	}
}
```

Or to `eslintrc.js` / `.eslintrc.json`:

```json
{
	"extends": "@shotcowboystyle"
}
```

Create `tsconfig.eslint.json` next to the eslint config file, for example with content:

```json
{
	"extends": "./tsconfig.json",
	"include": ["src", "test"]
}
```
