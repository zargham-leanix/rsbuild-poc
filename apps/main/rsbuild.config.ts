import { createConfig } from '@ng-rsbuild/plugin-angular';
import { pluginSass } from '@rsbuild/plugin-sass';

export default createConfig(
  {
    browser: './src/main.ts',
    inlineStylesExtension: 'scss',
    styles: ['./src/styles.scss'],
  },
  {
    plugins: [
      pluginSass({
        sassLoaderOptions: {
          sassOptions: { includePaths: ['libs/shared/styles'] },
        },
      }),
    ],
  }
);
