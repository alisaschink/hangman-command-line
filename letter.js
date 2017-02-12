// requires colors npm package
var colors = require('colors');

//Letter constructor function
function Letter(letter){
  this.letter = letter;
  this.found = false;
  // displays value or placeholder for each letter
  this.display = function(){
    if(this.letter == '-'){
      return '-';
    } else if (this.letter == ' '){
      return '  ';
    } else {
      if (this.found){
        return this.letter.green.bold;
      } else {
        return '_';
      }
    };  
  };
};

module.exports = Letter;