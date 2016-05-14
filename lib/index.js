/**
 * Define enum objects
 * @module enumobj
 * @version 3.0.0
 */

'use strict'

const Enumobj = require('./enumobj')
const combine = require('./combine')
const fromDesc = require('./from_desc')
const create = require('./create')

let enumobj = create.bind(this)

Object.assign(enumobj, create, {
  Enumobj,
  create,
  combine,
  fromDesc
})

module.exports = enumobj
