const defaults = { namespace: 'cma' };

/**
 * https://styled-components.com/docs/tooling
 */

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const options = { ...defaults, ...pluginOptions };

    cracoConfig.babel = {
      ...cracoConfig.babel,
      plugins: [['babel-plugin-styled-components', options]]
    };

    return cracoConfig;
  }
};
