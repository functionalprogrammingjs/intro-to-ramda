const curry = require('./curry')
const lte = curry((x, y) => x <= y)

module.exports = lte