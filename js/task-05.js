const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const inputNameFn = () => {
    if (inputRef.value === '') {
        nameOutputRef.textContent = 'Anonymous';
    }
    nameOutputRef.textContent = inputRef.value;

};

inputRef.addEventListener('input', inputNameFn);
