const inverse = require('./inverse')
const identity = require('./identity')

test('Should return the inverse number', () => {
  const toInverse = inverse(identity, 1)
  expect(toInverse(1)).toEqual(-1)
  expect(toInverse(-1)).toEqual(1)
  expect(toInverse(0)).toEqual(0)
})