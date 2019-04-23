const {
  converge,
  maxBy,
  minBy,
  useWith,
  curry,
  divide,
  sum,
  length,
} = require('ramda')

const fold = curry((fn, array) => array.reduce(fn))

const arrayMaxBy = useWith(fold, [maxBy])

const arrayMinBy = useWith(fold, [minBy])

const average = converge(divide, [sum, length])

module.exports = {
  arrayMaxBy,
  arrayMinBy,
  average,
}
