import webpack from 'webpack';
import nx from '@jswork/next';

const defaults = {
  globalKey: '__CRACO_VARS__',
  vars: {}
};

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const opts = nx.mix(null, defaults, pluginOptions);
    const { globalKey, vars } = opts;
    nx.set(nx.GLOBAL, globalKey, vars);
    cracoConfig.webpack.plugins.push(
      new webpack.EnvironmentPlugin(vars)
    );
    return cracoConfig;
  }
};
