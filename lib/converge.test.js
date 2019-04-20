const converge = require('./converge')

test('Should apply converge function', () => {
  const divide = (a, b) => a / b
  const length = (xs) => xs.length
  const sum = (xs) => xs.reduce((a, b) => a + b, 0)
  const average = converge(divide, [sum, length])
  expect(average([10, 10, 10])).toEqual(10)
})