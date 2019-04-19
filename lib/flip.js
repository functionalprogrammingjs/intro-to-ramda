const flip = (f) => (...args) => f(...args.reverse())

module.exports = flip