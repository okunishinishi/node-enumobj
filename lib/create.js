/**
 * Create a new Enumobj instance.
 * @function create
 * @param {object} config
 * @returns {Enumobj} - A enumobj instance.
 */

"use strict";

var Enumobj = require('./enumobj');

/** @lends create */
function create(config) {
    return new Enumobj(config);
}

module.exports = create;