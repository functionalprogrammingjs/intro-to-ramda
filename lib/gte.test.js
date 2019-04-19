const gte = require('./gte')

test('Should compare gte', () => {
  expect(gte(5)(1)).toEqual(true)
  expect(gte(5)(10)).toEqual(false)
  expect(gte(115, 10)).toEqual(true)
})