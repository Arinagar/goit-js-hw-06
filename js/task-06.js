const inputEl = document.querySelector('#validation-input');

function validate(event) {
  if (Number(event.target.dataset.length) === event.target.value.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}

inputEl.addEventListener('blur', validate);
