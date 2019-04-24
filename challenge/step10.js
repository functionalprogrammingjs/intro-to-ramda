const {
  prop,
} = require('ramda')

const posts = require('./posts')
const { arrayMaxBy } = require('./util')

// newest :: [post] -> post
const newest = arrayMaxBy(prop('published'))

console.log(newest(posts))
