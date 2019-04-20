const {
  gte,
  filter,
  useWith,
  prop,
  __
} = require('../lib')

// daysAgoInTs :: Number -> timestamp
const daysAgoInTs = (days) => new Date().getTime() - (86400000 * days)

// gteTo30Days :: timestamp -> Boolean
const gteTo30Days = gte(__, daysAgoInTs(30))

// within30Days :: post -> Boolean
const within30Days = useWith(gteTo30Days, [prop('published')])

// filterWithin30Days :: [post] -> [post]
const filterWithin30Days = filter(within30Days)

module.exports = filterWithin30Days