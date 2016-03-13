/**
 * Define enum objects
 * @module enumobj
 * @version 2.1.0
 */

"use strict";

const Enumobj = require('./enumobj'),
    combine = require('./combine'),
    fromDesc = require('./from_desc'),
    create = require('./create');

let enumobj = create.bind(this);

enumobj.Enumobj = Enumobj;
enumobj.create = create;
enumobj.combine = combine;
enumobj.fromDesc = fromDesc;

module.exports = enumobj;


