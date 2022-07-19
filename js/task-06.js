const inputRef = document.querySelector('#validation-input');

const checkFn = () => {
    
    console.log(inputRef.value.length);
    console.log(Number(inputRef.dataset.length));
    console.log(inputRef.value.length === Number(inputRef.dataset.length));

    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
      inputRef.classList.add('invalid');
    } else {
        inputRef.classList.replace('invalid', 'valid');
    }
    
};

inputRef.addEventListener('blur', checkFn);
