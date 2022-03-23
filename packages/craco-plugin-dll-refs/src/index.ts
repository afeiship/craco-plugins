import { resolve } from 'path';
import webpack from 'webpack';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import * as process from 'process';

const defaults = {
  path: 'src/assets/libs/js',
  names: ['vendors']
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
    const { names, path } = options;
    const dllRefs = names.map((name) => {
      const json = resolve(cwd, path, `${name}-manifest.json`);
      return new webpack.DllReferencePlugin({
        manifest: require(json)
      });
    });
    // 注意: 这里的 `webpack.DllReferencePlugin` 会导致 HMR 不生效，所以在 dev 环境下不使用
    const isProd = env === 'production';
    const prodPlugins = isProd
      ? [
          ...dllRefs,
          new AddAssetHtmlPlugin({
            filepath: resolve(cwd, `./${path}/*.js`),
            publicPath: './static/libs/js',
            outputPath: './static/libs/js'
          })
        ]
      : [null];

    webpackConfig.plugins = [...webpackConfig.plugins, ...prodPlugins].filter(Boolean);
    return webpackConfig;
  }
};
