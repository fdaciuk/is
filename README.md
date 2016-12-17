# is

> Typechecker in Vanilla JS

[![Build Status][travis-image]][travis-url]
[![Coveralls Coverage Status][coverage-image]][coverage-url]
[![Code Climate Coverage][codeclimate-coverage-image]][codeclimate-coverage-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![License][license-image]][license-url]
[![CONTRIBUTING][contributing-image]][contributing-url]


## Installation

**Yarn**

```console
yarn add @fdaciuk/is
```

**NPM**

```console
npm i --save @fdaciuk/is
```

## Usage

**AMD**

```js
define(['is'], function (is) {
  console.log(is('arguments', arguments)) // true
})
```

**CommonJS**

```js
var is = require('@fdaciuk/is').default
console.log(is('array', [])) // true
```

**ES6 / ES2015 Module**

```js
import is from '@fdaciuk/is'

const isString = is('string')
console.log(isString('daciuk')) // true
```

**Method of `window` object**

```js
console.log(window.is('number', 10)) // true
```

## Signature

```js
is(typeToTest, value)
// or
is(typeToTest)(value)
```

## Contributing

Check [CONTRIBUTING.md](contributing-url)

## License

[MIT](license-url) &copy; Fernando Daciuk

[travis-image]: https://img.shields.io/travis/fdaciuk/is.svg?style=flat-square
[travis-url]: https://travis-ci.org/fdaciuk/is
[coverage-image]: https://img.shields.io/coveralls/fdaciuk/is/master.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/fdaciuk/is?branch=master
[codeclimate-coverage-image]: https://img.shields.io/codeclimate/coverage/github/fdaciuk/is.svg?style=flat-square
[codeclimate-coverage-url]: https://codeclimate.com/github/fdaciuk/is
[codeclimate-image]: https://img.shields.io/codeclimate/github/fdaciuk/is.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fdaciuk/is
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md
[contributing-image]: https://img.shields.io/badge/fdaciuk%2Fis-CONTRIBUTE-orange.svg?style=flat-square
[contributing-url]: CONTRIBUTING.md
