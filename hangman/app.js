// HTTP (Hypertext Transfer Protocol)
  // Request - What do we want to do
  // Response - What was actually done

const puzzleEl = document.querySelector('#displayPuzzle')
const guessesEl = document.querySelector('#displayGuessRemain')
const game1 = new Hangman('Cat Food', 4)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
console.log(game1.status)


// Add click event
window.addEventListener('keypress', (e) => {
  // console.log(e)
  // convert charcode to string
  const guess = String.fromCharCode(e.charCode)
  // console.log(guess) // printing the letter
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage // c*t
  console.log(game1.status)
})

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getCountry('ID').then((country) => {
  console.log(`My country name: ${country.name}`)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getLocation().then((location) => {
  console.log(location)
  return getCountry(location.country)
}).then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

// https://ipinfo.io/json?token=004b9406858808

//city, region, country