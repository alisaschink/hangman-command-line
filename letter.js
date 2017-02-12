var colors = require('colors');

function Letter(letter){
  this.letter = letter;
  this.found = false;
  
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
    }
    
  };
}

module.exports = Letter;