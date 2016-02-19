/**
 * Test case for insertProto.
 * Runs with mocha.
 */
"use strict";

const insertProto = require('../lib/insert_proto.js'),
    assert = require('assert');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

it('Insert proto', (done) => {
    var data = {
        foo: 'bar',
        __proto__: {
            quz: 'quzz'
        }
    };
    insertProto(data, {
        baz: 'quz'
    });
    assert.equal(data.foo, 'bar');
    assert.equal(data.baz, 'quz');
    assert.equal(data.quz, 'quzz');
    assert.equal(data.hasOwnProperty("foo"), true);
    assert.equal(data.hasOwnProperty("baz"), false);
    assert.equal(data.hasOwnProperty("quz"), false);
    done();
});

