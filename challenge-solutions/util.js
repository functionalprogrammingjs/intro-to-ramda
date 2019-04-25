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

// fold :: (b -> a -> b) -> [a] -> b
const fold = curry((fn, array) => array.reduce(fn))

// arrayMaxBy :: (a -> b) -> [a] -> a
const arrayMaxBy = useWith(fold, [maxBy])

// arrayMinBy :: (a -> b) -> [a] -> a
const arrayMinBy = useWith(fold, [minBy])

// average :: [num] -> num
const average = converge(divide, [sum, length])

module.exports = {
  arrayMaxBy,
  arrayMinBy,
  average,
}
