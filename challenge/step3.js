const {
  filter,
} = require('ramda')

const posts = require('./posts')
const isWithinLastDays = require('./isWithinLastDays')

// recent :: [post] -> [post]
const recent = filter(isWithinLastDays(30))

console.log(recent(posts))
