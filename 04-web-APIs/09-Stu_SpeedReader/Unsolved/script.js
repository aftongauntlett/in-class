// # Speed Reader 

// In this activity you are going to create a speed reading application. It will input a single word on the screen at a time, changing to the next word after 1 second. This equates to reading at 60 Words Per Minute (WPM).

// ## Instructions

// * The app should countdown from 5, and when the countdown is finished it should print one word to the screen every second. Each word replaces the other.

// * Open `index.html` and create the necessary HTML. You will need at least 3 elements.

// * Open `script.js`.

//   * The two function names have been created for you, as well as a poem to speed read.

// * Fill out the necessary code that would create a countdown timer. When that timer completes, it should disappear and speed reading should begin.

var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var h1Tag = document.createElement("h1");
var h2Tag = document.createElement("h2");
var pTag = document.createElement("p");
var timeEl = document.querySelector(".time");
var secondsLeft = 5;

function prepareRead() {
  console.log('test');
}
setTimeout([poem], 5000);




function speedRead() {
  // Print words to the screen one at a time.
}

setTime();


