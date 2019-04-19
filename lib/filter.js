const curry = require('./curry')

const filter = curry((predicate, xs) => xs.filter(predicate))

module.exports = filter