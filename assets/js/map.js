const parts = [
    { id: 1, text: "хвост руководит настроением кота, диктует ему направление движения, эмоции и даже периодически подсказывает мурчащему аппарату, как наиболее выгодным образом раскрутить хозяина на еду."},
    { id: 2, text: "усы"},
    { id: 3, text: "попа"},
    { id: 4, text: "морда"},
    { id: 5, text: "задние ноги"},
    { id: 6, text: "передние ноги"},
  ];

const body = document.querySelector(".map__body");

// Получаем номер картинки
body.addEventListener("click", (event) => {
    if (event.target.classList.contains("map__image")) {
      const number = event.target.id;
      console.log(number);
    }
})

// Рисуем окно
function showPopup (number) {
    if (parts[item].id == number) {
        const parentNode = document.createElement("div");
        parentNode.classList.add("modal__form");
    }
}
