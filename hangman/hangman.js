class Hangman {
  constructor(word, guessRemaining) {
    this.word = word.toLowerCase().split('') //return string
    this.guessRemaining = guessRemaining
    this.guessedLetter = []
    this.status = 'playing'
  }
  
  get puzzle() {
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

  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetter.includes(letter) || letter === ' ')

    if(finished) {
      this.status = 'finished!'
    } else if (this.guessRemaining === 0 || this.guessRemaining < 0) {
      this.status = 'failed'
    } else {
      this.status = 'playing'
    }
  }

  get statusMessage() {
    if(this.status === 'playing') {
      return `Guesses left: ${this.guessRemaining} `
    } else if(this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}"`
    } else {
      return 'Great work! You guessed the word.'
    }
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const unique = !this.guessedLetter.includes(guess)
    const badGuess = !this.puzzle.includes(guess)

    if(unique) {
      this.guessedLetter.push(guess)
    } else if (unique && badGuess) {
      this.guessRemaining-- 
    } else if (!badGuess) {
      this.guessRemaining-- 
    } else {
      this.guessRemaining-- 
    }

    this.calculateStatus()
  }
}

