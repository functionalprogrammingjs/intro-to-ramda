const faker = require('faker')

const {
  times,
  inc,
  take,
  pipe,
  useWith
} = require('ramda')

const shuffle = (xs) => [...xs].sort(() => 0.5 - Math.random())

const tags = () => [
  'functional programming',
  'functor',
  'monad',
  'reactive programing',
  'composition',
  'HOF',
  'curry',
  'partial application',
  'point free',
  'natural transformation'
]

const randomTags = pipe(
  tags,
  shuffle,
  take(4)
)

const post = (id) => {
  const published = faker.date.between(new Date(`${new Date().getFullYear()}-01-01`), new Date())
  return {
    'id': id,
    'title': faker.lorem.word(),
    'author': faker.name.findName(),
    'url': `/posts/${id}`,
    'published': published.getTime(),
    'tags': randomTags(),
    'displayDate': published
  }
}

const posts = times(useWith(post, [inc]), 10)

module.exports = posts