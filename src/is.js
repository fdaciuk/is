'use strict'

const is = (...params) => {
  const [typeToTest, value] = params

  if (!isString(typeToTest)) {
    throw new TypeError('typeToTest must be a string')
  }

  if (!hasValue(params)) {
    return (value) => is(typeToTest, value)
  }

  const type = typeToTest.replace(/^\w/, (l) => l.toUpperCase())
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

function isString (value) {
  return typeof value === 'string'
}

function hasValue (params) {
  return params.length === 2
}

export default is
