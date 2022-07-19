function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');


function getNumberFn() {
  let amount = inputRef.value;
  return amount;
}

function createBoxess() {
  const boxRef = document.createElement('div');
  boxRef.style.width = '30px';
  boxRef.style.height = '30px';
  boxRef.style.backgroundColor = getRandomHexColor();
  
  boxContainer.append(boxRef);
}

function destroyBoxes() {
  boxContainer.innerHTML = '';
};

inputRef.addEventListener('input', getNumberFn);
btnCreate.addEventListener('click', createBoxess);
btnDestroy.addEventListener('click', destroyBoxes);

//--------------------------------------------------------------------

// const ingredientsListRef = document.querySelector('#ingredients');
// const ingredientsItems = [];

// const generateItems = ingredients.forEach(ingredient => {
//   const ingredientsItemRef = document.createElement('li');

//   ingredientsItemRef.classList.add('item');
//   ingredientsItemRef.textContent = ingredient;
//   ingredientsItems.push(ingredientsItemRef);
// });

// ingredientsListRef.append(...ingredientsItems);