'use strict'

const is = (typeToTest, value) => {
  const type = typeToTest.replace(/^\w/, (l) => l.toUpperCase())
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export default is
