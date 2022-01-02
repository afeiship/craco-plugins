import { resolve } from 'path';
import webpack from 'webpack';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import * as process from 'process';

const defaults = {
  path: 'src/assets/libs/js',
  names: ['vendors'],
  inject: true
};

export = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths }
  }) => {
    const cwd = process.cwd();
    const options = { ...defaults, ...pluginOptions };
    const { names, path, inject } = options;
    const dllRefs = names.map((name) => {
      const json = resolve(cwd, path, `${name}-manifest.json`);
      return new webpack.DllReferencePlugin({
        manifest: require(json)
      });
    });

    const theInject = inject
      ? new AddAssetHtmlPlugin({
          filepath: resolve(cwd, `./${path}/*.js`),
          publicPath: './static/libs/js',
          outputPath: './static/libs/js'
        })
      : null;

    webpackConfig.plugins = [...webpackConfig.plugins]
      .concat(...dllRefs, theInject)
      .filter(Boolean);

    return webpackConfig;
  }
};
