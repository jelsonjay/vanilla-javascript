// Declarations and Literals
// the 'use strict' directive was new in ECMAScript version 5
// the purpose of 'use strict' is to indicate that the code should be executed in 'stict mode'
"use strict";

// Vanillia JavaScript Data Types
//In Vanillia JavaScript variables can hold many data types:
// All Vanillia JavaScript variables must be identified with unique names.
//Numbers
/*
let nember = 10;
*/
//Strings
/*
let name ='Jelson';
*/
//Array
/*
let colors = ["blue", "red" , 'yellow'];
*/

//Objects
let person = {
  name: "Jelson",
  age: 100,
  gender: "male",
  jobTitle: "Fron-end - Web developer",
};
console.log(person.jobTitle);
//Booleans
/*
true or false
*/
//Undefined
// undefined, type is undefined
//In Vanillia JavaScript null is "nothing". It is supposed to be something that doesn't exist.
//Null

// Vanillia JavaScript Types are Dynamic
//Vanillia JavaScript has dynamic types.
//This means that the same variable can be used to hold different data types:

/*
//Example
let number;
number = 2020;
number = "string";
console.log(number);
/*


/*
var firstName = 'Jelson';
//console.log(firstName);

function myName() {
    var firstName = "Jelson";
    console.log(firstName);
  }
  //
  if (true) {
    var midlName = "Jay";
  }

  //console.log(midlName);

  for (var i = 0; i < 4; i++) {
    var lastName = "J";
  }
  console.log(lastName);
/end var*

/*
// the let statement declares a block-scope local variable
let firstName = "Jelson";

function myName() {
  let firstName = "Jelson";
  console.log(firstName);
}
//

if (true) {
    let midlName = "Jay";
    console.log(midlName);
}

for (let i = 0; i < 4; i++) {
    let lastName = "J";
    console.log(lastName);
}

*/
/*
// block-scope
const firstName = "Jelson J";
console.log(firstName);

function myName() {
  const firstName = "Jelson";
  console.log(firstName);
}
//

if (true) {
    const midlName = "Jay";
    console.log(midlName);
}

for (let i = 0; i < 4; i++) {
    const lastName = "J";
    console.log(lastName);
}
*/
