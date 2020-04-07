const imgEl = document.querySelectorAll("img");
const aTags = document.querySelectorAll("a");






imgEl[0].setAttribute("src", "images/image_1.jpg");
imgEl[1].setAttribute("src", "images/image_2.jpg");
imgEl[2].setAttribute("src", "images/image_3.jpg");

for (let i = 0; i < 3; i++) {
    aTags[i].setAttribute("href", "https://github.com");

}