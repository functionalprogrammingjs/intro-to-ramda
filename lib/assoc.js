const curry = require('./curry')

const assoc = curry((key, val, obj) => {
  return {
    ...obj,
    [key]: val
  }
})

module.exports = assoc