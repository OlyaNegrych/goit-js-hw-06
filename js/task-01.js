//------------Завдання 1.1.----------------------
const numberOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCategories.length}`);


//-------------Завдання 1.2.---------------------

const categoryAllitems = document.querySelectorAll('.item');
const categoryTitle = document.querySelectorAll('h2');
const categoryLi = document.querySelectorAll('.item li');

console.log(`Category: ${categoryTitle[0].textContent}`);
console.log(`Elements: ${categoryLi[0].length}`);

console.log(`Category: ${categoryTitle[1].textContent}`);
console.log(`Elements: ${categoryLi[0].length}`);

console.log(`Category: ${categoryTitle[2].textContent}`);
console.log(`Elements: ${categoryLi[0].length}`);


// const categoriesTitles = document.querySelectorAll('h2');

// const categoryFirstItem = document
//     .querySelectorAll('.item')[0]
//     .querySelectorAll('li');

// console.log(`Category: ${categoriesTitles[0].textContent}`);
// console.log(`Elements: ${categoryFirstItem.length}`);

// const categorySecondItem = document
//     .querySelectorAll('.item')[1]
//     .querySelectorAll('li');

// console.log(`Category: ${categoriesTitles[1].textContent}`);
// console.log(`Elements: ${categorySecondItem.length}`);

// const categoryThirdItem = document
//     .querySelectorAll('.item')[2]
//     .querySelectorAll('li');

// console.log(`Category: ${categoriesTitles[2].textContent}`);
// console.log(`Elements: ${categoryThirdItem.length}`);


 