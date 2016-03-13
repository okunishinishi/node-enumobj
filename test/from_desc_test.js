/**
 * Test case for fromDesc.
 * Runs with mocha.
 */
"use strict";

const fromDesc = require('../lib/from_desc.js'),
    assert = require('assert');

describe('from-desc', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('From desc', (done) => {
        let data = fromDesc({
            foo: 'This is foo'
        });
        assert.ok(data.has('foo'));
        assert.deepEqual(data.toJSON(), {
            foo: 'foo'
        });
        assert.equal(data.desc('foo'), 'This is foo');
        done();
    });
});

