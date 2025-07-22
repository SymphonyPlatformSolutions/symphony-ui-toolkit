import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { moduleResolve } from 'import-meta-resolve';

const configuation: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('storybook-addon-mdx-embed'),
    getAbsolutePath('storybook-addon-themes'),
    getAbsolutePath('storybook-dark-mode'),
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  webpackFinal: async (config) => {
    config.module?.rules?.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: moduleResolve('ts-loader', import.meta.url as any).pathname,
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
          },
        ],
      }
    );
    config.resolve?.extensions?.push('.ts', '.tsx');
    return config;
  },
}

export default configuation;

function getAbsolutePath(value) {
  const URL = moduleResolve(join(value, 'package.json'), import.meta.url as any);
  return dirname(URL.pathname);
}
