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
  return rawType(value) === `[object ${type}]`
}

const typeOf = (value) => {
  return rawType(value).replace(/^\[object (\w+)]$/, '$1').toLowerCase()
}

function isString (value) {
  return typeof value === 'string'
}

function hasValue (params) {
  return params.length === 2
}

function rawType (value) {
  return Object.prototype.toString.call(value)
}

export { typeOf }
export default is
