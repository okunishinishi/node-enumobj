/**
 * Test case for create.
 * Runs with mocha.
 */
"use strict";

const create = require('../lib/create.js'),
    assert = require('assert');

it('Create', (done) => {
    assert.ok(create);
    done();
});

