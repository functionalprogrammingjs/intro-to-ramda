const faker = require('faker')

faker.seed(123)

const {
  times,
  inc,
  take,
  pipe,
  compose,
  sort,
} = require('ramda')

const shuffle = sort(() => 0.5 - faker.random.number({min: 0, max: 1, precision: 0.0000000000001}))

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
    'title': faker.lorem.sentence().replace('.', ''),
    'author': faker.name.findName(),
    'url': `/posts/${id}`,
    'published': published.getTime(),
    'tags': randomTags(),
    'displayDate': published,
    likes: faker.random.number(100),
  }
}

const posts = times(compose(post, inc), 10)

module.exports = posts
