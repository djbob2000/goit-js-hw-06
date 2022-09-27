// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color
// и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  buttonChangeColor: document.querySelector(".change-color"),
  colorTextOutput: document.querySelector(".color"),
};

refs.buttonChangeColor.addEventListener("click", colorChangeHandler);
function colorChangeHandler(event) {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorTextOutput.textContent = color;
}
