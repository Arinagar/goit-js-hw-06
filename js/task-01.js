const ulEl = document.querySelector('#categories');
console.log('Number of categories:', ulEl.children.length);

const liEl = document.querySelectorAll('.item');
liEl.forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.childNodes[3].children.length);
});
