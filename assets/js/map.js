const parts = [
   "Хвост руководит настроением кота, диктует ему направление движения, эмоции и даже периодически подсказывает мурчащему аппарату, как наиболее выгодным образом раскрутить хозяина на еду!",

    "Котики имеют усы не только для стиля – они настоящие котовизоры! Усы помогают им чувствовать мир вокруг, словно настоящие детективы. Они служат как антенны для приема ласковых прикосновений и специальные щупальца для выявления самых важных вопросов: \"Где угощение?\" и \"Где моя коробка?\". Так что усы у котика – это не просто аксессуар, а настоящий инструмент для раскрывания тайн и поиска веселья!",
    
    'Попа у котика – это не просто подушка для сидения! Это стратегический центр баланса для высокотехнологичных манёвров в поисках игрушек и вдохновения для котофей. Плюс, это удобная \"складывающаяся\" зона для стратегического отступления перед следующим шаловливым прыжком!',
    
    "Мордочка у котика – это его уникальный носик для чувствования аромата угощений на дистанции \"полдома\". А ещё это центр харизмы и магнит для нежных поцелуев. Мордочка – это котокомпас, который всегда указывает направление к любви и веселью!", 

    "Задние лапки у котика – это не просто для красоты и элегантности! Они предназначены для высокотехнологичных маневров, таких как котозумба и гимнастика на уровне \"Котики в цирке\". А ещё это встроенные пружины для мгновенного запуска в режим \"играть в загадки\" или \"поймай меня, если сможешь\". Так что задние лапки – это настоящий набор котофункций для веселья без ограничений!",

   "Передние лапки у котика – это его многозадачность в деле уюта и веселья! Они созданы для исследования мира, нежных обнимашек и профессиональных выкапываний удобных мест для дремы. Это ещё и магические инструменты для ласкательных моментов и подпрыгиваний на уровне \"Виу, я тут!\". Короче говоря, передние лапки – это неотъемлемая часть котикового плана завоевания внимания и вдохновения веселья!",
];

const body = document.querySelector(".map__body");
const itemTail = document.querySelector(".map__item_tail");
const itemWiskers = document.querySelector(".map__item_wiskers");
const itemButt = document.querySelector(".map__item_butt");
const itemFace = document.querySelector(".map__item_face");
const itemBackPaws = document.querySelector(".map__item_backpaws");
const itemFrontPaws = document.querySelector(".map__item_frontpaws");
const modalElem = document.querySelector(".modal");
const modalText = document.querySelector(".modal__p");
const btnClose =document.querySelector(".modal__close"); 

function closeModal() {
  modalElem.classList.remove('active');
}

btnClose.addEventListener ('click',closeModal )

function openModalTail() {
  modalElem.classList.add('active');
  modalText.innerHTML = parts[0];
}

itemTail.addEventListener('click',openModalTail )

function openModalWiskers () {
  modalElem.classList.add('active');
  modalText.innerHTML = parts[1];
}
itemWiskers.addEventListener('click',openModalWiskers)

function openModalButt () {
  modalElem.classList.add('active');
  modalText.innerHTML = parts[2];
}
itemButt.addEventListener('click',openModalButt)

function openModalFace () {
  modalElem.classList.add('active');
  modalText.innerHTML = parts[3];
}
itemFace.addEventListener('click',openModalFace)

function openModalBackPaws () {
  modalElem.classList.add('active');
  modalText.innerHTML = parts[4];
}

itemBackPaws.addEventListener('click', openModalBackPaws) 
 
function openModalFrontPaws () {
  modalElem.classList.add('active');
  modalText.innerHTML = parts[5];
}

itemFrontPaws.addEventListener('click', openModalFrontPaws) 
 
