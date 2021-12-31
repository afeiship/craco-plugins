import { resolve } from 'path';
import webpack from 'webpack';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import * as process from 'process';

export = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths }
  }) => {
    const cwd = process.cwd();
    const { names, path, inject } = pluginOptions;
    const dllRefs = names.map((name) => {
      const json = resolve(cwd, path, `${name}-manifest.json`);
      return new webpack.DllReferencePlugin({
        manifest: require(json)
      });
    });

    const theInject = inject
      ? new AddAssetHtmlPlugin({
          filepath: resolve(cwd, `./${path}/*.js`),
          publicPath: './static/libs',
          outputPath: './static/libs'
        })
      : null;

    webpackConfig.plugins = [...webpackConfig.plugins]
      .concat(...dllRefs, theInject)
      .filter(Boolean);

    return webpackConfig;
  }
};
