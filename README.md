# intro-to-ramda

Given a set of posts do with a functional approach:

1. Get the first tag of each post in upper case
2. Get all tags that have been used in any post
3. Show only recent posts (last 30 days)
4. Sort posts by descending date (if equal, alphabetically by title)
5. (3) + (4)
6. Get mean likes
7. Group posts by tag

Extra:

1. Get mean likes for each tag
2. Get the likes deviation for each tag
3. Show newest post
4. Show newest post for each tag
5. Show newest AND oldest post for each tag

## Folders

- `challenge`: where implement your solution
- `lib`: Where implements ramda functions

## Post examples

```js
const posts = [
  {
    "id": 1,
    "title": "Quis molestiae tempora eligendi omnis quisquam quisquam quos",
    "author": "Willa Jast",
    "url": "/posts/1",
    "published": 1553193979113,
    "tags": [
      "reactive programing",
      "functional programming",
      "curry",
      "composition"
    ],
    "displayDate": "2019-03-21T18:46:19.113Z",
    "likes": 18
  },
  {
    "id": 2,
    "title": "Vitae provident quo provident",
    "author": "Elian Stanton",
    "url": "/posts/2",
    "published": 1550658166608,
    "tags": [
      "functor",
      "functional programming",
      "partial application",
      "monad"
    ],
    "displayDate": "2019-02-20T10:22:46.608Z",
    "likes": 9
  },
  {
    "id": 3,
    "title": "Accusantium et quia quos sequi molestiae",
    "author": "Miss Sienna Kautzer",
    "url": "/posts/3",
    "published": 1553991062330,
    "tags": [
      "functional programming",
      "functor",
      "monad",
      "point free"
    ],
    "displayDate": "2019-03-31T00:11:02.330Z",
    "likes": 92
  },
  {
    "id": 4,
    "title": "Atque dolores maiores",
    "author": "Hugh Moore",
    "url": "/posts/4",
    "published": 1548779637155,
    "tags": [
      "monad",
      "partial application",
      "functional programming",
      "functor"
    ],
    "displayDate": "2019-01-29T16:33:57.155Z",
    "likes": 88
  },
  {
    "id": 5,
    "title": "Blanditiis libero ut qui quo fuga enim",
    "author": "Ronny Dare",
    "url": "/posts/5",
    "published": 1548951340400,
    "tags": [
      "composition",
      "functor",
      "monad",
      "functional programming"
    ],
    "displayDate": "2019-01-31T16:15:40.400Z",
    "likes": 73
  },
  {
    "id": 6,
    "title": "Voluptatum mollitia enim",
    "author": "Carmelo Goyette",
    "url": "/posts/6",
    "published": 1556141606505,
    "tags": [
      "functor",
      "functional programming",
      "composition",
      "monad"
    ],
    "displayDate": "2019-04-24T21:33:26.505Z",
    "likes": 85
  },
  {
    "id": 7,
    "title": "Reprehenderit ipsa incidunt corporis vel",
    "author": "Meagan Luettgen",
    "url": "/posts/7",
    "published": 1553341673007,
    "tags": [
      "monad",
      "functional programming",
      "functor",
      "reactive programing"
    ],
    "displayDate": "2019-03-23T11:47:53.007Z",
    "likes": 51
  },
  {
    "id": 8,
    "title": "Omnis odit labore magni rerum quia praesentium distinctio",
    "author": "Eldred Lueilwitz DDS",
    "url": "/posts/8",
    "published": 1546592016116,
    "tags": [
      "functional programming",
      "functor",
      "reactive programing",
      "composition"
    ],
    "displayDate": "2019-01-04T08:53:36.116Z",
    "likes": 58
  },
  {
    "id": 9,
    "title": "Alias et doloribus expedita et",
    "author": "Kane Greenfelder",
    "url": "/posts/9",
    "published": 1551462580090,
    "tags": [
      "functor",
      "functional programming",
      "reactive programing",
      "composition"
    ],
    "displayDate": "2019-03-01T17:49:40.090Z",
    "likes": 35
  },
  {
    "id": 10,
    "title": "Minus officiis neque dolorem animi maiores et aliquid",
    "author": "Arjun Bergstrom",
    "url": "/posts/10",
    "published": 1550204006993,
    "tags": [
      "monad",
      "functor",
      "curry",
      "functional programming"
    ],
    "displayDate": "2019-02-15T04:13:26.993Z",
    "likes": 47
  }
]
```
