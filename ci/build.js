#!/usr/bin/env node

/**
 * Build this project.
 */
"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeCompiling = require('ape-compiling'),
    coz = require('coz');

apeTasking.runTasks('build', [
    function (callback) {
        coz.render([
            '.*.bud',
            'docs/**/.*.bud',
            'lib/.*.bud',
            'test/.*.bud'
        ], callback);
    },
    function browsify(callback) {
        var src = require.resolve('../lib'),
            dest = 'browser/enumobj.js';
        apeCompiling.renderBrowserScript(src, dest, {
            as: 'enumobj'
        }, callback);
    }
], true);

