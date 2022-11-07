const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

function Plus() {
  counterValue += 1;
  document.querySelector('#value').innerHTML = counterValue;
}

function Minus() {
  counterValue -= 1;
  document.querySelector('#value').innerHTML = counterValue;
}

incrementEl.addEventListener('click', Plus);
decrementEl.addEventListener('click', Minus);
