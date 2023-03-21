/* eslint-disable */

// const path = require('path');
const ArcoWebpackPlugin = require('@arco-plugins/webpack-react');
const LessPluginNpmImport = require('less-plugin-npm-import');

module.exports = function defineConfig(envId) {
  return {
    jest: {
      // jestConfigPath: path.resolve(__dirname, './jest.config.js'),
      // jestModulePath: '',
    },
    webpack: {
      devServerConfig: [
        (config) => {
          return config.merge({
            plugins: [
              new ArcoWebpackPlugin({
                theme: '@arco-design/theme-line',
                webpackImplementation: config.webpack,
                include: 'packages',
              }),
            ],
            resolve: {
              alias: {
                react: require.resolve('react'),
              },
            },
          });
        },
      ],
    },
    typescript: {
      buildConfig: [
        (config) => {
          config.mergeTsConfig({
            compilerOptions: {
              allowJs: false,
            },
          });
          return config;
        },
      ],
    },
    less: {
      // specify options for less.render
      lessOptions: {
        plugins: [new LessPluginNpmImport({ prefix: '~' })],
      },
    },
    sass: {
      // specify options for sass.compile
      sassOptions: {}
    }
  };
};
