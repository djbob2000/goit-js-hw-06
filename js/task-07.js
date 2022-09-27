// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль span#text
// обновляя свойство font-size. В результате при перетаскивании ползунка
// будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  let fontSize = Number(refs.input.value);
  refs.text.style.fontSize = fontSize + "px";
}
