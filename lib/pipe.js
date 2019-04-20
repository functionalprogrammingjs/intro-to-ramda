const flip = require('./flip')
const compose = require('./compose')
const pipe = flip(compose)

module.exports = pipe