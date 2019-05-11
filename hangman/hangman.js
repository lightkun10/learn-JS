const Hangman = function (inputWord, guessRemaining) {
  this.word = inputWord.toLowerCase().split('') //return string
  this.guessRemaining = guessRemaining
  this.guessedLetter = []
}

Hangman.prototype.getPuzzle = function () 
{
  //stored guessed letters
  let puzzle = ''

  //loop through the hangman word
  this.word.forEach((letter) => {
    if(this.guessedLetter.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const unique = !this.guessedLetter.includes(guess)
  const badGuess = !this.word.includes(guess)

  if(unique) {
    this.guessedLetter.push(guess)
  } else if (unique && badGuess) {
    this.guessRemaining-- 
  }
}

const game1 = new Hangman('Cat', 2)

// Add click event
window.addEventListener('keypress', function (e) {
  // console.log(e)
  // convert charcode to string
  const guess = String.fromCharCode(e.charCode)
  // console.log(guess) // printing the letter
  game1.makeGuess(guess)
  console.log(game1.getPuzzle())
  console.log(game1.guessRemaining) // c*t
})