/**
 * Test case for insertProto.
 * Runs with nodeunit.
 */

var insertProto = require('../lib/insert_proto.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Insert proto'] = function (test) {
    var data = {
        foo: 'bar',
        __proto__: {
            quz: 'quzz'
        }
    };
    insertProto(data, {
        baz: 'quz'
    });
    test.equal(data.foo, 'bar');
    test.equal(data.baz, 'quz');
    test.equal(data.quz, 'quzz');
    test.equal(data.hasOwnProperty("foo"), true);
    test.equal(data.hasOwnProperty("baz"), false);
    test.equal(data.hasOwnProperty("quz"), false);
    test.done();
};

