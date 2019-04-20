const sort = require('./sort')

test('Should sort items', () => {
  expect(sort((a, b) => a - b)([2, 3, 1])).toEqual([1, 2, 3])
  expect(sort((a, b) => b - a)([2, 3, 1])).toEqual([3, 2, 1])
})