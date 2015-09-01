/**
 * Define enum objects
 * @module enumobj
 * @version 1.0.1
 */

"use strict";

var Enumobj = require('./enumobj'),
    create = require('./create');

var enumobj = create.bind(this);

enumobj.Enumobj = Enumobj;
enumobj.create = create;

module.exports = enumobj;


