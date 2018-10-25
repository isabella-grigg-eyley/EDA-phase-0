// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
    one();
    two();
    three();
    makeVisible();
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we apply a new CSS class to it:
  one.classList.add('blue');
}

// CREATE FUNCTION two HERE

function two () {
    let two = document.getElementById("two");
    two.classList.add("green");
}

// CREATE FUNCTION three HERE

function three () {
    let three = document.getElementById("three");
    three.classList.add("purple");
}

// CREATE FUNCTION makeVisible HERE

function makeVisible () {

    /* chose to do it this way to future proof in the case
    of more invisible elements being added */

    let invisElements = document.getElementsByClassName("invisible");
    for (let i = 0; i < invisElements.length; i++) {
        invisElements[i].classList.add("visible");
    }
}