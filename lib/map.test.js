const map = require('./map')

test('Should apply the function for each item and return a new object', () => {
  const plus = n => n + 1
  expect(map(plus, [1, 2, 3])).toEqual([2, 3, 4])

  expect(map(plus, {
    a: 1,
    b: 2
  })).toEqual({
    a: 2,
    b: 3
  })
})