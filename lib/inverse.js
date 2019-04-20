const inverse = (f) => {
  return (...args) => {
    const result = f(...args)
    return result === 0 ? result : result * -1
  }
}

module.exports = inverse