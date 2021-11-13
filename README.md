# Mocha - Chai

Dependencies for testing typescript modules.

```json
{
    "@types/chai": "^4.2.22",
    "@types/mocha": "^9.0.0",
    "chai": "^4.3.4",
    "mocha": "^9.1.3",
    "nyc": "^15.1.0",
    "ts-node": "^10.4.0",
    "tsconfig-paths": "^3.11.0",
    "typescript": "^4.4.4"
}
```

## [Typescript](https://www.npmjs.com/package/typescript)

[TypeScript](https://www.typescriptlang.org/) is a language for application-scale JavaScript.
TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser,
for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

## [Mocha](https://www.npmjs.com/package/mocha)

Simple, flexible, fun JavaScript test framework for Node.js & The Browser.

**Used to run tests**

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

### [Types](https://www.npmjs.com/package/@types/mocha)

Used with Typescript.

## [Chai](https://www.npmjs.com/package/chai)

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

### [Types](https://www.npmjs.com/package/@types/chai)

Used with typescript.

## [nyc](https://www.npmjs.com/package/nyc)

JavaScript test coverage made simple.<br/>
[Istanbul's](https://istanbul.js.org/) state of the art command line interface.

```json
{
  "scripts": {
    "test": "mocha",
    "coverage": "nyc npm run test"
  }
}
```

### [Configuring `nyc`](https://www.npmjs.com/package/nyc#configuring-nyc)

The main export is a configuration `json` file for `nyc`.

```json
{
  "extends": "@istanbuljs/nyc-config-typescript",
  "all": true,
  "check-coverage": true,
  "reporter": ["text", "html"]
}
```

#### [TypeScript projects](https://www.npmjs.com/package/nyc#typescript-projects)

Please start with the pre-configured [`@istanbuljs/nyc-config-typescript`](https://www.npmjs.com/package/@istanbuljs/nyc-config-typescript) preset.

#### [Configuration options](https://www.npmjs.com/package/nyc#common-configuration-options)

| Option name      | Description                                                                               | Value                                                                                                                                                     | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `all`            | Whether or not to instrument all files (not just the ones touched by your test suite)     | `true`                                                                                                                                                    | `false` |
| `check-coverage` | Check whether coverage is within thresholds, fail if not                                  | `true`                                                                                                                                                    | `false` |
| `reporter`       | [Coverage reporters to use](https://istanbul.js.org/docs/advanced/alternative-reporters/) | [`text`](https://istanbul.js.org/docs/advanced/alternative-reporters/#html), [`html`](https://istanbul.js.org/docs/advanced/alternative-reporters/#html)  | `text`  |

## [ts-node](https://www.npmjs.com/package/ts-node)

ts-node is a TypeScript execution engine and REPL for Node.js.

It JIT transforms TypeScript into JavaScript,
enabling you to directly execute TypeScript on Node.js without precompiling.
This is accomplished by hooking node's module loading APIs,
enabling it to be used seamlessly alongside other Node.js tools and libraries.

### [Use with mocha](https://typestrong.org/ts-node/docs/recipes/mocha/)

```shell
mocha -r ts-node/register
```

## [tsconfig-paths](https://www.npmjs.com/package/tsconfig-paths)

Use this to load modules whose location is specified in the `paths` section of `tsconfig.json`.
Both loading at run-time and via API are supported.

Typescript by default mimics the Node.js runtime resolution strategy of modules.
But it also allows the use of [path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html),
which allows arbitrary module paths (that doesn't start with "/" or ".")
to be specified and mapped to physical paths in the filesystem.
The typescript compiler can resolve these paths from `tsconfig` so it will compile OK.
But if you then try to execute the compiled files with node (or ts-node),
it will only look in the `node_modules` folders all the way up to the root of the filesystem
and thus will not find the modules specified by paths in `tsconfig`.

If you require this package's `tsconfig-paths/register` module it will read the `paths` from `tsconfig.json`
and convert node's module loading calls into to physical file paths that node can load.

### Use with mocha and ts-node

You also have to specify a glob that includes `.ts` files because mocha looks after files with `.js` extension by default.

```shell
mocha -r ts-node/register -r tsconfig-paths/register "test/**/*.ts"
```
