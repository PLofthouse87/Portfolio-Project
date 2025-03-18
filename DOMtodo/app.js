"use strict";
//console.log("Hello World");

//Creating variables to hold various elements of the DOM
//Creating the variable domForm to hold the entire form element
const domForm = document.forms.domToDoForm;
//Creating the variable domToDoOut to hold the div element where to do items will be output to
const domToDoOutList = document.getElementById("domToDoOutList");
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

//Creating the function createDomToDo() which will take four arguments: title , deets , priority and endDate
// The function will create a new element inside the .domToDoOut node
function createDomTodo(title, deets) {
    
    
    // Create the text for the title.
    const titleNode = document.createTextNode(title);
    // Creating the text for the details
    const deetsNode = document.createTextNode(deets);
    // Create a div to contain the title text.
    const textDiv = document.createElement('div');
    // Create a div to contain the deets text.
    const deetDiv = document.createElement('div');
    // Add the title text to its div container.
    textDiv.appendChild(titleNode);
    //Adding the deets text to the div container
    deetDiv.appendChild(deetsNode);
    // Create the new list item for the new todo.
    const domToDo = document.createElement('li');
    // Add the text div as the first child of the new todo.
    domToDo.appendChild(textDiv);
    // Adding the text deetDiv as the second child of the new todo
    domToDo.appendChild(deetDiv);
    //Returning domToDo
    return domToDo;
}




//adding an event listener to the domForm variable/DOM element activated upon the submission of the form
domForm.addEventListener('submit', function (event) {
    //Preventing default action
    event.preventDefault();
    //Printing all the submitted data to console
    console.log(taskTitle.value, taskDeets.value, taskPriority.value, taskEndDate.value);
    // Creating the variable newDomToDo to hold the result of calling the function createDomToDo with taskTitle.value as an argument
    const newDomTodo = createDomTodo(taskTitle.value, taskDeets.value); 
    // Add the new todo to the todo pane (ie add a new list item to the unordered
    // list).
    domToDoOutList.appendChild(newDomTodo);

    //Final step, resetting the form;
    domForm.reset();
})