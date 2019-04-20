const curry = require('./curry')

const chain = curry((f, xs) =>
  xs.reduce((mapped, x) => mapped.concat(f(x)), [])
)

module.exports = chain