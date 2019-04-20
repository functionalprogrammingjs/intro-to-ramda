const curry = require('./curry')
const __ = require('./__')

test('Should apply curry', () => {
  const sum = curry((a, b) => a + b)
  expect(sum(1, 1)).toEqual(2)
  expect(sum(1)(1)).toEqual(2)
  expect(sum()(1)(1)).toEqual(2)
})

test('Should apply curry with placeholder', () => {
  const gte = curry((a, b) => a >= b)
  expect(gte(2, 1)).toEqual(true)
  expect(gte(2)(1)).toEqual(true)
  expect(gte(__, 2)(3)).toEqual(true)
})