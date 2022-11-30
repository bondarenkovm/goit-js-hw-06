const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
console.log(list);

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});
console.log(elements);

list.prepend(...elements);
// =============================--#2--=========
// const makeingredients = options => {
//   return options.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = ingredient;
//     return itemEl;
//   });
// };
// const elements = makeingredients(ingredients);
// list.prepend(...elements);
