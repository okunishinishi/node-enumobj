/**
 * Define enum meta value.
 * @function enumMeta
 * @param {object} config
 */

"use strict";

var util = require('util');

/** @lends enumMeta */
function enumMeta(config) {
    if (!config) {
        throw new Error('Config is required.');
    }
    var meta = {};
    Object.keys(config).forEach(function (key) {
        var entry = config[key];
        switch (typeof(entry)) {
            case 'number':
            case 'string':
                var val = entry;
                entry = {
                    $val: val,
                    $desc: util.format('Entry with value "%s"', val)
                };
                break;
            default:
                break;
        }
        entry.$key = key;
        meta[key] = entry;
    });
    enumMeta.validate(meta);
    return meta;
}

enumMeta.validate = function (meta) {
    var keys = Object.keys(meta),
        values = [];
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i],
            val = meta[key]['$val'];
        var duplicate = !!~values.indexOf(val);
        if (duplicate) {
            throw new Error('Duplicate entry value: ' + val);
        }
        values.push(val);
    }
};

module.exports = enumMeta;
