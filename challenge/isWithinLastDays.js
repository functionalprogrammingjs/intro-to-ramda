const {
  gte,
  compose,
  prop,
  __,
  curry,
} = require('ramda')

// daysAgoInTimestamp :: Number -> timestamp
const daysAgoInTimestamp = days => Date.now() - (1000 * 60 * 60 * 24 * days)

// timestampWithinLastDays :: timestamp -> Boolean
const isTimestampWithinLastDays = days => gte(__, daysAgoInTimestamp(days))

// postWithinLastDays :: (days, post) -> Boolean
const isWithinLastDays = curry((days, post) =>
  compose(
    isTimestampWithinLastDays(days),
    prop('published'),
  )(post)
)

module.exports = isWithinLastDays
