const buttonEl = document.querySelector('.change-color')

const spanEl = document.querySelector('.color')

console.log(buttonEl);
console.log(spanEl);

const body = document.querySelector('body')

console.log("body");


buttonEl.addEventListener("click", handleDeClick)

function handleDeClick() {

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    }

    body.style.backgroundColor = getRandomHexColor();


    spanEl.textContent = body.style.backgroundColor;

    console.log("spanEl.textContent");






}

