const btn = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  // btn.style.backgroundColor = `${getRandomHexColor()}`;
  backgroundColor.textContent = `${getRandomHexColor()}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
