const __ = require('./__')

test('Should return true', () => {
  expect(__.isPlaceholder('')).toEqual(false)
  expect(__.isPlaceholder(5)).toEqual(false)
  expect(__.isPlaceholder(null)).toEqual(false)
  expect(__.isPlaceholder(__)).toEqual(true)
})

test('Should find indexes', () => {
  expect(__.findIndexes([__, 1, '', __])).toEqual([0, 3])
})

test('Should return tru if has all args', () => {
  expect(__.hasAllArgs([__, 1], 2)).toEqual(false)
  expect(__.hasAllArgs([1, 2], 2)).toEqual(true)
})

test('Should resolve args', () => {
  expect(__.resolveArgs([__, 1, 2], 2)).toEqual([2, 1])
  expect(__.resolveArgs([1, __, 3, __, 5, 2, 4], 5)).toEqual([1, 2, 3, 4, 5])
  expect(__.resolveArgs([1, 2, __, 3], 3)).toEqual([1, 2, 3])
})