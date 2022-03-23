# craco-plugin-styled-extension
> Some extensions for styled-components in cra.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i styled-components color-alpha
npm install @jswork/craco-plugin-styled-extension
```

## usage
```js
import cracoPluginStyledExtension from '@jswork/craco-plugin-styled-extension';

// usage goes here.
```

```tsx
export const MyFooter = styled.footer`
  font-size: 14px;
  color: ${rgba('#fff', 0.8)};
  position: absolute;
  bottom: 24px;
  width: 100%;
  text-align: center;
`;
```

## license
Code released under [the MIT license](https://github.com/afeiship/craco-plugin-styled-extension/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/craco-plugin-styled-extension
[version-url]: https://npmjs.org/package/@jswork/craco-plugin-styled-extension

[license-image]: https://img.shields.io/npm/l/@jswork/craco-plugin-styled-extension
[license-url]: https://github.com/afeiship/craco-plugin-styled-extension/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/craco-plugin-styled-extension
[size-url]: https://github.com/afeiship/craco-plugin-styled-extension/blob/master/dist/craco-plugin-styled-extension.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/craco-plugin-styled-extension
[download-url]: https://www.npmjs.com/package/@jswork/craco-plugin-styled-extension
