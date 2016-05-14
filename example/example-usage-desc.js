#!/usr/bin/env node
'use strict'

const enumobj = require('enumobj')

let roles = enumobj({
  ADMIN: { $val: 1, $desc: "Nothing is off limits." },
  STAFF: { $val: 2, $desc: "Can view admin area, but not edit." },
  CUSTOMER: { $val: 3, $desc: "Can not access admin area." }
})

console.log(roles) // -> {ADMIN: 1, STAFF: 2, CUSTOMER:3}

console.log(roles.get('ADMIN')) // -> 1
console.log(roles.desc('ADMIN')) // -> "Nothing is off limits."