const curryN = (f, n) => {
  return function curried(...args) {
    return args.length >= n ?
      f(...args) :
      (...rest) => curried(
        ...args.concat(rest).slice(0, n)
      )
  }
}

module.exports = curryN