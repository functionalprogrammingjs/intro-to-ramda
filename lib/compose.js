const identity = require('./identity')
const compose2 = (f, g) => x => f(g(x))

const compose = (...fns) => fns.reduce(compose2, identity)

module.exports = compose