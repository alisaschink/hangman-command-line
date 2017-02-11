var inquirer = require('inquirer');
var Letter = require('./letter');
var Word = require('./word');

// var newClass;

// inquirer.prompt([
//   {type: "input",
//     name: "subject",
//     message: "What's your class's subject?"},
//   {type: "input",
//     name: "capacity",
//     message: "What's the capacity of the class?"},

// ]).then(function(data){
//     var students = [];
//       newClass = new Clas([], data.subject, data.capacity);

//       askToAddStudent();
// });

// function newStudent(){
//   inquirer.prompt([
//     {type: "input",
//       name: "sName",
//       message: "What's your student's name?"}

//   ]).then(function(data){
//         var newStudent = new Student(data.sName);
//         newClass.addStudent(newStudent);

//         console.log(newClass);
        
//         askToAddStudent();
//   });
// }

// function askToAddStudent(){
//   inquirer.prompt([
//     {type: "input",
//       name: "addStudents",
//       message: "Do you want to add students to that class?"}

//   ]).then(function(data){
//         if (data.addStudents == 'yes'){
//           newStudent();
//         }else{
//           console.log(newClass);
//         }
//   });
// }



// var inquirer = require('inquirer')
// var Word = require('./Word.js');

// var words = ['jeff', 'john', 'rhyna'];

// var wordToPlay = words[Math.floor(Math.random()*words.length)];

// var wordObject = new Word(wordToPlay);
// wordObject.makeAndPushLettersIntoWord();
// console.log(wordObject.display());

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