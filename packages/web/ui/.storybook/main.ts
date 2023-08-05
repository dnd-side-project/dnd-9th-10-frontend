import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../../../../apps/web/public", "./images"],
  webpackFinal: async (config) => {
    if (config?.resolve?.alias) {
      config.resolve.alias[`next/router`] = require.resolve(
        `./__mocks__/next/router.js`
      );
      config.resolve.alias[`next/link`] = require.resolve(
        `./__mocks__/next/link.js`
      );
      config.resolve.alias[`next/image`] = require.resolve(
        `./__mocks__/next/image.js`
      );
    }
    return config;
  },
};
export default config;
