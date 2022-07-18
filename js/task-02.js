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



// const ingredientsList = list => {
//   return list.map(ingredient => {
//     const listEl = document.createElement('li');
//     listEl.textContent = ingredient;
//     listEl.classList.add('item');
//     return listEl;
//   });
// };

// const ingredientsEl = ingredientsList(ingredients);
// const ingredientCollection = document.querySelector('#ingredients');
// ingredientCollection.append(...ingredientsEl);
