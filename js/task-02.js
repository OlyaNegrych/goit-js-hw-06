const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');
const ingredientsItems = [];

const generateItems = ingredients.forEach(ingredient => {
  
  const ingredientsItemRef = document.createElement('li');

  ingredientsItemRef.classList.add('item');
  ingredientsItemRef.textContent = ingredient;
  
  ingredientsItems.push(ingredientsItemRef);
});

ingredientsListRef.append(...ingredientsItems);



