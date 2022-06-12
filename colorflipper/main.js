const colors = ["#000080", "#000088", "#0000CD", "#0000FF"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = colors[randomNumber];
})