const placeholder = Symbol('@functional/placeholder')

const isPlaceholder = (x) =>
  typeof x === 'object' && x !== null && x[placeholder]

const findIndexes = (xs) =>
  xs.reduce((indexes, item, i) =>
    isPlaceholder(item) ? indexes.concat(i) : indexes, [])

const hasAllArgs = (args, n) => {
  const idx = findIndexes(args)
  return (args.length - idx.length) >= n
}

const resolveArgs = (args, n) => {
  const placeholderIndexes = findIndexes(args)
  const leftArgs = args.slice(0, n)
  const rightArgs = args.slice(n, args.length)

  const resolvedArgs = placeholderIndexes.reduce((args, pos) => {
    args[pos] = rightArgs.shift()
    return args
  }, leftArgs)

  return resolvedArgs
}

const handleArgs = (args, n) =>
  args.some(isPlaceholder) ? resolveArgs(args, n) : args.splice(0, n)

const __ = {
  [placeholder]: true,
  isPlaceholder,
  findIndexes,
  hasAllArgs,
  resolveArgs,
  handleArgs
}

module.exports = __