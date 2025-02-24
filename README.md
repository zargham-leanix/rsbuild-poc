### Unable to build

Run

```
npx nx build-rsbuild main
```

Fails with error:

```
File: /Users/I529226/workspace/playground/rsbuild-poc/apps/main/src/styles.scss:1:1
  × Module build failed:
  ╰─▶   × TypeError: Cannot read properties of undefined (reading '__esModule')
        │     at handleExports (/Users/I529226/workspace/playground/rsbuild-poc/node_modules/@rsbuild/core/node_modules/@rspack/core/dist/cssExtractLoader.js:170:40)
        │     at /Users/I529226/workspace/playground/rsbuild-poc/node_modules/@rsbuild/core/node_modules/@rspack/core/dist/cssExtractLoader.js:264:7
        │     at /Users/I529226/workspace/playground/rsbuild-poc/node_modules/@rsbuild/core/node_modules/@rspack/core/dist/index.js:6301:13

File: /Users/I529226/workspace/playground/rsbuild-poc/apps/main/src/styles.scss:1:1
  × Module build failed:
  ╰─▶   × Can't find stylesheet to import.
        │   ╷
        │ 4 │ @import 'global/styles';
        │   │         ^^^^^^^^^^^^^^^
        │   ╵
```
