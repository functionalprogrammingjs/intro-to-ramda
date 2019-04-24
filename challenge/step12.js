const {
  compose,
  map,
  prop,
  applySpec,
} = require('ramda')

const posts = require('./posts')
const groupByTags = require('./groupByTags')
const { arrayMaxBy, arrayMinBy } = require('./util')

// newest :: [post] -> post
const newest = arrayMaxBy(prop('published'))

// oldest :: [post] -> post
const oldest = arrayMinBy(prop('published'))

// newestAndOldest :: [post] -> { newest: post, oldest: post }
const newestAndOldest = applySpec({ newest, oldest })

// newestAndOldestByTag :: [post] -> { [tag]: { newest: post, oldest: post } }
const newestAndOldestByTag = compose(
  map(newestAndOldest),
  groupByTags,
)

console.log(newestAndOldestByTag(posts))
