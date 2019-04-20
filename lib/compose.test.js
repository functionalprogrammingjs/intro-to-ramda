const compose = require('./compose')

test('Should create a composed function', () => {
  const f = compose(
    n => n - 1,
    n => n * 2,
    n => n * n
  )

  expect(f(2)).toEqual(7)
})