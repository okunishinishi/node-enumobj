/**
 * Define enum objects
 * @module enumobj
 * @version 2.0.0
 */

"use strict";

const Enumobj = require('./enumobj'),
    create = require('./create');

let enumobj = create.bind(this);

enumobj.Enumobj = Enumobj;
enumobj.create = create;

module.exports = enumobj;


