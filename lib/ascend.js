const curry = require('./curry')

const ascend = curry((f, x, y) => {
  const xA = f(x)
  const yA = f(y)
  return xA > yA ? 1 : xA < yA ? -1 : 0
})

module.exports = ascend