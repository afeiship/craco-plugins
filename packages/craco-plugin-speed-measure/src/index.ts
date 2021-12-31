import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import * as process from 'process';

const smp = new SpeedMeasurePlugin();
const wrap = (v) => (process.env.SPEED_MEASURE === 'true' ? smp.wrap(v) : v);
export = {
  overrideWebpackConfig: ({
    webpackConfig,
    cracoConfig,
    pluginOptions,
    context: { env, paths }
  }) => {
    return wrap(webpackConfig);
  }
};
