/**
 * Test case for enumMeta.
 * Runs with nodeunit.
 */

var enumMeta = require('../lib/enum_meta.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Enum meta'] = function (test) {
    var meta = enumMeta({
        foo: 'bar'
    });
    test.equal(meta.foo.$val, 'bar');
    test.done();
};

exports['Validate meta.'] = function (test) {
    test.throws(function () {
        enumMeta.validate({
            foo: {$val: 1},
            bar: {$val: 1}
        });
    });
    test.done();
};