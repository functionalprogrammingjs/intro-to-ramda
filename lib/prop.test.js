const prop = require('./prop')

test('Should get a value', () => {
  expect(prop('a', {
    a: 1
  })).toEqual(1)

  expect(prop('a')({
    a: 1
  })).toEqual(1)

  expect(prop('a')({
    b: 1
  })).toEqual(undefined)
})