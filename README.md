# react-overflow-tooltip

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/react-overflow-tooltip.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-overflow-tooltip
[travis-image]: https://img.shields.io/travis/uiureo/react-overflow-tooltip.svg?style=flat-square
[travis-url]: https://travis-ci.org/uiureo/react-overflow-tooltip

A React component that shows a tooltip only if the text is overflow.

```js
var ReactOverflowTooltip = require('react-overflow-tooltip')

<ReactOverflowTooltip title='too long text'>
  <div>too long text</div>
</ReactOverflowTooltip>
// => <div title="too long text...">too long text...</div>

<ReactOverflowTooltip title='short text'>
  <div>{ text }</div>
</ReactOverflowTooltip>
// => <div>too long text...</div>
```

## Install

```
npm install react-overflow-tooltip
```

## License

[ISC](LICENSE)
