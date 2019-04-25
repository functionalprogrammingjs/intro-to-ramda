const {
  prop,
} = require('ramda')

const posts = require('../api/posts')
const { arrayMaxBy } = require('./util')

// newest :: [post] -> post
const newest = arrayMaxBy(prop('published'))

console.log(newest(posts))
