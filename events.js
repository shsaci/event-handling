// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one();
  two();
  three();
  four();

  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue);

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite);
}

// CREATE FUNCTION two HERE
function two () {
  // Find the element two:
  var two = document.getElementById('two');

// Add an event listener to it:
two.addEventListener('mouseenter', makeGreen);

// Add an event listener to make white on mouse leave:
two.addEventListener('mouseleave', makeWhite);
}

// CREATE FUNCTION three HERE
function three () {
// Find element three:
  var three = document.getElementById('three');

  // Add an event listener to the element:
  three.addEventListener('mouseenter', makeRed);

  // Add an event listener to make white on mouse leave:
  three.addEventListener('mouseleave', makeWhite);

}

// CREATE FUNCTION four HERE
function four () {
// Find element four:
var four = document.getElementById('four');

// Add an event listener to the element:
four.addEventListener('click', makeGreen);

// Add an event listener to make white on doubleClick
four.addEventListener('dblclick', makeWhite);
}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue';
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green';
}

function makeRed (evt) {
  evt.target.style.backgroundColor = 'red';
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
