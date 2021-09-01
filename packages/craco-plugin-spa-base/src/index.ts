import { path as dirname } from 'app-root-path';
import path from 'path';
import webpack from 'webpack';

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    cracoConfig.webpack = {
      alias: {
        '@': path.join(dirname, 'src')
      },
      plugins: [
        new webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom',
          View: ['@jswork/styled-box', 'default']
        })
      ]
    };
    return cracoConfig;
  }
};
