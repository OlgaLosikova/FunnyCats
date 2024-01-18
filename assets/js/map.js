const parts = [
  { id: 1, text: "хвост руководит настроением кота, диктует ему направление движения, эмоции и даже периодически подсказывает мурчащему аппарату, как наиболее выгодным образом раскрутить хозяина на еду."},
  { id: 2, text: "усы"},
  { id: 3, text: "попа"},
  { id: 4, text: "морда"},
  { id: 5, text: "задние ноги"},
  { id: 6, text: "передние ноги"},
];

const body = document.querySelector(".map__body");
const modalElem = document.querySelector(".modal");

// Добавляем стили
modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

// Открываем модальное окно
const openModal = () => {
modalElem.style.visibility = "visible";
modalElem.style.opacity = 1;
}

// Закрываем модальное окно
const closeModal = event => {
const target = event.target; 

if (target === modalElem || target.closest('.modal__close')) {
  modalElem.style.opacity = 0;

  setTimeout(() => {
  modalElem.style.visibility = "hidden"
  }, 300)
}
}
modalElem.addEventListener("click", closeModal)

// Получаем номер картинки
body.addEventListener("click", (event) => {
  if (event.target.classList.contains("map__image")) {
    const number = event.target.id;
    console.log(number);
    
    openModal();
  }
})



// // Рисуем окно
// function showPopup (number) {
//     if (parts[item].id == number) {
//         const parentNode = document.createElement("div");
//         parentNode.classList.add("");
//     }
// }

