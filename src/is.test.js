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
