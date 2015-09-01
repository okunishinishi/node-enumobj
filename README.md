enumobj
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-enumobj
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-enumobj
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-enumobj.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-enumobj/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-enumobj
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-enumobj.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-enumobj.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-enumobj
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-enumobj.svg
[bd_npm_url]: http://www.npmjs.org/package/enumobj
[bd_npm_shield_url]: http://img.shields.io/npm/v/enumobj.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Define enum objects

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install enumobj --save
```

<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
Usage
-----

### Basic usage

```javascript
#!/usr/bin/env node

var enumobj = require('enumobj');

var levels = enumobj({
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    ERROR: 3,
    FATAL: 4
});

console.log(levels); // -> {TRACE: 0, DEBUG: 1, INFO: 2, ERROR: 3, FATAL: 4}

//--------------
// Get enum size
//--------------
console.log(levels.size()); // -> 5

//--------------
// Get a enum value
//--------------
console.log(levels.get("INFO")); // -> 2
console.log(levels.get("_UNKNOWN_")); // -> undefined

//--------------
// Check key contained
//--------------
console.log(levels.has("ERROR")); // -> true
console.log(levels.has("_UNKNOWN_")); // -> false

//--------------
// Get key for value
//--------------
console.log(levels.has(0)); // -> "TRACE"
console.log(levels.has(100)); // -> undefined

```


### Add Descriptions

```javascript
#!/usr/bin/env node

var enumobj = require('enumobj');

var roles = enumobj({
    ADMIN: {$val: 1, $desc: "Nothing is off limits."},
    STAFF: {$val: 2, $desc: "Can view admin area, but not edit."},
    CUSTOMER: {$val: 3, $desc: "Can not access admin area."}
});

console.log(roles); // -> {ADMIN: 1, STAFF: 2, CUSTOMER:3}

roles.get('ADMIN'); // -> 1
roles.desc('ADMIN'); // -> "Nothing is off limits."
```

<!-- Section from "docs/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-enumobj/blob/master/LICENSE).

<!-- LICENSE End -->


