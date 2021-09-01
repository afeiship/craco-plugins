import log from '@jswork/next-log';
import fs from 'fs';

const defaults = {
  writeToDisk: false,
  filename: '.craco-plugin-debug.log'
};

export = {
  overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => {
    const target = JSON.stringify(cracoConfig, null, 2);
    const opts = Object.assign({}, defaults, pluginOptions);

    if (opts.writeToDisk) {
      fs.writeFileSync(opts.filename, target);
    }

    log(target);
    return cracoConfig;
  }
};
