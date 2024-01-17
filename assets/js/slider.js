const sliderPoint1 = document.querySelector(".slider-points__item1");
const sliderPoint2 = document.querySelector(".slider-points__item2");
const sliderPoint3 = document.querySelector(".slider-points__item3");
const sliderPoint4 = document.querySelector(".slider-points__item4");
const sliderPoint5 = document.querySelector(".slider-points__item5");
const sliderPoint6 = document.querySelector(".slider-points__item6");
const catSlider = document.querySelector(".slider-container");
const sliderCards = document.querySelectorAll(".slider-card");
const sliderLine = document.querySelector(".slider-line");
const sliderArc = document.querySelector(".slider-points__arc");
let sliderCount = 0;
let slideWidth = catSlider.offsetWidth;

const changeSlide = () => {
  if (sliderCount >= sliderCards.length) {
    sliderCount = 0;
  }
  rollSlider();
};
const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * slideWidth}px)`;
  sliderArc.style.gridRowStart=`${sliderCount+1}`;
  sliderArc.style.gridRowEnd=`${sliderCount+2}`;

};

const sllderInterval = setInterval(function () {
  sliderCount++;
  changeSlide();
}, 6000);

sliderPoint1.addEventListener("click", () => {
  sliderCount = 0;
  changeSlide();
});

sliderPoint2.addEventListener("click", () => {
  sliderCount = 1;
  changeSlide();
});
sliderPoint3.addEventListener("click", () => {
  sliderCount = 2;
  changeSlide();
});
sliderPoint4.addEventListener("click", () => {
  sliderCount = 3;
  changeSlide();
});
sliderPoint5.addEventListener("click", () => {
  sliderCount = 4;
  changeSlide();
});
sliderPoint6.addEventListener("click", () => {
  sliderCount = 5;
  changeSlide();
});
