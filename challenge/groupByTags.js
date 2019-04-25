const {
  __,
  compose,
  prop,
  converge,
  assoc,
  chain,
  map,
  omit,
  groupBy,
} = require('ramda')

// postsByTags :: (post, [tags]) -> [posts]
const postsByTags = (post, tags) => map(assoc('tag', __, post), tags)

// repeatWithEachTag :: post -> [posts]
const repeatWithEachTag = converge(postsByTags, [identity, prop('tags')])

// groupByTags :: [post] -> { [tag]: [post] }
const groupByTags = compose(
  map(map(omit(['tag']))),
  groupBy(prop('tag')),
  chain(repeatWithEachTag),
)

module.exports = groupByTags
