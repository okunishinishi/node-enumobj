/**
 * Define enum objects
 * @module enumobj
 * @version 2.0.4
 */

"use strict";

const Enumobj = require('./enumobj'),
    combine = require('./combine'),
    create = require('./create');

let enumobj = create.bind(this);

enumobj.Enumobj = Enumobj;
enumobj.create = create;
enumobj.combine = combine;

module.exports = enumobj;


