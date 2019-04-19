const curryN = require('./curryN')
const curry = (f) => curryN(f, f.length)
module.exports = curry