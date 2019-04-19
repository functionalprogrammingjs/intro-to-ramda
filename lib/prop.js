const curry = require('./curry')

const prop = curry((k, o) => o[k])

module.exports = prop