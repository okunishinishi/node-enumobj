/**
 * Test case for enumMeta.
 * Runs with mocha.
 */
'use strict'

const enumMeta = require('../lib/enum_meta.js'),
  assert = require('assert')

it('Enum meta', (done) => {
  var meta = enumMeta({
    foo: 'bar'
  })
  assert.equal(meta.foo.$val, 'bar')
  done()
})

it('Validate meta.', (done) => {
  assert.throws(() => {
    enumMeta.validate({
      foo: { $val: 1 },
      bar: { $val: 1 }
    })
  })
  done()
})

/* global describe, before, after, it */
