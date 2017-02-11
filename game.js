var inquirer = require('inquirer');
var Letter = require('./letter');
var Word = require('./word');

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

// chooses word to play 
var chosenCatagory = catagories[Math.floor(Math.random() * catagories.length)];
var chosenWord = chosenCatagory[Math.floor(Math.random() * chosenCatagory.length)];

if (chosenCatagory === catagories[0]) {
  console.log("The Chosen Catagory is Movies!");

} else if (chosenCatagory === catagories[1]) {
  console.log("The Chosen Catagory is Books!");

} else if (chosenCatagory === catagories[2]) {
  console.log("The Chosen Catagory is TV!");

}

var wordObject = new Word(chosenWord);
wordObject.init();
console.log(wordObject.display());

// function askLetter(){
//     inquirer.prompt([
//     {
//     type: "input",
//     name: "guess",
//     message: "What letter do you guess? If you are done then say no."},
//     ]).then(function(data){
//         if (data.guess != 'no') {
//             wordObject.updateLetter(data.guess);

//             console.log(wordObject.display());

//             askLetter();
//         }
//     });
// }

// askLetter();