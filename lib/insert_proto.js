/**
 * Inert into prototype chane.
 * @function insertProto
 * @param {object} target
 * @param {object} injection
 */

'use strict'

/** @lends insertProto */
function insertProto (target, injection) {
  injection.__proto__ = target.__proto__;
  target.__proto__ = injection;
}

module.exports = insertProto
