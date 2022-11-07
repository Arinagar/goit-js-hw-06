function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function onChangeColorClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = String(getRandomHexColor());
  spanEl.style.color = 'white';
}

buttonEl.addEventListener('click', onChangeColorClick);
