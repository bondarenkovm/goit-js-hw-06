// const refs = {
//   input: document.querySelector('#name.input'),
//   output: document.querySelector('#name-output'),
// };

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value) {
    return (output.textContent = event.currentTarget.value);
  }
  output.textContent = 'Anonymous';
}
//===========--2--=========
// input.addEventListener('input', event => {
//   return event.currentTarget.value
//     ? (output.textContent = event.currentTarget.value)
//     : (output.textContent = 'Anonymous');
// });

// function onInputChange(event) {
//   return event.currentTarget.value
//     ? (output.textContent = event.currentTarget.value)
//     : (output.textContent = 'Anonymous');
// }
