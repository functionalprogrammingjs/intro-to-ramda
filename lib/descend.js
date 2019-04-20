const inverse = require('./inverse')
const curryN = require('./curryN')
const ascend = require('./ascend')
const descend = curryN(inverse(ascend), 3)

module.exports = descend