import webpack from 'webpack';
import nx from '@jswork/next';

declare global {
  const APP_VARS: any;
}

const defaults = {
  globalKey: 'APP_VARS',
  vars: {}
};

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const opts = nx.mix(null, defaults, pluginOptions);
    const { globalKey, vars } = opts;

    cracoConfig.webpack.plugins.push(
      new webpack.default.EnvironmentPlugin(vars),
      new webpack.default.DefinePlugin({ [globalKey]: JSON.stringify(vars) }),
    );
    return cracoConfig;
  }
};
