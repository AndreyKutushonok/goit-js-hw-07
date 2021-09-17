const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')

const createList = ingredients => {

return ingredients.map(ingredient => {

  const listEl = document.createElement('li');
  listEl.textContent = ingredient;

  return listEl
  })
};
const elements = createList(ingredients);
ingredientsRef.append(...elements)


// алтернатива ...напевно

// const list = document.querySelector('ul#ingredients');
// const markup = ingredients.reduce((string, item) => string +`<li>${item}</li>`,'');

// list.innerHTML = markup;
// console.log(list)

