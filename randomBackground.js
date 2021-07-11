const body = document.querySelector("body");
const img = [
    "macaron.jpg",
    "sand.jpg",
    "sky.jpg",
    "wheat.jpg"
];

function init(){
    console.log("hello");
    const jpg = img[Math.floor(Math.random() * img.length)];
    body.style.backgroundImage = `url("img/${jpg}")`;
};

init();