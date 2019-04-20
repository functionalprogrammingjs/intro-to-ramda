const curry = require('./curry')
const sort = curry((comparator, xs) => [...xs].sort(comparator))

module.exports = sort