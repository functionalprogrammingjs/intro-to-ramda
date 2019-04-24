const {
  compose,
  map,
} = require('ramda')

const posts = require('./posts')
const sortByPublishedDate = require('./sortByPublishedDate')
const groupByTags = require('./groupByTags')

// groupAndSort :: [post] -> { [tag]: [post] }
const groupAndSort = compose(
  map(sortByPublishedDate),
  groupByTags,
)

console.log(groupAndSort(posts))
