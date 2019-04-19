# intro-to-ramda

Given a set of posts to do with a functional approach:

- Filter posts older than a date.
- Group the posts by their tags.
- Sort each tag listing by published date, descending.

## Folders

- Challenge: where implement your solution
- Where implements ramda functions

## Post examples

```js
const posts = [
  {
    id: 1,
    title: 'dicta',
    author: 'Dorcas Greenholt MD',
    url: '/posts/1',
    published: 1548629830761,
    tags: [
      'monad',
      'composition',
      'reactive programing',
      'partial application'
    ],
    displayDate: '2019-01-27T22:57:10.761Z'
  },
  {
    id: 2,
    title: 'sapiente',
    author: 'Lucius Skiles PhD',
    url: '/posts/2',
    published: 1553420098891,
    tags: ['monad', 'functor', 'functional programming', 'reactive programing'],
    displayDate: '2019-03-24T09:34:58.891Z'
  },
  {
    id: 3,
    title: 'et',
    author: 'Curt Nitzsche',
    url: '/posts/3',
    published: 1547416866160,
    tags: ['monad', 'functor', 'reactive programing', 'functional programming'],
    displayDate: '2019-01-13T22:01:06.160Z'
  },
  {
    id: 4,
    title: 'quibusdam',
    author: 'Leora Wiegand I',
    url: '/posts/4',
    published: 1554582319249,
    tags: ['functional programming', 'reactive programing', 'functor', 'HOF'],
    displayDate: '2019-04-06T20:25:19.249Z'
  },
  {
    id: 5,
    title: 'dolorem',
    author: 'Ms. Jonatan Gorczany',
    url: '/posts/5',
    published: 1554520357391,
    tags: ['functor', 'monad', 'reactive programing', 'functional programming'],
    displayDate: '2019-04-06T03:12:37.391Z'
  },
  {
    id: 6,
    title: 'aliquid',
    author: 'Mireille Altenwerth',
    url: '/posts/6',
    published: 1548584168916,
    tags: [
      'functional programming',
      'functor',
      'reactive programing',
      'composition'
    ],
    displayDate: '2019-01-27T10:16:08.916Z'
  },
  {
    id: 7,
    title: 'temporibus',
    author: 'Elsa Jaskolski',
    url: '/posts/7',
    published: 1553669667662,
    tags: ['reactive programing', 'functor', 'composition', 'monad'],
    displayDate: '2019-03-27T06:54:27.662Z'
  },
  {
    id: 8,
    title: 'ratione',
    author: 'Ara Brown',
    url: '/posts/8',
    published: 1552387520677,
    tags: ['functor', 'monad', 'reactive programing', 'functional programming'],
    displayDate: '2019-03-12T10:45:20.677Z'
  },
  {
    id: 9,
    title: 'ab',
    author: 'Remington Rohan',
    url: '/posts/9',
    published: 1547281191880,
    tags: ['functional programming', 'curry', 'functor', 'monad'],
    displayDate: '2019-01-12T08:19:51.880Z'
  },
  {
    id: 10,
    title: 'soluta',
    author: 'Melody Greenfelder',
    url: '/posts/10',
    published: 1546759488258,
    tags: ['monad', 'HOF', 'functional programming', 'functor'],
    displayDate: '2019-01-06T07:24:48.258Z'
  }
]
```
