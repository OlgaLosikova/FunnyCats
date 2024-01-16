const sliderPoint1 = document.querySelector(".slider-points__item1");
const sliderPoint2 = document.querySelector(".slider-points__item2");
const sliderPoint3 = document.querySelector(".slider-points__item3");
const sliderPoint4 = document.querySelector(".slider-points__item4");
const sliderPoint5 = document.querySelector(".slider-points__item5");
const sliderPoint6 = document.querySelector(".slider-points__item6");
const catSlider=document.querySelector('.slider-container');
const sliderCards=document.querySelectorAll('.slider-card');
const sliderLine=document.querySelector('.slider-line');
let sliderCount=0;
let slideWidth=catSlider.offsetWidth;
console.log(slideWidth);
// const catSlides = [
//   {
//     header: "Нала",
//     img: "../assets/images/nala.jpg",
//     locaton: "Лос-Анжелес, США",
//     breed: "микс сиамской и персидской породы",
//     info: "Вполне возможно, что вы видели эту красивую кошку ранее и это не удивительно, потому что у Налы 4,5 млн подписчиков в Instagram, звание TikToker года и состояние в $100 млн долларов. Эта восхитительная кошка с круглыми голубыми глазами не всегда была окружена любовью - будучи крошечным котенком, она была сдана в приют, где находилась какое-то время. К счастью, она нашла любящюю хозяйку.",
//   },
//   {
//     header: "Полковник Мяу",
//     img: "../assets/images/colonelmeow.jpg",
//     locaton: "Лос-Анжелес, США",
//     breed: "гималайско-персидская",
//     info: "Занял первое место в мире по пушистости по версии книги рекордов Гиннеса. До 2 лет находился в приюте, откуда его забрали хозяева. Такую необычную кличку кот получил в связи с хмуро-зловещим выражением его мордочки и огромным количеством шерсти.",
//   },
//   {
//     header: "Гарфи",
//     img: "../assets/images/garfy.jpg",
//     locaton: "Турция",
//     breed: "персидская",
//     info: "Несмотря на свой грозный вид, Гарфи - один из самых добрых котов в мире. Гарфи, как и все обычные коты, тоже любит залезать в коробки и ящики, бегать за мышкой и посидеть под мокрым зонтиком. Он прекрасная фотомодель и его сходство с настоящим Гарфилдом просто поразительно. А его хозяйка-фотограф сделал его настоящей звездой интернета.",
//   },
//   {
//     header: "Сердитая кошка",
//     img: "../assets/images/grumpycat.jpg",
//     locaton: "Морристаун, США",
//     breed: "сноу-шу",
//     info: "Кошка, ставшая интернет-знаменитостью благодаря необычной внешности после того, как брат её хозяйки в сентябре 2012 года разместил фотографию кошки на сайте Reddit. По словам хозяйки, Табаты Бундесен, подобная внешность связана с врождённой карликовостью и неправильным прикусом.",
//   },
//   {
//     header: "Широ Неко",
//     img: "../assets/images/shironeko.jpg",
//     locaton: "Япония",
//     breed: "турецкая ван",
//     info: "Широ Неко - кот, постигший дзен. Считается самым ленивым и безмятежным котом в мире. Понаблюдайте за умиротворенным выражением его славной мордашки, обратите внимание на его сонный вид, посмотрите на те вещи, которые он безропотно позволяет с собой вытворять, а потом делайте выводы.",
//   },
//   {
//     header: "Снупи",
//     img: "../assets/images/snoopy.jpg",
//     locaton: "Чэнду, Китай",
//     breed: "экзотическая короткошерстная",
//     info: "У Снупи милая мордашка, огромные глаза и плюшевая шерстка - все это не может оставить равнодушными тех, кто его видит. Глядя на него, кажется, что Снупи это красивая мягкая игрушка. Неудивительно, что этот кот стал настоящей звездой интернета. У Снуппи несколько миллионов поклонников со всего мира, свой канал на youtube и страничка на facebook.",
//   },
// ];

// const changeSlide = (index) => {
//   const catImg = document.querySelector(".slider__img");
//   const catHeader = document.getElementById("catHeader");
//   const catLocation = document.getElementById("catLocation");
//   const catInfo = document.getElementById("catInfo");
//   const catBreed = document.getElementById("catBreed");

//     catImg.src = catSlides[index].img;
//     catHeader.innerText = catSlides[index].header;
//     catLocation.innerText = catSlides[index].locaton;
//     catInfo.innerText = catSlides[index].info;
//     catBreed.innerText = catSlides[index].breed;
//     document.querySelector('.slider-container').classList.add('slider-slow');
// };
// let currentIndex=0;
// const sllderInterval = setInterval(function () {
//     currentIndex++;
//     console.log(currentIndex);
//     if(currentIndex>5)
//     {currentIndex=0;}
//   changeSlide(currentIndex);
// }, 5000);

// sliderPoint1.addEventListener("click", changeSlide);
// sliderPoint2.addEventListener("click", changeSlide);
// sliderPoint3.addEventListener("click", changeSlide);
// sliderPoint4.addEventListener("click", changeSlide);
// sliderPoint5.addEventListener("click", changeSlide);
// sliderPoint6.addEventListener("click", changeSlide);

