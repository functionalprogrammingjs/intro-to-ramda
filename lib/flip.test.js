const flip = require('./flip')

test('Should apply args in inverse order', () => {
  const concat = (a, b) => a.concat(b)
  const reverseConcat = flip(concat)
  expect(reverseConcat('a', 'b')).toEqual('ba')
})