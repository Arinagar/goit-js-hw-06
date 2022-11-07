function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#boxes');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');

let newInput = 0;

function onBoxesCreateClick(amount) {
  let initialSize = 30;

  for (let i = 0; i < Number(inputEl.value); i += 1) {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    initialSize += 10;
    newBox.style.width = initialSize + 'px';
    newBox.style.height = initialSize + 'px';

    divEl.append(newBox);
  }
}

function onBoxesDestroyClick() {
  divEl.innerHTML = '';
}

createEl.addEventListener(
  'click',

  onBoxesCreateClick
);

destroyEl.addEventListener('click', onBoxesDestroyClick);

//  Более длинный вариант с отслеживанием инпута
// function checkInput() {
//   newInput = inputEl.value;
// }
// inputEl.addEventListener('input', checkInput);
