const valueRef = document.querySelector('#value');

const btnIncrement = document.querySelector('[data-action="increment"]',);
const btnDecrement = document.querySelector('[data-action="decrement"]',);
let counterValue = 0;

function IncrementClick(event) {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function DecrementClick(event) {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

btnIncrement.addEventListener('click', IncrementClick);
btnDecrement.addEventListener('click', DecrementClick);