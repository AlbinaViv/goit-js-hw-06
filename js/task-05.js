const inputEl = document.querySelector('#name-input')

const outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', handeleInput)

function handeleInput(event) {
    outputEl.textContent = event.currentTarget.value;
    if (textInput.value.length === 6) {
        outputEl.textContent = 'Anonymous';
    }

};
