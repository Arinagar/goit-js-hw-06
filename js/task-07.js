const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

function onChangeFontClick(event) {
  console.log(event.target.value);
  spanEl.style.fontSize = event.target.value + 'px';
}

inputEl.addEventListener('input', onChangeFontClick);
