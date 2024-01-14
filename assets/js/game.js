const gameContainer = document.querySelector(".gamecontainer");
const allCats = document.querySelectorAll(".gamecontainer__square");
const successMessage = document.querySelector(".success-message");
const successGif = document.querySelector(".success-gif");
const gameText = document.querySelector(".game-text");
let previousCat = "";

gameContainer.addEventListener("click", function (event) {
  let currentCat = event.target;
  let allPairsFound = true;

  if (currentCat.classList.contains("gamecontainer__square-closed")) {
    currentCat.classList.remove("gamecontainer__square-closed");
    if (previousCat == "") {
      previousCat = currentCat;
    } else if (
      previousCat.classList.contains("gamecontainer__square-cat1") &&
      currentCat.classList.contains("gamecontainer__square-cat1")
    ) {
      previousCat.style.opacity = 0;
      currentCat.style.opacity = 0;
      previousCat = "";
    } else if (
      previousCat.classList.contains("gamecontainer__square-cat2") &&
      currentCat.classList.contains("gamecontainer__square-cat2")
    ) {
      previousCat.style.opacity = 0;
      currentCat.style.opacity = 0;
      previousCat = "";
    } else {
      previousCat.classList.add("gamecontainer__square-closed");
      previousCat = currentCat;
    }
  }

  for (let i = 0; i < allCats.length; i++) {
    if (allCats[i].classList.contains("gamecontainer__square-closed")) {
      allPairsFound = false;
      break;
    }
  }
  if (allPairsFound) {
    successMessage.textContent =
      "Ура! Ты выиграл, а в мире стало еще больше счастливых котов";
    gameText.style.color = "LightGrey";
    getGif();
  }
});

async function getGif() {
  await fetch("https://cataas.com/cat/gif")
    .then((res) => {
      return res.blob();
    })
    .then((data) => {
      const gif = document.createElement("img");
      const url = URL.createObjectURL(data);
      gif.src = url;
      successGif.appendChild(gif);
    });
}
