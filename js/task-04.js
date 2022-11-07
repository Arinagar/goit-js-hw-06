const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;

function increment() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

incrementEl.addEventListener('click', increment);
decrementEl.addEventListener('click', decrement);
