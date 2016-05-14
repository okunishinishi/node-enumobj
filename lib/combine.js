/**
 * @function combine
 */
'use strict'

const create = require('./create')

/** @lends combine */
function combine (values) {
  values = [ {} ].concat(Array.prototype.slice.call(arguments, 0))
  return create(Object.assign.apply(Object, values))
}

module.exports = combine
