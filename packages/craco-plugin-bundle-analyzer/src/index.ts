import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import * as process from 'process';

export = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths }
  }) => {
    const shouldAnalyzer = process.env.BUNDLE_ANALYZER === 'true';
    const target = shouldAnalyzer ? new BundleAnalyzerPlugin(pluginOptions) : [];
    webpackConfig.plugins = webpackConfig.plugins.concat(target);
    return webpackConfig;
  }
};
