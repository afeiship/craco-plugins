import { path as dirname } from 'app-root-path';
import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const config = {
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

    merge(cracoConfig.webpack, config);
    return cracoConfig;
  }
};
