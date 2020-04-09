// # addEventListener On Click

// In this activity, we are going to create a button that increments a counter when clicked.

// ## Instructions

// * In a file called `index.html`, create a button containing the string "Increment".

// * In a file called `script.js`, create an event listener with a callback that increments the counter and displays the updated count on the webpage.

// * Add a button that decrements the counter when clicked.

// ## Bonus

// * Add some code to ensure that the count never gets below 0.


// create variables for the DOM elements

var buttonInc = document.getElementById("increment")
var buttonDec = document.getElementById("decrement")
var countSpan = document.getElementById("count")

var count = 0;

function updateSpan(){
  countSpan.textContent = count;
}

buttonInc.addEventListener("click", function (){
  count++;
  updateSpan();
});

buttonDec.addEventListener("click", function (){
  count--;
  if ( count < 0 ){
    count = 0;
  }
  updateSpan();
});
