const btn = document.querySelector(".button");
const btnIncrement = document.querySelector(".increment");

const btnDecrement = document.querySelector(".decrement");

const number = document.querySelector("#value");

let counterValue = 0;

btnIncrement.addEventListener("click", function () {
    counterValue += 1;
    number.innerHTML = counterValue;
});

