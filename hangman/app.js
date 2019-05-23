const puzzleEl = document.querySelector('#displayPuzzle')
const guessesEl = document.querySelector('#displayGuessRemain')
let game1

// Add click event
window.addEventListener('keypress', (e) => {
  // console.log(e)
  // convert charcode to string
  const guess = String.fromCharCode(e.charCode)
  // console.log(guess) // printing the letter
  game1.makeGuess(guess)
  render()
  console.log(game1.status)
})

const render = () => {
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })


// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })

// getLocation().then((location) => {
//   console.log(location)
//   console.log(`I currently live in ${location.city} city, ${location.region} region ${location.country}`)
//   return getCountry(location.country) // promise chaining
// }).then((country) => { // passed from requests.js
//   console.log(country.name)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })