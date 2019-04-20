const chain = require('./chain')

test('Should apply map and flatten items', () => {
  const src = [1, 2, 3]
  const duplicate = (n) => [n, n]
  expect(chain(duplicate, src)).toEqual([1, 1, 2, 2, 3, 3])
})