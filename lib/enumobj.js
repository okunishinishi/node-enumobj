/**
 * Enum object.
 * @function enumobj
 * @param {object} config - Enum config.
 * @example
 *  var levels = enumobj({
 *      DEBUG : "fine-grained informational events that are most useful to debug an application."
 *      INFO : "informational messages that highlight the progress of the application at coarse-grained level."
 *      WARN : "potentially harmful situations."
 *      ERROR : "error events that might still allow the application to continue running."
 *      TRACE : "finer-grained informational events than the DEBUG"
 *      FATAL : "very severe error events that will presumably lead the application to abort."
 *  });
 *
 */

"use strict";

/**
 * An enumobj context.
 * @constructor Enumobj
 */
function Enumobj(config) {
    var s = this;
    if (!config) {
        throw new Error('Config is required.');
    }
    var meta = {};
    Object.keys(config).forEach(function (key, i) {
        s[key] = {
            desc: config[key],
            key: key,
            val: i
        }
    });
    var proto = s.__proto__;
    s.__proto__ = {
        __proto__: proto
    };
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
     * @returns {string[]}
     */
    keys: function () {
        var s = this;
        return Object.keys(s);
    },
    /**
     * Get a enum entry.
     * @param {string} key - Key to get.
     */
    get: function (key) {
        var s = this;
        return s[key];
    },
    length: function () {
        var s = this;
        return s.keys().length;
    }
};

/** @lends enumobj */
function enumobj(config) {
    return new Enumobj(config);
}

module.exports = enumobj;