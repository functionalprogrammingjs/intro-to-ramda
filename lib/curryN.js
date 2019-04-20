const __ = require('./__')

const curryN = (f, n) => {
  return function curried(...args) {
    return __.hasAllArgs(args, n) ?
      f(...__.handleArgs(args, n)) :
      (...rest) => curried(...args.concat(rest))
  }
}

module.exports = curryN