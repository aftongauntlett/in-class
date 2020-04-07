

const h1 = document.querySelectorAll("h1");
const imgEl = document.querySelectorAll("img");
const aTags = document.querySelectorAll("a");

// created for loop. i is already 0-2 used i + 1 to give us 3 (for image 1, 2 and 3)

for (let i = 0; i < 3; i++) {
    imgEl[i].setAttribute("src", "images/image_" + (i + 1) + ".jpg");
    imgEl[i].setAttribute("style", "width:auto; height:auto; display: block; margin-left: auto; margin-right: auto; width: 50%")

}

for (let i = 0; i < 3; i++) {
    aTags[i].setAttribute("href", "https://github.com");

}

h1[0].setAttribute("style", "font-size: 50px; color: #938096; text-align:center");









// ???
// const body = document.getElementById("body");
// // body.setAttribute("style", "background-color: #b59eac");
// mainDiv.body.style.color = "background-color: #b59eac";

