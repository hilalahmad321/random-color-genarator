const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const text = document.querySelector("#colorValue");
const body = document.querySelector("body");
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    // console.log("working");

    let i;
    let hexColor = "#";
    for (i = 1; i < 7; i++) {
        hexColor += colors[getRandomNumber()];
    }
    body.style.backgroundColor = hexColor;

    text.textContent = hexColor;

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}