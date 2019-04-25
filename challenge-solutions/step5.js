const {
  compose,
  filter,
} = require('ramda')

const posts = require('./posts')
const isWithinLastDays = require('./isWithinLastDays')
const sortByPublishedDate = require('./sortByPublishedDate')

// recent :: [post] -> [post]
const recent = compose(
  sortByPublishedDate,
  filter(isWithinLastDays(30)),
)

console.log(recent(posts))
