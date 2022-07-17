const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const generateItems = ingredients.forEach(ingredient => {
  
  const ingredientsItemRef = document.createElement('li');
  ingredientsItemRef.classList.add('.item');
  ingredientsItemRef.textContent = ingredient;
  
  return ingredientsItemRef;
  console.log(ingredientsItemRef);
});
// console.log(ingredientsItemRef);

// ingredientsListRef.append(...ingredientsItemsRef);

