/**
 * Enum object context.
 * @constructor Enumobj
 * @param {object} config - Enum config.
 * @example
 *  let userRoles = new Enumobj({
 *      ADMIN: {$val: 1, $desc: "Nothing is off limits."},
 *      STAFF: {$val: 2, $desc: "Can view admin area, but not edit."},
 *      CUSTOMER: {$val: 1, $desc: "Can not access admin area."}
 *  })
 *
 */

'use strict'

const enumMeta = require('./enum_meta')
const insertProto = require('./insert_proto')

/** @lends Enumobj */
function Enumobj (config) {
  const s = this
  let meta = enumMeta(config)
  insertProto(s, {
    $meta: meta
  })
  Object.keys(meta).forEach(key => {
    s[ key ] = meta[ key ][ '$val' ];
  })
  Object.freeze(s)
}
Enumobj.meta = function () {

}
Enumobj.prototype = {
  /**
   * Has a key or not.
   * @param {string} key - Key of enum value.
   * @returns {boolean} - Has or not.
   */
  has(key) {
    const s = this
    return !!~s.keys().indexOf(key)
  },
  /**
   * Get keys of this enum.
   * @returns {string[]} - Enum keys.
   */
  keys() {
    const s = this
    return Object.keys(s)
  },
  /**
   * Key for value.
   * @param {*} val - Value to find.
   * @returns {?string} - Found key.
   */
  keyForValue(val) {
    let s = this,
      keys = s.keys()
    for (let i = 0, len = keys.length; i < len; i++) {
      let key = keys[ i ],
        hit = s[ key ] == val;
      if (hit) {
        return key;
      }
    }
    return null;
  },
  /**
   * Get value for key.
   * @param {string} key - Key of the value.
   * @returns {*} - Found value.
   */
  valueForKey(key){
    const s = this
    return s[ key ];
  },
  /**
   * Get values of this enum.
   * @returns {Array} - Enum values.
   */
  values() {
    const s = this
    return s.keys().map(key => s[ key ])
  },
  /**
   * Get a enum entry.
   * @param {string|number} keyOrValue - Key to get.
   * @returns {?string|number} - Value for keyOrValue.
   */
  get(keyOrValue) {
    const s = this
    if (s.has(keyOrValue)) {
      return s.valueForKey(keyOrValue)
    }
    let key = s.keyForValue(keyOrValue)
    if (key) {
      return s.valueForKey(key)
    }
    return null;
  },
  /**
   * Get enum size.
   * @returns {number} - Enum length.
   */
  size() {
    const s = this
    return s.keys().length
  },
  /**
   * Get meta dat for this enum.
   * @param {string} key - Key for meta.
   * @returns {object} object - Enum meta data.
   */
  meta(key) {
    const s = this
    return s.$meta[ key ]
  },
  /**
   * Get description
   * @param {string} key - Key for description.
   * @returns {string} - Descriptions.
   */
  desc(key) {
    const s = this
    return s.meta(key)[ '$desc' ]
  },
  /**
   * Covert to json.
   * @returns {*}
   */
  toJSON(){
    const s = this
    return Object.assign({}, s)
  }
}

module.exports = Enumobj
