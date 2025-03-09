const { resolve } = require('path');
const { createConfig } = require('@ng-rspack/build');

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
  stylePreprocessorOptions: {
    includePaths: ['libs/shared/styles'],
  },
  jit: false,
  hasServer: false,
  skipTypeChecking: false,
  styles: ['./src/styles.scss'],
});
