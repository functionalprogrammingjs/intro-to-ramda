const {
  converge,
  compose,
  sum,
  negate,
  prop,
  unapply,
  map,
} = require('ramda')

const { average } = require('./util')

// likes :: post -> number
const likes = prop('likes')

// dislikes :: post -> number
const dislikes = prop('dislikes')

// getScore :: post -> number
const getScore = converge(
  unapply(sum),
  [
    likes,
    compose(negate, dislikes),
  ]
)

// averageScore :: [post] -> number
const averageScore = compose(
  average,
  map(getScore),
)

module.exports = {
  getScore,
  averageScore,
}
