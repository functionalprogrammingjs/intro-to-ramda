const {
  compose,
  map,
  subtract,
  converge,
} = require('ramda')

const posts = require('./posts')
const groupByTags = require('./groupByTags')
const averageLikes = require('./averageLikes')

// averageLikesByTag :: [post] -> { [tag]: number }
const averageLikesByTag = compose(
  map(averageLikes),
  groupByTags,
)

// scoreDeviationByTag :: [post] -> { [tag]: number }
const likesDeviationByTag = converge(
  map,
  [
    compose(subtract, averageLikes),
    averageLikesByTag,
  ],
)

console.log(likesDeviationByTag(posts))
