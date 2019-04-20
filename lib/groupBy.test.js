const groupBy = require('./groupBy')

test('Should group items by key', () => {
  const users = [{
      age: 21,
      name: 'Sara'
    },
    {
      age: 21,
      name: 'Maria'
    },
    {
      age: 29,
      name: 'Paco'
    },
    {
      age: 29,
      name: 'Ronet'
    },
    {
      age: 23,
      name: 'Rox'
    }
  ]

  const grouped = groupBy((x) => x.age)(users)


  expect(grouped).toEqual({
    21: [{
        age: 21,
        name: 'Sara'
      },
      {
        age: 21,
        name: 'Maria'
      }
    ],
    29: [{
        age: 29,
        name: 'Paco'
      },
      {
        age: 29,
        name: 'Ronet'
      },
    ],
    23: [{
      age: 23,
      name: 'Rox'
    }]
  })
})