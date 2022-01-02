import path from 'path';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import process from 'process';

const defaults = {
  path: 'src/assets/libs/css'
};

export = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths }
  }) => {
    const options = { ...defaults, ...pluginOptions };
    const cwd = process.cwd();
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new AddAssetHtmlPlugin({
        filepath: path.resolve(cwd, `./${options.path}/*.css`),
        publicPath: './static/libs/css',
        outputPath: './static/libs/css',
        typeOfAsset: 'css'
      })
    ];
    return webpackConfig;
  }
};
