// using async-await
const getPuzzle = async (wordCount) => {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if(response.status === 200) {
    const parsedData = await response.json()
    return parsedData.puzzle
  } else {
    throw new Error('Unable to fetch puzzle')
  }
}

const getCurrentCountry = async () => {
  let location = await getLocation()
  let country = await getCountry(location.country)
  return country
}


const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')

  if(response.status === 200) {
    const parsedData = await response.json()
    return parsedData.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch country data')
  }
}


const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=004b9406858808')

  if(response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch location data')
  }
}


// const getPuzzleOld = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if(response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch puzzle')
//     }
//   })
// }

// const getCountryOld = (countryCode) => {
//   return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//     if(response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch country')
//     }
//   }).then((data) => {
//     return data.find((country) => country.alpha2Code === countryCode)
//   })
// }

// const getLocation = () => {
//   return fetch('https://ipinfo.io/json?token=004b9406858808').then((response) => {
//     if(response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch location.')
//     }
//   })
// }