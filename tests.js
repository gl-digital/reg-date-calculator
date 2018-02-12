require('./index')

const tests = [
  {
    name: 'OLD PRE JULY',
    plates: [
      { value: '1984-01-21', expect: 'A' },
      { value: '1985-02-21', expect: 'B' },
      { value: '1986-03-21', expect: 'C' },
      { value: '1987-04-21', expect: 'D' },
      { value: '1992-05-21', expect: 'J' },
      { value: '1997-06-21', expect: 'P' },
      { value: '1998-07-21', expect: 'R' }
    ]
  },
  {
    name: 'OLD POST JULY',
    plates: [
      { value: '1984-08-21', expect: 'B' },
      { value: '1985-09-21', expect: 'C' },
      { value: '1986-10-21', expect: 'D' },
      { value: '1987-11-21', expect: 'E' },
      { value: '1992-12-21', expect: 'K' },
      { value: '1997-11-21', expect: 'R' },
      { value: '1998-08-21', expect: 'S' },
      { value: '1998-10-21', expect: 'S' }
    ]
  },
  {
    name: 'OLD POST 1999',
    plates: [
      { value: '1999-01-21', expect: 'S' },
      { value: '1999-03-21', expect: 'T' },
      { value: '1999-08-21', expect: 'T' },
      { value: '1999-09-21', expect: 'V' },
      { value: '2000-02-21', expect: 'V' },
      { value: '2000-03-21', expect: 'W' },
      { value: '2000-08-21', expect: 'W' },
      { value: '2000-10-21', expect: 'X' },
      { value: '2001-01-21', expect: 'X' },
      { value: '2001-03-21', expect: 'Y' },
      { value: '2001-07-21', expect: 'Y' },
      { value: '2001-08-21', expect: 'Y' }
    ]
  },
  {
    name: 'NEW POST 2001',
    plates: [
      { value: '2002-01-21', expect: '51' },
      { value: '2002-03-21', expect: '02' },
      { value: '2002-06-21', expect: '02' },
      { value: '2002-08-21', expect: '52' },
      { value: '2002-09-21', expect: '52' },

      { value: '2012-01-21', expect: '61' },
      { value: '2012-03-21', expect: '12' },
      { value: '2012-06-21', expect: '12' },
      { value: '2012-08-21', expect: '62' },
      { value: '2012-09-21', expect: '62' },

      { value: '2022-01-21', expect: '71' },
      { value: '2022-03-21', expect: '22' },
      { value: '2022-06-21', expect: '22' },
      { value: '2022-08-21', expect: '72' },
      { value: '2022-09-21', expect: '72' }
    ]
  }
]

const runTests = () => {
  let failedTests = 0
  let passedTests = 0
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i]
    console.log('Running test: ' + test.name)
    for (let j = 0; j < test.plates.length; j++) {
      const plate = test.plates[j]
      const result = getRegDate(plate.value)
      if (result !== plate.expect) {
        failedTests++
        console.log(
          'Test failed at value: ' +
            plate.value +
            '. Expected ' +
            plate.expect +
            ' got ' +
            result
        )
      } else {
        passedTests++
      }
    }
    console.log('------------')
  }
  if (failedTests == 0) {
    console.log('All ' + passedTests + ' tests passed!')
  } else {
    console.log('Passed ' + passedTests + ' tests')
    console.log('Failed ' + failedTests + ' tests')
  }
  console.log(failedTests + passedTests + ' tests total')
}

runTests()
