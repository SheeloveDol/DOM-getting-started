/* 
The document keyword grants access to the root of the DOM in JavaScript
The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method
You can also access an element directly by its ID with .getElementById()
The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively
You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively
The .onclick property can add interactivity to a DOM element based on a click event
*/


document.querySelector('h1').innerHTML = 'Most popular TV show searchees in 2016';

document.getElementById('fourth').innerHTML = 'Fourth element';
document.getElementById('second').innerHTML = 'What is going on?';

let nextInLine = document.getElementById('third');
nextInLine.style.fontSize = '2em';

let body = document.body;
body.style.backgroundColor = '#407F3E';

// creating an element:
let newDestination = document.createElement('li');
newDestination.id = 'oaxaca';
newDestination.innerHTML = 'Oaxaca, Mexico';
document.querySelector('ol').appendChild(newDestination);


// removing an element:
let forDeletion = document.getElementById('first');
document.querySelector('ol').removeChild(forDeletion);


// Traversing the DOM
/* 
let first = document.body.firstChild;
first.innerHTML = 'I am the child';

first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!'
*/

// hidding and element:
let suits = document.getElementById('fifth');
suits.hidden = true;


// Adding interactivity with onclick

let element = document.getElementById('second');
function turnBackgroundBlue() {
  element.style.backgroundColor = 'blue';
  element.style.color = 'white';
}

element.onclick = turnBackgroundBlue;


