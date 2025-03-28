const { resolve } = require('path');
const { createConfig } = require('@nx/angular-rspack');

module.exports = createConfig({
  inlineStylesExtension: 'scss',
  index: './src/index.html',
  browser: './src/main.ts',
  fileReplacements: [],
  tsconfigPath: resolve(__dirname, './tsconfig.prod.json'),
  polyfills: ['zone.js'],
  assets: [],
  root: __dirname,
  scripts: [],
  jit: false,
  hasServer: false,
  skipTypeChecking: false,
  styles: ['./src/styles.scss'],
});
