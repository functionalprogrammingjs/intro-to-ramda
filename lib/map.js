const curry = require('./curry')

const mapObj = (f, o) => {
  return Object.entries(o).reduce((mapped, [key, val]) => {
    mapped[key] = f(val)
    return mapped
  }, {})
}

const map = curry((f, x) => Array.isArray(x) ? x.map(f) : mapObj(f, x))


module.exports = map