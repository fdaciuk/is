'use strict'

const is = (...params) => {
  const [typeToTest, value] = params

  if (typeof typeToTest !== 'string') {
    throw new TypeError('typeToTest must be a string')
  }

  if (params.length === 1) {
    return (value) => is(typeToTest, value)
  }

  const type = typeToTest.replace(/^\w/, (l) => l.toUpperCase())
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export default is
