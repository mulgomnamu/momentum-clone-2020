const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(){
    const imgNumber = getRandom();
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom(){
    return Math.floor(Math.random() * IMG_NUMBER)
}