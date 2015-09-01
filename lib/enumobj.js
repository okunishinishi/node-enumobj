/**
 * Enum object context.
 * @constructor Enumobj
 * @param {object} config - Enum config.
 * @example
 *  var userRoles = new Enumobj({
 *      ADMIN: {$val: 1, $desc: "Nothing is off limits."},
 *      STAFF: {$val: 2, $desc: "Can view admin area, but not edit."},
 *      CUSTOMER: {$val: 1, $desc: "Can not access admin area."}
 *  });
 *
 */

"use strict";

var enumMeta = require('./enum_meta'),
    insertProto = require('./insert_proto');

/** @lends Enumobj */
function Enumobj(config) {
    var s = this;
    var meta = enumMeta(config);
    insertProto(s, {
        $meta: meta
    });
    Object.keys(meta).forEach(function (key) {
        s[key] = meta[key]['$val'];
    });
    Object.freeze(s);
}
Enumobj.meta = function () {

};
Enumobj.prototype = {
    /**
     * Has a key or not.
     * @param {string} key - Key of enum value.
     * @returns {boolean} - Has or not.
     */
    has: function (key) {
        var s = this;
        return !!~s.keys().indexOf(key);
    },
    /**
     * Get keys of this enum.
     * @returns {string[]} - Enum keys.
     */
    keys: function () {
        var s = this;
        return Object.keys(s);
    },
    /**
     * Key for value.
     * @param {*} val - Value to find.
     * @returns {?string} - Found key.
     */
    keyForValue: function (val) {
        var s = this,
            keys = s.keys();
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i],
                hit = s[key] == val;
            if (hit) {
                return key;
            }
        }
        return undefined;
    },
    /**
     * Get values of this enum.
     * @returns {Array} - Enum values.
     */
    values: function () {
        var s = this;
        return s.keys.map(function (key) {
            return s[key];
        });
    },
    /**
     * Get a enum entry.
     * @param {string} key - Key to get.
     * @returns {string|number} - Value for key.
     */
    get: function (key) {
        var s = this;
        return s[key];
    },
    /**
     * Get enum size.
     * @returns {number} - Enum length.
     */
    size: function () {
        var s = this;
        return s.keys().length;
    },
    /**
     * Get meta dat for this enum.
     * @param {string} key - Key for meta.
     * @returns {object} object - Enum meta data.
     */
    meta: function (key) {
        var s = this;
        return s.$meta[key];
    },
    /**
     * Get description
     * @param {string} key - Key for description.
     * @returns {string} - Descriptions.
     */
    desc: function (key) {
        var s = this;
        return s.meta(key)['$desc'];
    }
};


module.exports = Enumobj;