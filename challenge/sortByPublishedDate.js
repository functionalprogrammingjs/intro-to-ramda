const {
  prop,
  descend,
  ascend,
  sortWith,
} = require('ramda')

// sortByPublishedDate :: [post] -> [post]
const sortByPublishedDate = sortWith([
  descend(prop('published')),
  ascend(prop('title'))
])

module.exports = sortByPublishedDate
