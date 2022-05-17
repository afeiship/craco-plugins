import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const config = {
      alias: {
        '@': path.join(process.cwd(), 'src')
      },
      plugins: [
        new webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom',
          cx: 'classnames',
          View: ['@jswork/styled-box', 'default']
        })
      ]
    };

    cracoConfig.webpack = merge(cracoConfig.webpack || {}, config);
    return cracoConfig;
  }
};
