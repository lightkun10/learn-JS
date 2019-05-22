const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if(response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  })
}


const getCountry = (countryCode) => {
  return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
    if(response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch country')
    }
  }).then((data) => {
    return data.find((country) => country.alpha2Code === countryCode)
  })
}

const getLocation = () => {
  return fetch('https://ipinfo.io/json?token=004b9406858808').then((response) => {
    if(response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch data...')
    }
  })
}


// const getCountryOLD = (countryCode) => new Promise ((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest();

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//       const parsedData = JSON.parse(e.target.responseText)
//       let country = parsedData.find((country) => country.alpha2Code === countryCode)
//       resolve(country)
//     } else if(e.target.readyState === 4) {
//       reject('Unable to fetch data')
//     }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// }) 