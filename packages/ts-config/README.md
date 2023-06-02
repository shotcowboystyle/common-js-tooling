<div align="center">

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

# @shotcowboystyle/ts-config

**TypeScript configuration for all at_shotcowboystyle personal projects.**

[![GitHub](https://img.shields.io/github/license/shotcowboystyle/common-js-tooling)](https://github.com/shotcowboystyle/common-js-tooling/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/shotcowboystyle/common-js-tooling/branch/main/graph/badge.svg?token=OEGIV6RFDO)](https://codecov.io/gh/shotcowboystyle/common-js-tooling)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@shotcowboystyle/ts-config?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@shotcowboystyle/ts-config)
[![npm](https://img.shields.io/npm/v/@shotcowboystyle/ts-config?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@shotcowboystyle/ts-config)

</div>

**Table of Contents**

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Base Config](#base-config)
    -   [Config without decorators](#config-without-decorators)
    -   [Config with extra strict compiler options](#config-with-extra-strict-compiler-options)
    -   [Config with extra strict compiler options and without decorators](#config-with-extra-strict-compiler-options-and-without-decorators)
-   [Buy us some doughnuts](#buy-us-some-doughnuts)
-   [Contributors ✨](#contributors-%E2%9C%A8)

## Installation

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install --save-dev @shotcowboystyle/ts-config
```

---

## Usage

### Base Config

You can use `@shotcowboystyle/ts-config` base [`tsconfig.json`](https://github.com/shotcowboystyle/common-js-tooling/blob/main/packages/ts-config/tsconfig.json) by extending it in yours:

```json
{
	"extends": "@shotcowboystyle/ts-config"
}
```

This TypeScript config is set up in such a way that it will suite nearly all projects, you may extend this to include your own
configuration options as well.

Following is a copy of this config file for easy viewing:

```json
{
	"compileOnSave": true,
	"compilerOptions": {
		"allowSyntheticDefaultImports": true,
		"alwaysStrict": true,
		"declaration": true,
		"declarationMap": true,
		"emitDecoratorMetadata": true,
		"esModuleInterop": true,
		"experimentalDecorators": true,
		"forceConsistentCasingInFileNames": true,
		"importHelpers": true,
		"importsNotUsedAsValues": "error",
		"incremental": true,
		"lib": ["esnext"],
		"module": "CommonJS",
		"moduleResolution": "Node",
		"newLine": "lf",
		"noEmitHelpers": true,
		"noFallthroughCasesInSwitch": true,
		"noImplicitReturns": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"preserveConstEnums": true,
		"pretty": true,
		"removeComments": false,
		"resolveJsonModule": true,
		"sourceMap": true,
		"strict": true,
		"target": "ES2019",
		"useDefineForClassFields": true
	}
}
```

### Config without decorators

You can use `@shotcowboystyle/ts-config`'s [`without-decorators.json`](https://github.com/shotcowboystyle/common-js-tooling/blob/main/packages/ts-config/extra-strict-without-decorators.json) by extending it in yours:

```json
{
	"extends": "@shotcowboystyle/ts-config/without-decorators"
}
```

This TypeScript extends everything from the base config, but disables decorator support.

Following is a copy of this config file for easy viewing:

```json
{
	"$schema": "https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/tsconfig.json",
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"emitDecoratorMetadata": false,
		"experimentalDecorators": false
	}
}
```

### Config with extra strict compiler options

You can use `@shotcowboystyle/ts-config`'s [`extra-strict.json`](https://github.com/shotcowboystyle/common-js-tooling/blob/main/packages/ts-config/extra-strict.json) by extending it in yours:

```json
{
	"extends": "@shotcowboystyle/ts-config/extra-strict"
}
```

This TypeScript extends everything from the base config, while enabling some extra strict options.

Following is a copy of this config file for easy viewing:

```json
{
	"$schema": "https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/tsconfig.json",
	"extends": "./tsconfig.json",
	"compilerOptions": {
		"allowUnreachableCode": false,
		"allowUnusedLabels": false,
		"exactOptionalPropertyTypes": false,
		"noImplicitOverride": true
	}
}
```

### Config with extra strict compiler options and without decorators

You can use `@shotcowboystyle/ts-config`'s [`extra-strict-without-decorators.json`](https://github.com/shotcowboystyle/common-js-tooling/blob/main/packages/ts-config/extra-strict-without-decorators.json) by extending it in yours:

```json
{
	"extends": "@shotcowboystyle/ts-config/extra-strict-without-decorators"
}
```

This TypeScript is a combination of the [Config without decorators](#config-without-decorators) and [Config with extra strict compiler options](#config-with-extra-strict-compiler-options) config files.

Following is a copy of this config file for easy viewing:

```json
{
	"$schema": "https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/tsconfig.json",
	"extends": "./extra-strict.json",
	"compilerOptions": {
		"emitDecoratorMetadata": false,
		"experimentalDecorators": false
	}
}
```
