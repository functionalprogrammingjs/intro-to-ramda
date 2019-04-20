const posts = require('./posts')
const filterWithin30Days = require('./filterWithin30Days')

console.log(
  filterWithin30Days(posts)
)