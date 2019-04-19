const lte = require('./lte')

test('Should compare lte', () => {
  expect(lte(5)(1)).toEqual(false)
  expect(lte(5)(10)).toEqual(true)
  expect(lte(115, 10)).toEqual(false)
})