const descend = require('./descend')
const identity = require('./identity')

test('Should compare items an return 1, -1 or 0', () => {
  expect(descend(identity)(1, 2)).toEqual(1)
  expect(descend(identity)(2)(1)).toEqual(-1)
  expect(descend(identity, 1, 1)).toEqual(0)
})