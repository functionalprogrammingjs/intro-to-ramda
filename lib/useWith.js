const curry = require('./curry')

const useWith = curry((f, transforms) => {
  return (...args) => {
    const transformedArgs = args.map((arg, i) => transforms[i] ? transforms[i](arg) : arg)
    return f(...transformedArgs)
  }
})


module.exports = useWith