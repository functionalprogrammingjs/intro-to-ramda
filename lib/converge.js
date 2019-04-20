const curry = require('./curry')

const converge = curry((f, branches) => {
  return (x) => {
    const args = branches.map((fx) => fx(x))
    return f(...args)
  }
})

module.exports = converge