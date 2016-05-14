#!/usr/bin/env node

'use strict'

const enumobj = require('enumobj')

let levels = enumobj({
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  ERROR: 3,
  FATAL: 4
})

console.log(levels) // -> {TRACE: 0, DEBUG: 1, INFO: 2, ERROR: 3, FATAL: 4}

function doSomething (level) {
  switch (level) {
    case levels.TRACE:
      /* ... */
      break;
    default:
      break;
  }
}

//--------------
// Get enum size
//--------------
console.log(levels.size()) // -> 5

//--------------
// Get a enum value
//--------------
console.log(levels.INFO) // -> 2
console.log(levels.get("INFO")) // -> 2
console.log(levels.get("_UNKNOWN_")) // -> undefined

//--------------
// Check key contained
//--------------
console.log(levels.has("ERROR")) // -> true
console.log(levels.has("_UNKNOWN_")) // -> false

//--------------
// Get key for value
//--------------
console.log(levels.has(0)) // -> "TRACE"
console.log(levels.has(100)) // -> undefined
