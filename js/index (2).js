const inputRef = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');
let width = 0;
let height = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputValue = () => {
    let amount = inputRef.value;
    createBoxes(amount);
}

const createBoxes = (amount) => {
    console.log(amount)
    for (let i = 0; i < amount; i++) {
        width += 10;
        height += 10;
        const square = document.createElement('div');
        square.style.width = `${width}px`;
        square.style.height = `${height}px`;
        square.style.backgroundColor = getRandomHexColor();
        boxContainer.append(square);
    }
}

const destroyBoxes = () => {
    boxContainer.innerHTML = '';
  };
  
btnCreate.addEventListener('click', inputValue);
btnDestroy.addEventListener('click', destroyBoxes);