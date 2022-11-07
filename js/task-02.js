const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulEl = document.querySelector('#ingredients');

const createEl = ingredients.map(el => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList.add('item');
  console.log(liEl);
  return liEl;
});

ulEl.append(...createEl);
