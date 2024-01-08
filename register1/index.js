const arrowLeft = document.querySelector(".fa-chevron-left");
const arrowRight = document.querySelector(".fa-chevron-right");
const sliderImage = document.querySelector(".slider-image");

const images = [
    "a.avif", "b.avif", "c.jpg",
    "d.jpg",
];


let counter = 0;

if (arrowLeft){
    arrowRight.addEventListener("click", () => {
        if (counter === images.length - 1) {
            counter = 0;
            sliderImage.src = `./img/${images[counter]}`;
            return;
        }
        counter += 1;
        sliderImage.src = `./img/${images[counter]}`;

    });
    arrowLeft.addEventListener("click", () => {
        if (counter === 0 ){
            counter = images.length -1;
            sliderImage.src = `./img/${images[counter]}`;
            return;
        }
        counter -= 1;
        sliderImage.src = `./img/${images[counter]}`;
    });
};
