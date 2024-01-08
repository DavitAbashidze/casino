const btn = document.querySelector(".btn");
const body = document.querySelector("body");
 const color = [
    "blue", "red", "purple", 
 ];

 body.style.backgroundColor = "black";

 btn.addEventListener("click", () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
    body.style.transition = "2s linear";
 });