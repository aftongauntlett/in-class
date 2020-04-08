// used .split to create an array of strings so I did not have to individually make each word a string by itself.
var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.".split(" ")

// created poemText because I need a way to access the paragraph later
var poemText = document.querySelector("p")

// created count to iterate over the array
var count = 0

function prepareRead() {
  setTimeout(speedRead, 5000)
}

prepareRead()

// changed innerHTML of poemText to a bunch of words one at a time (count is the iterator) count++ increases it by one.
function speedRead() {
  poemText.innerHTML = poem[count]
  count++
  setTimeout(speedRead, 500)
}
