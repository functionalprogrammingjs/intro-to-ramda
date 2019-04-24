const {
  compose,
  map,
} = require('ramda')

const posts = require('./posts')
const groupByTags = require('./groupByTags')
const { averageScore } = require('./scores')

// averageScoreByTag :: [post] -> { [tag]: number }
const averageScoreByTag = compose(
  map(averageScore),
  groupByTags,
)

console.log(averageScoreByTag(posts))
