const curry = require('./curry')

const groupBy = curry((f, xs) => {
  return xs.reduce((grouped, item) => {
    const key = f(item)
    grouped[key] = (grouped[key] || []).concat(item)
    return grouped
  }, {})
})

module.exports = groupBy