const {
  compose,
  map,
  prop,
} = require('ramda')

const posts = require('../api/posts')
const groupByTags = require('./groupByTags')
const { arrayMaxBy } = require('./util')

// newest :: [post] -> post
const newest = arrayMaxBy(prop('published'))

const newestByTag = compose(
  map(newest),
  groupByTags,
)

console.log(newestByTag(posts))
