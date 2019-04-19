const curryN = require('./curryN')

test('Should apply curry for n parameters', () => {
  const sum = (...args) => args.reduce((a, b) => a + b, 0)
  const sum2 = curryN(sum, 2)
  expect(sum2(1)(2)).toEqual(3)
  expect(sum2(1, 2)).toEqual(3)
  expect(sum2(1)(2, 4)).toEqual(3)
})