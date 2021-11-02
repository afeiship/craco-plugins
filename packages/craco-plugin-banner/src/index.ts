import HtmlBannerWebpackPlugin from '@jswork/html-banner-webpack-plugin';

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    cracoConfig.webpack = {
      plugins: [new HtmlBannerWebpackPlugin(pluginOptions)]
    };
    return cracoConfig;
  }
};
