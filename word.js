// requires letter
var Letter = require('./letter');


function Word(newWord){
  this.newWord = newWord;
  this.letters = [];
  this.guesses = 13;
  this.matches = 0;
  this.init = function(){
    for(i=0; i<this.newWord.length; i++){
      var lett = new Letter(this.newWord[i]);
      this.letters.push(lett);
    }
  };
  //Word.display: for loop over the letter objects and its going to run the display on each letter
  this.display = function(){
    var str = ' ';
    for (i=0; i<this.letters.length; i++){
      str = str + this.letters[i].display();
    }

    return str
  };

  this.updateLetter = function(guess){
    //checks all letters to see if guess matches
    for(i=0; i<this.letters.length; i++){
      if(guess == this.letters[i].letter){
        //if it does, update letter display and found to true
        this.letters[i].found = true;
        this.display();
      }
    }
    
  }
}

// var dog = new Word('dog');
// dog.init();
// dog.display();
// console.log(dog.letters);


// dog.updateLetter('o');
// console.log(dog.letters);
// console.log(dog.display());

module.exports = Word;