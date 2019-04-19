const filter = require('./filter')

test('Should filter pair items', () => {
  const expected = [2, 4, 6]
  const isPair = (n) => n % 2 === 0
  expect(filter(isPair)([1, 2, 3, 4, 5, 6])).toEqual(expected)
  expect(filter(isPair, [1, 2, 3, 4, 5, 6])).toEqual(expected)
})