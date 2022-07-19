function getRandomHexColor() {
  const colorMix = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  return `#${colorMix}`;
}

const btnRef = document.querySelector('.change-color');
const textRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

const changeColor = () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor();
}

btnRef.addEventListener('click', changeColor);

