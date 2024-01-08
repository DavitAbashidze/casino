const button = document.getElementById("btn");
const body = document.querySelector("body");

const color = [
    "green", "purple", "yellow", "pink", "orange",
    "#fff",
]

body.style.backgroundColor = "black";

button.addEventListener("click", () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
    body.style.transition = "2s linear";

});