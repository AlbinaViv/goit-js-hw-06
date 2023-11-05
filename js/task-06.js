const inputEl = document.querySelector('#validation-input')

const lengthMax = document.querySelector('input[data-length="6"]')

inputEl.addEventListener('blur', handeleInput)

function handeleInput(event) {
    const nameEl = event.currentTarget.value;

    // console.log(event.currentTarget.value);

    if (nameEl.length === 'input[data-length="6"]') {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
}

