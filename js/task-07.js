const inputEl = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

inputEl.addEventListener('input', () => {
  output.style.fontSize = `${inputEl.value}px`;
});
