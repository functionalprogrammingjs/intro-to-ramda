const assoc = require('./assoc')

test('Should add values to object', () => {
  const src = {
    a: 1
  }

  expect(assoc('b', 2, src))
    .toEqual({
      a: 1,
      b: 2
    })
})