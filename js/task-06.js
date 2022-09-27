// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

// #validation-input {
// #validation-input.valid {
// #validation-input.invalid {

const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onBlurInput);
function onBlurInput(event) {
  if (
    event.currentTarget.value.length ===
    Number(event.currentTarget.dataset.length)
  ) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
    console.log("valid");
  } else {
    console.log("invalid");
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}
