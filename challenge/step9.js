const {
  compose,
  map,
  subtract,
  converge,
} = require('ramda')

const posts = require('./posts')
const groupByTags = require('./groupByTags')
const { averageScore } = require('./scores')

// averageScoreByTag :: [post] -> { [tag]: number }
const averageScoreByTag = compose(
  map(averageScore),
  groupByTags,
)

// scoreDeviationByTag :: [post] -> { [tag]: number }
const scoreDeviationByTag = converge(
  map,
  [
    compose(subtract, averageScore),
    averageScoreByTag,
  ],
)

console.log(scoreDeviationByTag(posts))
