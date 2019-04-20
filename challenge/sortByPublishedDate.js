const {
  prop,
  descend,
  ascend,
  sortWith,
  map
} = require('../lib')

// sortPosts :: [post] -> [post]
const sortPosts = sortWith([
  descend(prop('published')),
  ascend(prop('title'))
])

// sortGroupedByTags :: { tag: [post]} -> { tag: [post]}
const sortGroupedByTags = map(sortPosts)

module.exports = sortGroupedByTags