import { path as dirname } from 'app-root-path';
import path from 'path';
import { merge } from 'webpack-merge';

export = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths }
  }) => {
    const oldConfig = webpackConfig.config;
    const newConfig = {
      alias: {
        '@': path.join(dirname, 'src'),
        ...pluginOptions
      }
    };

    webpackConfig.config = merge(oldConfig, newConfig);
    return webpackConfig;
  }
};
