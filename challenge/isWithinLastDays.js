const {
  gte,
  compose,
  prop,
  __,
  useWith,
  curryN,
} = require('ramda')

// daysAgoInTimestamp :: Number -> timestamp
const daysAgoInTimestamp = days => new Date().getTime() - (60 * 60 * 24 * days)

// timestampWithinLastDays :: timestamp -> Boolean
const isTimestampWithinLastDays = days => gte(__, daysAgoInTimestamp(days))

// postWithinLastDays :: (days, post) -> Boolean
const isWithinLastDays = curryN(2, days =>
  compose(
    isTimestampWithinLastDays(days),
    prop('published'),
  )
)

module.exports = isWithinLastDays
