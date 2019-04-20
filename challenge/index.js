const {
  pipe
} = require('../lib')

const posts = require('./posts')

const filterWithin30Days = require('./filterWithin30Days')
const groupByTags = require('./groupByTags')
const sortByPublishedDate = require('./sortByPublishedDate')

const challenge = pipe(
  filterWithin30Days,
  groupByTags,
  sortByPublishedDate
)

console.log(
  challenge(posts)
)