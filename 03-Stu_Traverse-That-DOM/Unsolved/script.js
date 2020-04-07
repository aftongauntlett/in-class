const articles = document.getElementById("articles")

articles.style = "font-size: 50px";

const articlesFirstChild = articles.children[0];
const articlesFirstChildLastChild = articlesFirstChild.children[1]
const previousSibling = articlesFirstChildLastChild.previousSibling


articlesFirstChildLastChild.style = "color: blue";
previousSibling.style = "background-color: black";

const welcome = document.getElementById("main")
const secondChild = welcome.children[1]




secondChild.style = "text-decoration: underline; font-size: 50px";