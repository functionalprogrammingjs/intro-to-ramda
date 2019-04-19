const useWith = require('./useWith')

test('Should apply transformation fot each argument', () => {
  const getA = x => x.a
  const getB = x => x.b
  const sum = (a, b) => a + b
  const sumProps = useWith(sum, [getA, getB])

  expect(sumProps({
    a: 1
  }, {
    b: 2
  })).toEqual(3)
})

test('Should apply transformation fot each argument', () => {
  const getA = x => x.a
  const getB = x => x.b
  const sum = (a, b) => a + b
  const sumProps = useWith(sum)([getA, getB])

  expect(sumProps({
    a: 1
  }, {
    b: 2
  })).toEqual(3)
})

test('Should apply transformation fot argument', () => {
  const getA = x => x.a
  const sum = (a, b) => a + b
  const sumProps = useWith(sum)([getA])

  expect(sumProps({
    a: 1
  }, 2)).toEqual(3)
})