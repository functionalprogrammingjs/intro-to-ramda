const {
  toUpper,
  head,
  map,
  compose,
  prop,
} = require('ramda')

const posts = require('./posts')

// upperCaseFirstTag :: post -> string
const upperCaseFirstTag = compose(
  toUpper,
  head,
  prop('tags'),
)

// upperCaseFirstTags :: [post] -> [string]
const upperCaseFirstTags = map(upperCaseFirstTag)

console.log(upperCaseFirstTags(posts))
