const colors = ["green", "blue", "red", "yellow", "black"];
const text = document.querySelector("#colorValue");
const body = document.querySelector("body");
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    // alert('working');
    const randomColor = getRandomColor();

    // console.log(colors[randomColor]);

    body.style.backgroundColor = colors[randomColor];
    text.textContent = colors[randomColor];
    // console.log(randomColor);
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}