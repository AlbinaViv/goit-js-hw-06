const inputEl = document.querySelector('#font-size-control');
// console.log(inputEl);

const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', handeleInput)


let step = 16;
const range = age >= 20;
function handeleInput(event) {
    step += 1;
    if (step >= 16 & <= 96) {

        spanEl.style.fontSize = `${step}px`;
        console.log(spanEl.style.fontSize);

    }
}