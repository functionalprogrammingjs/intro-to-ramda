const curry = require('./curry')
const gte = curry((x, y) => x >= y)

module.exports = gte