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

// repeatWithEachTag :: post -> [posts]
const repeatWithEachTag = converge(
  map,
  [post => assoc('tag', __, post), prop('tags')],
)

// groupByTags :: [post] -> { [tag]: [post] }
const groupByTags = compose(
  map(map(omit(['tag']))),
  groupBy(prop('tag')),
  chain(repeatWithEachTag),
)

module.exports = groupByTags
