const curry = require('./curry')

test('Should apply curry', () => {
  const sum = curry((a, b) => a + b)
  expect(sum(1, 1)).toEqual(2)
  expect(sum(1)(1)).toEqual(2)
  expect(sum()(1)(1)).toEqual(2)
})