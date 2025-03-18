"use strict";
//console.log("Hello World");

//Creating variables to hold various elements of the DOM
//Creating the variable domForm to hold the entire form element
const domForm = document.forms.domToDoForm;
//Creating the variable domToDoOut to hold the div element where to do items will be output to
const domToDoOut = document.getElementById("domToDoOut");
//Creating the variable taskTitle to hold the contents of Task Title form element
const taskTitle = domForm.elements.taskTitle;
//Creating the variable taskDeets to hold the contents of Task Details form element
const taskDeets = domForm.elements.taskDeets;
//Creating the variable taskPriority to hold the contents of Task Priority form element
const taskPriority = domForm.elements.taskPriority;
//Creating the variable taskEndDate to hold the contents of Task End Date form element
const taskEndDate = domForm.elements.taskEndDate;

//Potentially needed in the future
// // Get a *live* list of all elements with the 'todo' class.
// const allTodos = document.getElementsByClassName('todo');
// // May also want to set up adding a node showing the date the todo item was created

//adding an event listener to the domForm variable/DOM element activated upon the submission of the form
domForm.addEventListener('submit', function (event) {
    //Preventing default action
    event.preventDefault();
    //Printing all the submitted data to console
    console.log(taskTitle.value, taskDeets.value, taskPriority.value, taskEndDate.value);


    //Final step, resetting the form;
    domForm.reset();
})