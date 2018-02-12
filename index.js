const reg_alphabet = 'ABCDEFGHJKLMNPRSTVWXY'

getRegDate = startDate => {
  const date = new Date(startDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  let reg = '-1'

  if (year < 1999) {
    if (year === 1998 && month > 6) {
      reg = 'S'
    } else {
      reg = reg_alphabet[year - (month > 6 ? 1983 : 1984)]
    }
  } else if (year < 2002) {
    //Post 1999 and Pre-2002 registrations follow no reliable pattern
    const laterAlphabetRange = [{
        low: '1999-01-01',
        high: '1999-02-28',
        reg: 'S'
      },
      {
        low: '1999-03-01',
        high: '1999-08-31',
        reg: 'T'
      },
      {
        low: '1999-09-01',
        high: '2000-02-29',
        reg: 'V'
      },
      {
        low: '2000-03-01',
        high: '2000-08-31',
        reg: 'W'
      },
      {
        low: '2000-09-01',
        high: '2001-02-28',
        reg: 'X'
      },
      {
        low: '2001-03-01',
        high: '2001-08-31',
        reg: 'Y'
      },
      {
        low: '2001-09-01',
        high: '2001-12-31',
        reg: '51'
      }
    ]
    for (let k = 0; k < laterAlphabetRange.length; k++) {
      const r = laterAlphabetRange[k]
      const lowDate = new Date(r.low)
      const highDate = new Date(r.high)
      if (date <= highDate && date >= lowDate) {
        reg = r.reg
      }
    }
  } else if (year > 2001) {
    let number = year - 2000
    if (month >= 7) {
      number += 50
    }
    if (month < 2) {
      number += 49
    }
    reg = pad(number, 2)
  }

  return reg
}

const pad = (n, width, z) => {
  z = z || '0'
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}