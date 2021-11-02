# craco-plugin-banner
> Carco plugin for banner.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/craco-plugin-banner
```

## usage
```js
import cracoPluginBanner from '@jswork/craco-plugin-banner';

// craco.config.js
modlue.exports = {
  plugins: [
    { 
      plugin: cracoPluginBanner, 
      options: {
        banner:[
          'NAME: editor-frontend',
          'VERSION: v1.1.5-alpha.6',
          'BUILD_TIME: 4/12/2019, 11:01:20 PM'
        ]
      } 
    }
  ],
};
```

## license
Code released under [the MIT license](https://github.com/afeiship/craco-plugin-banner/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/craco-plugin-banner
[version-url]: https://npmjs.org/package/@jswork/craco-plugin-banner

[license-image]: https://img.shields.io/npm/l/@jswork/craco-plugin-banner
[license-url]: https://github.com/afeiship/craco-plugin-banner/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/craco-plugin-banner
[size-url]: https://github.com/afeiship/craco-plugin-banner/blob/master/dist/craco-plugin-banner.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/craco-plugin-banner
[download-url]: https://www.npmjs.com/package/@jswork/craco-plugin-banner
