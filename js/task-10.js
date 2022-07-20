const inputRef = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');
let width = 30;
let height = 30;

btnCreate.addEventListener('click', getNumberFn);
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getNumberFn() {
  let amount = inputRef.value;
  createBoxess(amount);
}

function createBoxess(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    width += 10;
    height += 10;
    const boxRef = document.createElement('div');
    boxRef.style.width = `${width}px`;
    boxRef.style.height = `${height}px`;
    boxRef.style.backgroundColor = getRandomHexColor();
    boxRef.style.marginBottom = '10px';    
    boxes.push(boxRef);
  }
  onCreateBoxes(boxes);
}

function onCreateBoxes(boxes) {
  boxContainer.append(...boxes);
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
};



