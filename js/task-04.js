// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться
// текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых
// увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const refs = {
  decrementButton: document.querySelector('button[data-action="decrement"]'),
  incrementButton: document.querySelector('button[data-action="increment"]'),
  counterSpan: document.querySelector("#value"),
};
refs.decrementButton.addEventListener("click", onDecrementButtonClick);
refs.incrementButton.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  refs.counterSpan.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue += 1;
  refs.counterSpan.textContent = counterValue;
}
