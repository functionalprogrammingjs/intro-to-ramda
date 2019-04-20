const {
  __,
  prop,
  converge,
  identity,
  chain,
  map,
  assoc,
  pipe,
  groupBy
} = require('../lib')

// postsByTags :: (post, [tags]) -> [posts]
const postsByTags = (post, tags) => map(assoc('tag', __, post), tags)

// postsWithTag :: post -> [posts]
const postsWithTag = converge(postsByTags, [identity, prop('tags')])

// groupByTags :: [post] -> { [tag]: [post]}
const groupByTags = pipe(
  chain(postsWithTag),
  groupBy(prop('tag'))
)

module.exports = groupByTags