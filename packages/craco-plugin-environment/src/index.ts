import webpack from 'webpack';
import nx from '@jswork/next';

const defaults = {
  globalKey: 'APP_VARS',
  vars: {}
};

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const opts = nx.mix(null, defaults, pluginOptions);
    const { globalKey, vars } = opts;

    cracoConfig.webpack.plugins.push(
      new webpack.EnvironmentPlugin(vars),
      new webpack.DefinePlugin({ [globalKey]: JSON.stringify(vars) }),
    );

    return cracoConfig;
  }
};
