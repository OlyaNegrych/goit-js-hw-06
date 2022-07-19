const inputRef = document.querySelector('#validation-input');

const checkFn = () => {
    
  if (inputRef.value.length !== Number(inputRef.dataset.length)) {
      inputRef.classList.add('invalid');
    } else {
      inputRef.classList.add('valid');
      inputRef.classList.replace('invalid', 'valid');
    }
    
};

inputRef.addEventListener('blur', checkFn);
