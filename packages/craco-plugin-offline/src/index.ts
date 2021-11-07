import OfflinePlugin from 'offline-plugin';

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    if (env !== 'production') return cracoConfig;

    cracoConfig.webpack.plugins.push(
      new OfflinePlugin(
        Object.assign(
          {
            excludes: ['fallback.js'],
            ServiceWorker: {
              events: true
            }
          },
          pluginOptions
        )
      )
    );

    return cracoConfig;
  }
};
