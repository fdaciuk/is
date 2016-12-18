'use strict'

import { expect } from 'chai'
import is, { typeOf } from './is'

test('is should be a function', () => {
  expect(is).to.be.a('function')
})

test('is("object", {}) should return true', () => {
  expect(is('object', {})).to.be.equal(true)
})

test('is("object", []) should return false', () => {
  expect(is('object', [])).to.be.equal(false)
})

test('is("object") should return a function (partial application)', () => {
  expect(is('object')).to.be.a('function')
})

test('is("number")(10) should return true', () => {
  const isNumber = is('number')
  expect(isNumber(10)).to.be.equal(true)
})

test('is(10) should throw an TypeError: "typeToTest must be a string"', () => {
  try {
    is(10)
  } catch (e) {
    expect(e.message).to.be.equal('typeToTest must be a string')
  }
})

test('is("undefined", undefined) should return true', () => {
  expect(is('undefined', undefined)).to.be.equal(true)
})

test('is("undefined", null) should return false', () => {
  expect(is('undefined', null)).to.be.equal(false)
})

test('is() should throw an TypeError: "typeToTest must be a string"', () => {
  try {
    is()
  } catch (e) {
    expect(e.message).to.be.equal('typeToTest must be a string')
  }
})

test('typeOf should be a function', () => {
  expect(typeOf).to.be.a('function')
})

test('typeOf(123) should return "number"', () => {
  expect(typeOf(123)).to.be.equal('number')
})

test('typeOf({}) should return "object"', () => {
  expect(typeOf({})).to.be.equal('object')
})

test('typeOf([]) should return "array"', () => {
  expect(typeOf([])).to.be.equal('array')
})

test('typeOf(null) should return "null"', () => {
  expect(typeOf(null)).to.be.equal('null')
})

test('typeOf(undefined) should return "undefined"', () => {
  expect(typeOf(undefined)).to.be.equal('undefined')
})
