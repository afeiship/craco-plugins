import OfflinePlugin from 'offline-plugin';

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const { debug, ...options } = pluginOptions;
    const ifeWorked = debug || env === 'production';

    if (!ifeWorked) return cracoConfig;

    cracoConfig.webpack.plugins.push(
      new OfflinePlugin(
        Object.assign(
          {
            excludes: ['fallback.js'],
            ServiceWorker: {
              events: true
            }
          },
          options
        )
      )
    );

    return cracoConfig;
  }
};
