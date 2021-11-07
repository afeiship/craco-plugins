import OfflinePlugin from 'offline-plugin';

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
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
