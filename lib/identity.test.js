const identity = require('./identity')

test('Should return the same data', () => {
  const xs = []
  expect(identity(1)).toEqual(1)
  expect(identity(xs)).toEqual(xs)
})