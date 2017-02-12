var inquirer = require('inquirer');
var Letter = require('./letter');
var Word = require('./word');
var colors = require('colors');

//declare catagories
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

// inquirer prompt to initiate game
inquirer.prompt([{
  type: "input",
  name: "game",
  message: "Would you like to play Horror Hangman?"},
  ]).then(function(data){
    // accounts for various answers like yes, Yes, yeah, yup, yeeeaaahhh, etc.
    if (data.game[0].toLowerCase() == 'y') {
      startGame();
    } else {
      console.log("You should play Hangman");
    }
  });


// game function
function startGame(){
  // chooses word to play 
  var chosenCatagory = catagories[Math.floor(Math.random() * catagories.length)];
  var chosenWord = chosenCatagory[Math.floor(Math.random() * chosenCatagory.length)];

  if (chosenCatagory === catagories[0]) {
    console.log("The Chosen Catagory is Movies!".yellow.bold);

  } else if (chosenCatagory === catagories[1]) {
    console.log("The Chosen Catagory is Books!".yellow.bold);

  } else if (chosenCatagory === catagories[2]) {
    console.log("The Chosen Catagory is TV!".yellow.bold);

  }

  // creates new word object from chosenWord
  var wordObject = new Word(chosenWord);
  wordObject.init();
  console.log(wordObject.display());

  // asks user to guess
  function askLetter(){
    inquirer.prompt([{
      type: "input",
      name: "guess",
      message: "Guess a letter or type 'quit' to exit."},
    ]).then(function(data){
      if (data.guess != 'quit') {
        // checks that guess is a letter
        var reg = /^[a-zA-Z]+$/;
        // if guess is a letter, game continues...
        if(data.guess.match(reg)) {
          wordObject.updateLetter(data.guess);
          console.log(wordObject.display());

          // displays guesses
          console.log('Guesses Left: '.cyan.bold + wordObject.guesses);
                
          // keeps track of how many correct letters are guessed
          wordObject.matches = 0;
          for(i=0; i<wordObject.letters.length; i++){
            if(wordObject.letters[i].found == true){
              wordObject.matches++
            }
          }  

          // displays correct matches
          console.log('Matches: '.cyan.bold + wordObject.matches);

          //keeps track if user wins or looses game
          if (((wordObject.matches + wordObject.dashes + wordObject.spaces)  == wordObject.letters.length) && (wordObject.guesses > 0)) {
            console.log(wordObject.newWord);
            console.log("You've Won Horror Hangman!".green.bold);
            replay();
          } else if(wordObject.guesses <= 0){
            console.log(wordObject.newWord);
            console.log("Game Over! You are out of guesses".red.bold);
            replay();
          } else {
            askLetter(); 
          }

        } else { 
          // if guess is not a letter, asks for another guess
           console.log("That is not a valid guess".magenta.bold);
           askLetter();
        }        
      }
    });
  }

  askLetter();

  // restarts game
  function replay() {
    inquirer.prompt([{
      type: "input",
      name: "restart",
      message: "Want to play again?"},
    ]).then(function(data){
      // accounts for various inputs
      if(data.restart[0].toLowerCase() == 'y'){
        startGame();
      } else {
        console.log("You should play again!");
      }
    });
  }      
}