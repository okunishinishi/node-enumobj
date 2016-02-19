/**
 * Test for enumobj.
 * Runs with mocha.
 */
"use strict";

const Enumobj = require('../lib/enumobj'),
    assert = require('assert');


it('Create enumobj.', (done) => {
    assert.ok(Enumobj);

    var userRoles = new Enumobj({
        ADMIN: {$val: 1, $desc: "Nothing is off limits."},
        STAFF: {$val: 2, $desc: "Can view admin area, but not edit."},
        CUSTOMER: {$val: 3, $desc: "Can not access admin area."}
    });
    assert.equal(userRoles.size(), 3);
    assert.equal(userRoles.meta('STAFF')['$key'], 'STAFF');
    assert.equal(userRoles.desc('ADMIN'), "Nothing is off limits.");
    assert.equal(userRoles.get('ADMIN'), userRoles.ADMIN);
    assert.equal(userRoles.keyForValue(3), "CUSTOMER");
    assert.equal(userRoles.has('admin'), false);
    assert.equal(userRoles.has('ADMIN'), true);
    done();
});


