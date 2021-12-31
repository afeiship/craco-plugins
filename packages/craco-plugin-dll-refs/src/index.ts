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
    const { names, path } = pluginOptions;
    const dllRefs = names.map((name) => {
      const json = resolve(cwd, path, `${name}-manifest.json`);
      return new webpack.DllReferencePlugin({
        manifest: require(json)
      });
    });

    webpackConfig.plugins = [...webpackConfig.plugins].concat(
      ...dllRefs,
      new AddAssetHtmlPlugin({
        filepath: resolve(cwd, `./${path}/*.js`),
        publicPath: './static/libs',
        outputPath: './static/libs'
      })
    );
    return webpackConfig;
  }
};
