/**
 * Test for enumobj.
 * Runs with nodeunit.
 */
"use strict";

var Enumobj = require('../lib/enumobj');


exports['Create enumobj.'] = function (test) {
    test.ok(Enumobj);

    var userRoles = new Enumobj({
        ADMIN: {$val: 1, $desc: "Nothing is off limits."},
        STAFF: {$val: 2, $desc: "Can view admin area, but not edit."},
        CUSTOMER: {$val: 3, $desc: "Can not access admin area."}
    });
    test.equal(userRoles.size(), 3);
    test.equal(userRoles.meta('STAFF')['$key'], 'STAFF');
    test.equal(userRoles.desc('ADMIN'), "Nothing is off limits.");
    test.equal(userRoles.get('ADMIN'), userRoles.ADMIN);
    test.equal(userRoles.keyForValue(3), "CUSTOMER");
    test.equal(userRoles.has('admin'), false);
    test.equal(userRoles.has('ADMIN'), true);
    test.done();
};


