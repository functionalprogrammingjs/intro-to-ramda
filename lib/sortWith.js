const curry = require('./curry')
const sort = require('./sort')

const sortWith = curry((comparators, xs) => {
  return sort((x, y) => {
    let result = 0;
    let i = 0;
    while (result === 0 && i < comparators.length) {
      result = comparators[i](x, y);
      i += 1;
    }
    return result;
  }, xs)
})

module.exports = sortWith