# intro-to-ramda

Given a set of posts do with a functional approach:

1. Get the first tag of each post in upper case
2. Get all tags that have been used in any post
3. Sort posts by descending date (if equal, alphabetically by title)
4. Group posts by tag
5. (1) + (2)
6. (3) + only recent posts (last 30 days)
7. Show newest post
8. Show newest post for each tag
9. Show newest AND oldest post for each tag
10. Get mean post score
11. Get mean post score for each tag
12. Get the score deviation for each tag

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
    "published": 1553081686690,
    "tags": [
      "reactive programing",
      "functional programming",
      "curry",
      "composition"
    ],
    "displayDate": "2019-03-20T11:34:46.690Z",
    "likes": 18,
    "dislikes": 13
  },
  {
    "id": 2,
    "title": "Provident quo provident",
    "author": "Elian Stanton",
    "url": "/posts/2",
    "published": 1548009014087,
    "tags": [
      "functor",
      "functional programming",
      "partial application",
      "monad"
    ],
    "displayDate": "2019-01-20T18:30:14.087Z",
    "likes": 9,
    "dislikes": 24
  },
  {
    "id": 3,
    "title": "Et quia quos",
    "author": "Arely Hahn PhD",
    "url": "/posts/3",
    "published": 1550523353648,
    "tags": [
      "functor",
      "functional programming",
      "monad",
      "reactive programing"
    ],
    "displayDate": "2019-02-18T20:55:53.648Z",
    "likes": 11,
    "dislikes": 9
  },
  {
    "id": 4,
    "title": "Esse nobis et sint magnam aut",
    "author": "Winona Feeney",
    "url": "/posts/4",
    "published": 1549389920002,
    "tags": [
      "functional programming",
      "monad",
      "point free",
      "composition"
    ],
    "displayDate": "2019-02-05T18:05:20.002Z",
    "likes": 87,
    "dislikes": 27
  },
  {
    "id": 5,
    "title": "Blanditiis libero ut qui quo fuga enim",
    "author": "Ronny Dare",
    "url": "/posts/5",
    "published": 1548908162122,
    "tags": [
      "composition",
      "functor",
      "monad",
      "functional programming"
    ],
    "displayDate": "2019-01-31T04:16:02.122Z",
    "likes": 73,
    "dislikes": 30
  },
  {
    "id": 6,
    "title": "Mollitia enim iste molestias nesciunt minima",
    "author": "Maureen Brekke II",
    "url": "/posts/6",
    "published": 1546457835407,
    "tags": [
      "functional programming",
      "functor",
      "natural transformation",
      "HOF"
    ],
    "displayDate": "2019-01-02T19:37:15.407Z",
    "likes": 71,
    "dislikes": 17
  },
  {
    "id": 7,
    "title": "Ex quidem omnis",
    "author": "Dr. Alphonso Pollich",
    "url": "/posts/7",
    "published": 1555991699818,
    "tags": [
      "monad",
      "composition",
      "functor",
      "functional programming"
    ],
    "displayDate": "2019-04-23T03:54:59.818Z",
    "likes": 19,
    "dislikes": 26
  },
  {
    "id": 8,
    "title": "Illum at natus eum cum ipsam consequatur",
    "author": "Cedrick Johnson",
    "url": "/posts/8",
    "published": 1549160216663,
    "tags": [
      "monad",
      "functional programming",
      "reactive programing",
      "functor"
    ],
    "displayDate": "2019-02-03T02:16:56.663Z",
    "likes": 66,
    "dislikes": 28
  },
  {
    "id": 9,
    "title": "Ut nostrum ducimus occaecati",
    "author": "Elena Wyman",
    "url": "/posts/9",
    "published": 1549701045570,
    "tags": [
      "functional programming",
      "monad",
      "functor",
      "reactive programing"
    ],
    "displayDate": "2019-02-09T08:30:45.570Z",
    "likes": 99,
    "dislikes": 26
  },
  {
    "id": 10,
    "title": "Dolorem beatae et molestiae consequatur sed rerum qui voluptates unde",
    "author": "Alek Grimes DDS",
    "url": "/posts/10",
    "published": 1549702735187,
    "tags": [
      "reactive programing",
      "functional programming",
      "monad",
      "functor"
    ],
    "displayDate": "2019-02-09T08:58:55.187Z",
    "likes": 78,
    "dislikes": 25
  }
]
```
