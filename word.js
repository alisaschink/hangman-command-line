// requires letter.js and colors npm package
var Letter = require('./letter');
var colors = require('colors');


function Word(newWord){
  this.newWord = newWord;
  this.letters = [];
  this.dashes = 0;
  this.spaces = 0;
  this.guesses = 16;
  this.matches = 0;
  this.guessedLetters = [];
  this.init = function(){
    for(i=0; i<this.newWord.length; i++){
      var lett = new Letter(this.newWord[i]);
      this.letters.push(lett);
      if (lett.letter == ' '){
        this.spaces++;
      }
      if(lett.letter == '-'){
        this.dashes++;
      }
    }
  };

  // loops over the letter objects and runs display on each letter
  this.display = function(){
    var str = '';
    for (i=0; i<this.letters.length; i++){
      str = str + " " + this.letters[i].display();
    }

    return str
  };

  // displays guessed letters
  this.displayGuesses = function(){
    var guessedStr = '';
    for (i=0; i<this.guessedLetters.length; i++){
      guessedStr = guessedStr + " " + this.guessedLetters[i];
    }

    return guessedStr
  };

  // updates display of letters and adds letter to guessed letter array
  this.updateLetter = function(guess){
    if (this.guessedLetters.indexOf(guess) == -1) {
      this.guessedLetters.push(guess);
      this.guesses--;
      // checks all letters to see if guess matches
      for(i=0; i<this.letters.length; i++){
        if(guess == this.letters[i].letter){
          // if it does, update letter display and found to true
          this.letters[i].found = true;
        }
      }
      this.display();
    } else {
      console.log("Letter has already been guessed".red.bold);
    }
  }
}



module.exports = Word;