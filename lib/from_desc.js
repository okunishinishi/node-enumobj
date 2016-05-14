/**
 * Create enum from descriptions.
 * @function fromDesc
 */
'use strict'

const create = require('./create')

/** @lends fromDesc */
function fromDesc (desc) {
  let data = {}
  for (let key of Object.keys(desc)) {
    data[ key ] = { $val: String(key), $desc: desc[ key ] }
  }
  return create(data)
}

module.exports = fromDesc
