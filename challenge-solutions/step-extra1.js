const {
  compose,
  map,
} = require('ramda')

const posts = require('../api/posts')
const groupByTags = require('./groupByTags')
const averageLikes = require('./averageLikes')

// averageLikesByTag :: [post] -> { [tag]: number }
const averageLikesByTag = compose(
  map(averageLikes),
  groupByTags,
)

console.log(averageLikesByTag(posts))
