# craco-plugin-dll-refs
> Craco plugin for webpack.DllReferencePlugin.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/craco-plugin-dll-refs
```

## usage
```js
import cracoPluginDllRefs from '@jswork/craco-plugin-dll-refs';

// usage goes here.
```

## usage with hmr
```conf
# 组合1: HRM + disabled dll-refs
# 特点: 启动慢，但支持HMR，开发体验更好
FAST_REFRESH = true
# craco.config.js<options: 默认可以不写>
{ plugin: dllRefs, options: {inject: false} }


## 组合2: refresh + enable dll-refs
# 特点: 启动快，但不支持HMR，对于表单应用体验有点差，但问题较少，占内存较大
FAST_REFRESH = false
# craco.config.js
{ plugin: dllRefs, options: { inject: true } }
```

## license
Code released under [the MIT license](https://github.com/afeiship/craco-plugin-dll-refs/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/craco-plugin-dll-refs
[version-url]: https://npmjs.org/package/@jswork/craco-plugin-dll-refs

[license-image]: https://img.shields.io/npm/l/@jswork/craco-plugin-dll-refs
[license-url]: https://github.com/afeiship/craco-plugin-dll-refs/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/craco-plugin-dll-refs
[size-url]: https://github.com/afeiship/craco-plugin-dll-refs/blob/master/dist/craco-plugin-dll-refs.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/craco-plugin-dll-refs
[download-url]: https://www.npmjs.com/package/@jswork/craco-plugin-dll-refs
