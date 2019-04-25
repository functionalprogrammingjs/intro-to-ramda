const {
  compose,
  map,
  filter,
} = require('ramda')

const posts = require('../api/posts')
const sortByPublishedDate = require('./sortByPublishedDate')
const groupByTags = require('./groupByTags')
const isWithinLastDays = require('./isWithinLastDays')

// groupAndSortRecent :: [post] -> { [tag]: [post] }
const groupAndSortRecent = compose(
  map(sortByPublishedDate),
  groupByTags,
  filter(isWithinLastDays(30)),
)

console.log(groupAndSortRecent(posts))
