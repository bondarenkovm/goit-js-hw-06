const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let numberInput = 0;

inputEl.addEventListener('input', () => {
  numberInput = Number(inputEl.value);
});

btnCreate.addEventListener('click', () => {
  createBoxes(numberInput);
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  const div = [];

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${20 + 10 * i}px`;
    divEl.style.height = `${20 + 10 * i}px`;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    div.push(divEl);
  }
  boxesEl.prepend(...div);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  numberInput = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
