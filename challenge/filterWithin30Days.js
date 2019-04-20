const {
  gte,
  filter,
  useWith,
  prop,
  __
} = require('../lib')

const daysAgoInTs = (days) => new Date().getTime() - (86400000 * days)
const gteTo30Days = gte(__, daysAgoInTs(30))
const within30Days = useWith(gteTo30Days, [prop('published')])
const filterWithin30Days = filter(within30Days)

module.exports = filterWithin30Days