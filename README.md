# is

> Typechecker in Vanilla JS

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

Check [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Fernando Daciuk
