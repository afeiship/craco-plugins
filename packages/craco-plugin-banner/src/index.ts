import HtmlBannerWebpackPlugin from '@jswork/html-banner-webpack-plugin';
import nx from '@jswork/next';
import '@jswork/next-absolute-package';

const pkg = nx.absolutePackage();
const defPluginOptions = {
  banner: [
    `NAME: ${pkg.name}`,
    `VERSION: v${pkg.version}`,
    `ENV: ${process.env.NODE_ENV}`,
    'BUILD_TIME: ' + new Date().toLocaleString('en-US', { timeZone: 'Asia/ShangHai' })
  ]
};

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const options = nx.mix(null, defPluginOptions, pluginOptions);
    cracoConfig.webpack.plugins = cracoConfig.webpack.plugins || [];
    cracoConfig.webpack.plugins.push(new HtmlBannerWebpackPlugin(options));
    return cracoConfig;
  }
};
