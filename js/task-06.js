const input = document.querySelector('[data-length="6"]');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  input.classList.add('invalid');
  input.classList.remove('valid');
  if (event.currentTarget.value.length == input.dataset.length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}
