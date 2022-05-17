const webpack = require('webpack');
const { merge } = require('webpack-merge');

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const config = {
      plugins: [
        new webpack.ProvidePlugin({
          styled: ['styled-components', 'default'],
          rgba: ['@jswork/color-rgba', 'default'],
          lighten: ['@jswork/color-lighten', 'default'],
          darken: ['@jswork/color-darken', 'default']
        })
      ]
    };

    cracoConfig.webpack = merge(cracoConfig.webpack || {}, config);
    return cracoConfig;
  }
};
