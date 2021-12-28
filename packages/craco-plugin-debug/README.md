# craco-plugin-debug
> Craco plugin for debug.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/craco-plugin-debug
```

## usage
```js
import cracoPluginDebug from '@jswork/craco-plugin-debug';

// craco.config.js
module.exports = {
    plugins: [
        { plugin: cracoPluginDebug , options: { filename: 'debug.log'} }
    ]
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/craco-plugin-debug/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/craco-plugin-debug
[version-url]: https://npmjs.org/package/@jswork/craco-plugin-debug

[license-image]: https://img.shields.io/npm/l/@jswork/craco-plugin-debug
[license-url]: https://github.com/afeiship/craco-plugin-debug/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/craco-plugin-debug
[size-url]: https://github.com/afeiship/craco-plugin-debug/blob/master/dist/craco-plugin-debug.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/craco-plugin-debug
[download-url]: https://www.npmjs.com/package/@jswork/craco-plugin-debug
