let output = document.getElementById('output');

//Creating the object planet_sol_distance{} to hold key value pairs where the key is the planet name and the value is that planet's distance from the sun
planet_sol_distance = {	
    "Mercury": 57910000,
    "Venus": 108210000,
    "Earth": 149598023,
    "Mars": 227939366,
    "Jupiter": 778479000,
    "Saturn": 1433530000,
    "Uranus": 2870972000,
    "Neptune": 4500000000,
}
//Creating the variable lsKmSecond to hold the value how many kilometers light travels in a second
lsKmSecond = 299792458;

//Creating the variables that each hold the corresponding HTML button element
let mercuryButton = document.getElementById('mercury');
let venusButton = document.getElementById('venus');
let earthButton = document.getElementById('earth');
let marsButton = document.getElementById('mars');
let jupiterButton = document.getElementById("jupiter");
let saturnButton = document.getElementById('saturn');
let uranusButton = document.getElementById('uranus');
let neptuneButton = document.getElementById('neptune');

//Creating the function lightJourneyTime() which takes the argument distance. 
// It returns the result of dividing the value held in the argument distance by the value held in the variable lsKmSecond

const lightJourneyTime = (distance) => {
    // Creating the temp variable longJourney to hold the result of dividing distance by the speed of light per second multiplied by 1000
    longJourney = (distance/lsKmSecond) * 1000;
    //Creating and returning the variable journeyTime to hold the result of using the .toFixed method with an argument of 2 to round the number to two decimal places
    return journeyTime = longJourney.toFixed(2);
}

//Creating the function paraMaker which takes one argument planet , a variable
const paraMaker = (planet) => {
    //Creating the variable outputPara to hold the paragraph to be output after a button is clicked
    return outputPara = `${planet} is ${planet_sol_distance[planet]}km from the sun. This means it takes ${lightJourneyTime(planet_sol_distance[planet])} seconds for sunlight to reach it`;
}

//paraMaker("Jupiter");
//Creating the event handlers for each planet's button
const mercuryClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Mercury");
    return output.innerHTML = outputPara;
}
const venusClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Venus");
    return output.innerHTML = outputPara;
}
const earthClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Earth");
    return output.innerHTML = outputPara;
}
const marsClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Mars");
    return output.innerHTML = outputPara;
}
const jupiterClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Jupiter");
    return output.innerHTML = outputPara;
}
const saturnClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Saturn");
    return output.innerHTML = outputPara;
}
const uranusClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Uranus");
    return output.innerHTML = outputPara;
}
const neptuneClick = () => {
    // Creating and returning the variable finalPara to hold the outcome of calling the function paraMaker with the argument "Mercury"
    paraMaker("Neptune");
    return output.innerHTML = outputPara;
}

//Creating the .addEventListener events for each button
mercuryButton.addEventListener('click', mercuryClick);
venusButton.addEventListener('click', venusClick);
earthButton.addEventListener('click', earthClick);
marsButton.addEventListener('click', marsClick);
jupiterButton.addEventListener('click', jupiterClick);
saturnButton.addEventListener('click', saturnClick);
uranusButton.addEventListener('click', uranusClick);
neptuneButton.addEventListener('click', neptuneClick);

//marsClick();

/*let outputTest = document.getElementById('output');
outputTest.innerHTML = outputPara; */
