/**
 * Test case for combine.
 * Runs with mocha.
 */
'use strict'

const combine = require('../lib/combine.js')
const assert = require('assert')

describe('combine', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Combine', (done) => {
    let combined = combine({
      HOO: 'This is foo'
    }, {
      BAR: 'This is bar'
    })
    assert.deepEqual(combined.toJSON(), {
      HOO: 'This is foo', BAR: 'This is bar'
    })
    done()
  })
})

/* global describe, before, after, it */
