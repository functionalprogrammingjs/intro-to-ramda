const sortWith = require('./sortWith')

test('Should apply sort criterions', () => {
  const comparatorByProp = (prop) => (a, b) => a[prop] - b[prop]
  const byAge = comparatorByProp('age')
  const byHeight = comparatorByProp('height')

  const users = [
    { age: 32, height: 180 },
    { age: 32, height: 170 },
    { age: 21, height: 160 },
    { age: 21, height: 180 },
    { age: 18, height: 150 }
  ]

  const expected = [
    { age: 18, height: 150 },
    { age: 21, height: 160 },
    { age: 21, height: 180 },
    { age: 32, height: 170 },
    { age: 32, height: 180 },
  ]

  expect(
    sortWith([byAge, byHeight], users)
  ).toEqual(expected)
})