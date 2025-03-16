"use strict";
//console.log("Hello World");

//My inital aim is to create a function that takes in a string and converts each character that is a letter to alternate between lower and upper case, starting with lower case and returns the new string
// The function will ignore other characters, including special letter characters such as é.


//The first step is creating the global variable letterTest which will hold a RegExp expression for all letters of the alphabet upper and lower case.
let letterTest = new RegExp('[a-z]', 'i');
//Now the function jokerCase() will be created. It will take one argument, inString , a string
// let justChar = "A";
// console.log(letterTest.test(justChar));

function jokerCase(inString) {
    //Creating the local variable jokered as an empty string
    let jokered = "";
    //Creating the local variable oddEven as the number 0
    let oddEven = 0;
    // Creating a for in loop (with the temp variable character) to iterate through each element in the string held in inStringUp
    for (let i = 0; i < inString.length; i++) {
        //Creating an if statement to check calling the .test() method on the RegExp in letterTest with the current i element of the string in inString 
        if (letterTest.test(inString[i])) {
            // Creating a switch statement that will make the letter character lower case if oddEven is even and upper case if oddEven is odd.
            switch(oddEven % 2 === 0) {
                case true:
                    // If oddEven is equal then the character is set to lower case, added to the string held in jokered and oddEven is increased by one
                  jokered += inString[i].toLowerCase();
                  oddEven++
                  break;
                case false:
                    // If oddEven is odd then the character is set to upper case, added to the string held in jokered and oddEven is increased by one
                    jokered += inString[i].toUpperCase();
                    oddEven++
                  break;
                default:
                  console.log("Error!")
              } 
        } else {
            // Just adding the character to the string held in jokered if it doesn't pass the RegExp check
            jokered += inString[i];
        }
    }
    return jokered;
}


//Creating the variable preJoke to hold the string generated from the form text HTML form field with the id "preJoke"
let preJoke = document.forms.jokeForm.preJoke;

//Creating the variable jokerButton to hold the HTML form submission button with the id jokerButton using the querySelector() method
let jokerForm = document.forms.jokeForm;

//creating an event listener for the jokerButton variable that will activate upon submit
jokerForm.addEventListener('submit', function(event){
    //The event will prevent the default behaviour
    event.preventDefault();
    //Printing to console the result of calling the jokerCase() function on the value (.value) held in the variable preJoke
    console.log(jokerCase(preJoke.value));
    //Resetting the fields of the form
    jokerForm.reset();
})


console.log(jokerCase("I think hats are really cool."));