const posts = require('./posts')
const filterWithin30Days = require('./filterWithin30Days')
const groupByTags = require('./groupByTags')

console.log(
  filterWithin30Days(posts),
  '------------------------------------',
  groupByTags(posts)
)