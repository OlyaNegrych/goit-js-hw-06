const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const inputNameFn = () => {
    if (inputRef.value.length === 0) {
        nameOutputRef.textContent = 'Anonymous';
    } else {
        nameOutputRef.textContent = inputRef.value;
    }
};

inputRef.addEventListener('input', inputNameFn);
