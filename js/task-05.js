const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function replace(event) {
  spanEl.textContent = event.target.value;
  if (event.target.value === '') {
    spanEl.textContent = 'Anonymous';
    return;
  }
}

inputEl.addEventListener('input', replace);
