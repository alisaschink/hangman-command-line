// requires letter.js
var Letter = require('./letter');


function Word(newWord){
  this.newWord = newWord;
  this.letters = [];
  this.dashes = 0;
  this.spaces = 0;
  this.guesses = 13;
  this.matches = 0;
  this.guessedLetters = [];
  this.init = function(){
    for(i=0; i<this.newWord.length; i++){
      var lett = new Letter(this.newWord[i]);
      this.letters.push(lett);
      // if (this.newWord[i] == ' '){
      //   this.spaces++;
      // }
      // if(this.newWord[i] == '-'){
      //   this.dashes++;
      // }
    }
  };

  //Word.display: for loop over the letter objects and its going to run the display on each letter
  this.display = function(){
    var str = '';
    for (i=0; i<this.letters.length; i++){
      str = str + this.letters[i].display();
    }

    return str
  };

  this.updateLetter = function(guess){
    if (this.guessedLetters.indexOf(guess) == -1) {
      this.guessedLetters.push(guess);
      this.guesses--;
      //checks all letters to see if guess matches
      for(i=0; i<this.letters.length; i++){
        if(guess == this.letters[i].letter){
          //if it does, update letter display and found to true
          this.letters[i].found = true;
        }
      }
      this.display();
    } else {
      console.log("Letter has already been guessed");
    }
  }
}



module.exports = Word;