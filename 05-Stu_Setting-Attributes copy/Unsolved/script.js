

var h1 = document.querySelector("h1");
var imgEl = document.querySelectorAll("img");
var aTags = document.querySelectorAll("a");

// created for loop. i is already 0-2 used i + 1 to give us 3 (for image 1, 2 and 3)

for (var i = 0; i < 3; i++) {
    imgEl[i].setAttribute("src", "images/image_" + (i + 1) + ".jpg");
    imgEl[i].setAttribute("style", "width:auto; height:auto; display: block; margin-left: auto; margin-right: auto; width: 50%")

}

for (var i = 0; i < 3; i++) {
    aTags[i].setAttribute("href", "https://github.com");

}

h1.setAttribute("style", "font-size: 50px; color: #938096; text-align:center");


// Gary's version

// var imgFiles = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg"];
// var links = ["https://google.com", "https://yahoo.com", "https://github.com"];
// var imgTags = document.querySelectorAll("img");
// var aTags = document.querySelectorAll("a");
// var mainDiv = document.querySelector("#main");
// for( var i=0; i<imgTags.length; i++ ){
//   console.log("images/image_" + (i*1)+1 + ".jpg");
//   imgTags[i].setAttribute("src", "images/image_" + i+1 + ".jpg");
//   imgTags[i].setAttribute("style", "border: 5px solid red;");
// }
// for( var i=0; i<aTags.length; i++ ){
//   aTags[i].setAttribute("href", links[i]);
// }
// mainDiv.setAttribute("style", "padding: 20px; background-color: #eee222");



