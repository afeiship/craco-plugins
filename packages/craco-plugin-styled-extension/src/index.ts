const webpack = require('webpack');
const merge = require('webpack-merge');

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const config = {
      plugins: [
        new webpack.ProvidePlugin({
          styled: ['styled-components', 'default'],
          rgba: 'color-alpha'
        })
      ]
    };

    cracoConfig.webpack = merge(cracoConfig.webpack || {}, config);
    return cracoConfig;
  }
};
