// requires letter
var Letter = require('./letter');

//declare variables
var movies = ['dawn of the dead', 'psycho', 'halloween', 'scream', 'evil dead', 're-animator',
  'nightmare on elm street', 'the conjuring', 'the texas chainsaw massacre', 'poltergeist'
];
var books = ['the shining', 'carrie', 'pet semetary', 'the exorcist', 'house of leaves', 'dracula',
  'frankenstein', 'the collector', 'silence of the lambs', 'in cold blood'
];
var tv = ['the walking dead',
  'american horror story', 'buffy the vampire slayer', 'ash vs evil dead', 'bates motel',
  'the twilight zone', 'the x files', 'penny dreadful', 'supernatural', 'tales from the crypt'
];
var catagories = [movies, books, tv];

//var a = new Letter(a);

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
  }
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

var dog = new Word('dog');
dog.init();
dog.display();
console.log(dog.letters);


dog.updateLetter('o');
console.log(dog.letters);
console.log(dog.display());



//if statement to switch display if letter found? rerun display function

//init: loop over word and create letter objects and push those letter objects into the letters property

  //if/else statements to indicate selected catagory
  // Word.prototype.selectWord = function() {
  //   //randomly select catagory and word within catagory
  //   var chosenCatagory = catagories[Math.floor(Math.random() * catagories.length)];
  //   var chosenWord = chosenCatagory[Math.floor(Math.random() * chosenCatagory.length)];
  //   console.log(chosenWord);

  //   if (chosenCatagory === catagories[0]) {
  //     console.log("The Chosen Catagory is Movies!");

  //   } else if (chosenCatagory === catagories[1]) {
  //     console.log("The Chosen Catagory is Books!");

  //   } else if (chosenCatagory === catagories[2]) {
  //     console.log("The Chosen Catagory is TV!");

  //   }
  // }

// Word.prototype.addLetter = function(l){
//   if (this.studs.length < this.capacity){
//     this.letArray.push(l);
//   }
// }

module.exports = Word;