# intro-to-ramda

Given a set of posts to do with a functional approach:

- Filter posts older than a date.
- Group the posts by their tags.
- Sort each tag listing by published date, descending.

## Folders

- `challenge`: where implement your solution
- `lib`: Where implements ramda functions

## Post examples

```js
const posts = [
  {
    id: 1,
    title: 'qui',
    author: 'Vincenza Schuster Sr.',
    url: '/posts/1',
    published: 1554273834917,
    tags: ['functional programming', 'functor', 'monad', 'reactive programing'],
    displayDate: '2019-04-03T06:43:54.917Z'
  },
  {
    id: 2,
    title: 'reprehenderit',
    author: 'Mr. Doyle Goodwin',
    url: '/posts/2',
    published: 1548859187440,
    tags: ['functional programming', 'reactive programing', 'functor', 'HOF'],
    displayDate: '2019-01-30T14:39:47.440Z'
  },
  {
    id: 3,
    title: 'dolores',
    author: 'Rudolph Reilly',
    url: '/posts/3',
    published: 1551858558087,
    tags: ['composition', 'monad', 'functor', 'HOF'],
    displayDate: '2019-03-06T07:49:18.087Z'
  },
  {
    id: 4,
    title: 'hic',
    author: 'Joshua Mills',
    url: '/posts/4',
    published: 1549063917383,
    tags: [
      'functional programming',
      'monad',
      'composition',
      'reactive programing'
    ],
    displayDate: '2019-02-01T23:31:57.383Z'
  },
  {
    id: 5,
    title: 'possimus',
    author: 'Ardith Hills Sr.',
    url: '/posts/5',
    published: 1549123181102,
    tags: [
      'functor',
      'functional programming',
      'reactive programing',
      'composition'
    ],
    displayDate: '2019-02-02T15:59:41.102Z'
  },
  {
    id: 6,
    title: 'voluptatem',
    author: 'Nick Schmeler',
    url: '/posts/6',
    published: 1553299404935,
    tags: [
      'functional programming',
      'composition',
      'functor',
      'reactive programing'
    ],
    displayDate: '2019-03-23T00:03:24.935Z'
  },
  {
    id: 7,
    title: 'et',
    author: 'Alexandro Howe',
    url: '/posts/7',
    published: 1546780644102,
    tags: ['functional programming', 'functor', 'monad', 'reactive programing'],
    displayDate: '2019-01-06T13:17:24.102Z'
  },
  {
    id: 8,
    title: 'blanditiis',
    author: 'Enrique Kiehn Jr.',
    url: '/posts/8',
    published: 1548291880538,
    tags: ['functor', 'functional programming', 'monad', 'composition'],
    displayDate: '2019-01-24T01:04:40.538Z'
  },
  {
    id: 9,
    title: 'autem',
    author: 'Llewellyn Ferry',
    url: '/posts/9',
    published: 1550672609202,
    tags: ['functional programming', 'monad', 'functor', 'reactive programing'],
    displayDate: '2019-02-20T14:23:29.202Z'
  },
  {
    id: 10,
    title: 'voluptas',
    author: 'Lulu Rolfson',
    url: '/posts/10',
    published: 1546388026403,
    tags: [
      'functional programming',
      'functor',
      'partial application',
      'composition'
    ],
    displayDate: '2019-01-02T00:13:46.403Z'
  }
]
```

## Result examples

```js
const result = {
  'functional programming': [
    {
      id: 1,
      title: 'qui',
      author: 'Vincenza Schuster Sr.',
      url: '/posts/1',
      published: 1554273834917,
      tags: [
        'functional programming',
        'functor',
        'monad',
        'reactive programing'
      ],
      displayDate: '2019-04-03T06:43:54.917Z',
      tag: 'functional programming'
    },
    {
      id: 6,
      title: 'voluptatem',
      author: 'Nick Schmeler',
      url: '/posts/6',
      published: 1553299404935,
      tags: [
        'functional programming',
        'composition',
        'functor',
        'reactive programing'
      ],
      displayDate: '2019-03-23T00:03:24.935Z',
      tag: 'functional programming'
    }
  ],
  functor: [
    {
      id: 1,
      title: 'qui',
      author: 'Vincenza Schuster Sr.',
      url: '/posts/1',
      published: 1554273834917,
      tags: [
        'functional programming',
        'functor',
        'monad',
        'reactive programing'
      ],
      displayDate: '2019-04-03T06:43:54.917Z',
      tag: 'functor'
    },
    {
      id: 6,
      title: 'voluptatem',
      author: 'Nick Schmeler',
      url: '/posts/6',
      published: 1553299404935,
      tags: [
        'functional programming',
        'composition',
        'functor',
        'reactive programing'
      ],
      displayDate: '2019-03-23T00:03:24.935Z',
      tag: 'functor'
    }
  ],
  monad: [
    {
      id: 1,
      title: 'qui',
      author: 'Vincenza Schuster Sr.',
      url: '/posts/1',
      published: 1554273834917,
      tags: [
        'functional programming',
        'functor',
        'monad',
        'reactive programing'
      ],
      displayDate: '2019-04-03T06:43:54.917Z',
      tag: 'monad'
    }
  ],
  'reactive programing': [
    {
      id: 1,
      title: 'qui',
      author: 'Vincenza Schuster Sr.',
      url: '/posts/1',
      published: 1554273834917,
      tags: [
        'functional programming',
        'functor',
        'monad',
        'reactive programing'
      ],
      displayDate: '2019-04-03T06:43:54.917Z',
      tag: 'reactive programing'
    },
    {
      id: 6,
      title: 'voluptatem',
      author: 'Nick Schmeler',
      url: '/posts/6',
      published: 1553299404935,
      tags: [
        'functional programming',
        'composition',
        'functor',
        'reactive programing'
      ],
      displayDate: '2019-03-23T00:03:24.935Z',
      tag: 'reactive programing'
    }
  ],
  composition: [
    {
      id: 6,
      title: 'voluptatem',
      author: 'Nick Schmeler',
      url: '/posts/6',
      published: 1553299404935,
      tags: [
        'functional programming',
        'composition',
        'functor',
        'reactive programing'
      ],
      displayDate: '2019-03-23T00:03:24.935Z',
      tag: 'composition'
    }
  ]
}
```
