/**
 * Create a new Enumobj instance.
 * @function create
 */

'use strict'

const Enumobj = require('./enumobj')

/** @lends create */
function create (config) {
  return new Enumobj(config)
}

module.exports = create
