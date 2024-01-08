const arrowLeft = document.querySelector(".fa-chevron-left");
const arrowRight = document.querySelector(".fa-chevron-right");
const sliderImage = document.querySelector(".slider-image");

const image = [
    "casino.jpg", "cards.jpg", "rulette.avif", "slots2.jpg", "slots.jpg",
];

let counter = 0;

if (arrowLeft){
    arrowRight.addEventListener("click", () => {
        if(counter === image.length - 1){
            counter = 0;
            sliderImage.src = `./images/${image [counter]}`;
            return;

        };
        counter += 1;
        sliderImage.src = `./images/${image [counter]}`;
    });
    arrowLeft.addEventListener("click", () => {
        if(counter === 0){
            counter = image.length - 1;
            sliderImage.src = `./images/${image [counter]}`;
            return;
        };
        counter -= 1;
        sliderImage.src = `./images/${image [counter]}`;
    });
};


const leftArrow = document.querySelector(".fa-circle-chevron-left");
const rightArrow = document.querySelector(".fa-circle-chevron-right");
const advertisement = document.querySelector(".advertisement");

const img = [
    "th.jpg", "slot.png", "slot3.avif", "slot4.jpg", "slot5.jpg",
];

if (leftArrow){
    rightArrow.addEventListener("click", () => {
        if(counter === img.length - 1){
            counter = 0;
            advertisement.src = `./img/${img[counter]}`;
            return;
        };
        counter += 1;
        advertisement.src = `./img/${img[counter]}`;
    });
    leftArrow.addEventListener("click", () => {
        if (counter === 0){
            counter = img.length - 1;
            advertisement.src = `./img/${img[counter]}`;
            return;
        };
        counter -= 1;
        advertisement.src = `./img/${img[counter]}`;
    });
    
};


const showBtn = document.querySelector(".show-btn");
const closeBtn = document.querySelector(".fa-circle-xmark");
const sidebar = document.querySelector(".sidebar");

showBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.add("show-sidebar")
});
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar")
});
