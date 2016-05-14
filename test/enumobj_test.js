/**
 * Test for enumobj.
 * Runs with mocha.
 */
'use strict'

const Enumobj = require('../lib/enumobj'),
  assert = require('assert')

describe('enumobj', () => {
  it('Create enumobj.', (done) => {
    assert.ok(Enumobj)

    let userRoles = new Enumobj({
      ADMIN: { $val: 1, $desc: "Nothing is off limits." },
      STAFF: { $val: 2, $desc: "Can view admin area, but not edit." },
      CUSTOMER: { $val: 3, $desc: "Can not access admin area." }
    })
    assert.equal(userRoles.size(), 3)
    assert.equal(userRoles.meta('STAFF')[ '$key' ], 'STAFF')
    assert.equal(userRoles.desc('ADMIN'), "Nothing is off limits.")
    assert.equal(userRoles.get('ADMIN'), userRoles.ADMIN)
    assert.equal(userRoles.get(1), userRoles.ADMIN)
    assert.equal(userRoles.keyForValue(3), "CUSTOMER")
    assert.equal(userRoles.has('admin'), false)
    assert.equal(userRoles.has('ADMIN'), true)

    assert.deepEqual(userRoles.keys(), [ 'ADMIN', 'STAFF', 'CUSTOMER' ])
    assert.deepEqual(userRoles.values(), [ 1, 2, 3 ])

    let json = JSON.stringify(userRoles)
    assert.equal(json, '{"ADMIN":1,"STAFF":2,"CUSTOMER":3}')
    done()
  })
})

/* global describe, before, after, it */

