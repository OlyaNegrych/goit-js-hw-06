//------------Завдання 1.1.----------------------
const numberOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCategories.length}`);


//-------------Завдання 1.2.---------------------
const categoriesTitles = document.querySelectorAll('h2');

const categoryFirstItem = document
    .querySelectorAll('.item')[0]
    .querySelectorAll('li');

console.log(`Category: ${categoriesTitles[0].textContent}`);
console.log(`Elements: ${categoryFirstItem.length}`);

const categorySecondItem = document
    .querySelectorAll('.item')[1]
    .querySelectorAll('li');

console.log(`Category: ${categoriesTitles[1].textContent}`);
console.log(`Elements: ${categorySecondItem.length}`);

const categoryThirdItem = document
    .querySelectorAll('.item')[2]
    .querySelectorAll('li');

console.log(`Category: ${categoriesTitles[2].textContent}`);
console.log(`Elements: ${categoryThirdItem.length}`);


// const categoryInfo = numberOfCategories.forEach(category => {
//     const categoryAllitems = document.querySelectorAll('.item');
//     const categoryTitle = document.querySelector('h2');

//     console.log(`Category: ${categoryTitle.textContent}`);
//     console.log(`Elements: ${categoryAllitems.length}`);
// });
