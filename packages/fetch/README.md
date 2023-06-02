<div align="center">

![Sapphire Logo](https://raw.githubusercontent.com/sapphiredev/assets/main/banners/SapphireCommunity.png)

# @shotcowboystyle/fetch

**Tiny wrapper around cross-fetch for improved TypeScript and data type support**

[![GitHub](https://img.shields.io/github/license/shotcowboystyle/common-js-tooling)](https://github.com/shotcowboystyle/common-js-tooling/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/shotcowboystyle/common-js-tooling/branch/main/graph/badge.svg?token=OEGIV6RFDO)](https://codecov.io/gh/shotcowboystyle/common-js-tooling)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@shotcowboystyle/fetch?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@shotcowboystyle/fetch)
[![npm](https://img.shields.io/npm/v/@shotcowboystyle/fetch?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@shotcowboystyle/fetch)

</div>

**Table of Contents**

-   [@shotcowboystyle/fetch](#sapphirefetch)
    -   [Description](#description)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Usage](#usage)
        -   [`GET`ting JSON data](#getting-json-data)
        -   [`GET`ting Buffer data (images, etc.)](#getting-buffer-data-images-etc)
        -   [`POST`ing JSON data](#posting-json-data)
    -   [Buy us some doughnuts](#buy-us-some-doughnuts)
    -   [Contributors ✨](#contributors-%E2%9C%A8)

## Description

[cross-fetch] is already a great library for making API calls, but because it focuses solely on bringing the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to Node.js, it doesn't provide specific error messages and handling for different return types (JSON, Buffer, plain text, etc). This is where `@shotcowboystyle/fetch` comes in. The syntax is more restrictive than that of [cross-fetch], but that makes it consistent and easier to use in TypeScript.

## Features

-   Written in TypeScript
-   Fully tested
-   Exported `enum` for the common return data types.
-   Throws distinctive errors when the API returns a "not ok" status code to make them easier to understand.
-   Enforces casting the return type when requesting JSON data, to ensure your return data is strictly typed.
-   Uses [cross-fetch] so this package can be used in NodeJS (where it uses [node-fetch]) and browser (where it uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API))

## Installation

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @shotcowboystyle/fetch
```

## Usage

**Note:** While this section uses `import`, it maps 1:1 with CommonJS' require syntax. For example, `import { fetch } from '@shotcowboystyle/fetch'` is the same as `const { fetch } = require('@shotcowboystyle/fetch')`.

**Note**: `fetch` can also be imported as a default import: `import fetch from '@shotcowboystyle/fetch'`.

### `GET`ting JSON data

```typescript
// Import the fetch function
import { fetch, FetchResultTypes } from '@shotcowboystyle/fetch';

interface JsonPlaceholderResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

// Fetch the data. No need to call `.json()` after making the request!
const data = await fetch<JsonPlaceholderResponse>('https://jsonplaceholder.typicode.com/todos/1', FetchResultTypes.JSON);

// Do something with the data
console.log(data.userId);
```

### `GET`ting Buffer data (images, etc.)

```typescript
// Import the fetch function
import { fetch, FetchResultTypes } from '@shotcowboystyle/fetch';

// Fetch the data. No need to call `.buffer()` after making the request!
const sapphireLogo = await fetch('https://github.com/sapphiredev.png', FetchResultTypes.Buffer);

// sapphireLogo is the `Buffer` of the image
console.log(sapphireLogo);
```

### `POST`ing JSON data

```typescript
// Import the fetch function
import { fetch, FetchResultTypes, FetchMethods } from '@shotcowboystyle/fetch';

// Fetch the data. No need to call `.json()` after making the request!
const responseData = await fetch(
	'https://jsonplaceholder.typicode.com/todos',
	{
		method: FetchMethods.Post,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: 'John Doe'
		})
	},
	FetchResultTypes.JSON
);

// Do something with the response data
console.log(responseData);
```

---
