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