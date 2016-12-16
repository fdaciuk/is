'use strict'

import { expect } from 'chai'
import is from './is'

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
