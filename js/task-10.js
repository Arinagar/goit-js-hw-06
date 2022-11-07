function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('#boxes');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');
// let inputEl = document.getElementsByTagName('input')[0].value;
// let inputEl = document.querySelector('input[type="number"]').value;
const inputEl = document.querySelector('input[type="number"]');

let newInput = 0;

function onBoxesCreateClick(amount) {
  let initialSize = 30;

  for (let i = 0; i < amount; i += 1) {
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

function checkInput() {
  newInput = inputEl.value;
}

createEl.addEventListener(
  'click',
  function () {
    onBoxesCreateClick(newInput);
  },
  false
);
destroyEl.addEventListener('click', onBoxesDestroyClick);
inputEl.addEventListener('input', checkInput);

// как сделать без доп ивента по отслеживанию инпута???
