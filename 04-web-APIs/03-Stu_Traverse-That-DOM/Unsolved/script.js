// Target the div with an id of "articles"
// Change its font size to `50px`.
var articlesDiv = document.getElementById("articles");
articlesDiv.style.fontSize = "50px";
console.log(articlesDiv.children[0]);
// Get the first child of articles div, change ITS last child to 
// have a font color of `blue`.
articlesDiv.children[0].lastElementChild.style.color = "red";
// Change its previous sibling to have a background color of `black`.
articlesDiv.previousElementSibling.style.backgroundColor = "black";
// Target the div with the ID of `main`.
// Change its second child node so the text is `underlined`.
var mainDiv = document.getElementById("main");
mainDiv.children[1].style.textDecoration = "underline";
// Change its last child element to have a font size of `50px`.
mainDiv.lastElementChild.style.fontSize = "50px";
// Change its first child element to have a font color of `orange`.
// Change its last child elements parent to have a font size of `40px`.