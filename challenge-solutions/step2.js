const {
  chain,
  prop,
  uniq,
  compose,
} = require('ramda')

const posts = require('../api/posts')

// allTags :: [post] -> [string]
const allTags = chain(prop('tags'))

// allUniqueTags :: [post] -> [string]
const allUniqueTags = compose(
  uniq,
  allTags,
)

console.log(allUniqueTags(posts))
