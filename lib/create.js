/**
 * Create a new Enumobj instance.
 * @function create
 */

"use strict";

let Enumobj = require('./enumobj');

/** @lends create */
function create(config) {
    return new Enumobj(config);
}

module.exports = create;