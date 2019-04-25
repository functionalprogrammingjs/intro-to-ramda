const {
  compose,
  pluck,
} = require('ramda')

const { average } = require('./util')

// averageLikes :: [post] -> number
const averageLikes = compose(
  average,
  pluck('likes'),
)

module.exports = averageLikes
