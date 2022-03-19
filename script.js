console.log(
  "самопроверка\n60\n-Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5\n-в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n-При кликах по интерактивным элементам меняется изображение +10\n-При кликах по интерактивным элементам меняется звук +10\n-Активный в данный момент интерактивный элемент выделяется стилем +10\n-есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10\n-внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10\n"
);
function changeClassActive(event, classActive) {
  event.target.classList.add("active");
}
function changeImg(event) {
  if (event.target.classList.contains("nav__item")) {
    let img = event.target.dataset.bird;
    mainImage.style.backgroundImage = `url("./assets/img/${img}.jpg")`;
  }
}
function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function playPause() {
  audio.pause();
}
function changeMelody(event) {
  if (event.target.classList.contains("nav__item")) {
    audio.src = `./assets/audio/${event.target.dataset.bird}.mp3`;
    playAudio();
    if (isPlay == false) {
      playAudio();
      turnOnOffSound();
    }
    changeImg(event);
    birdsList.forEach((elem) => elem.classList.remove("active"));
    changeClassActive(event, "active");
  }
}
function turnOnOffSound() {
  if (!isPlay) {
    playAudio();
    isPlay = true;
    button.classList.add("pause");
  } else {
    playPause();
    isPlay = false;
    button.classList.remove("pause");
  }
}
let isPlay = false;
const logo = document.querySelector(".header__logo");
const nav = document.querySelector(".nav");
const audio = document.querySelector("audio");
const birdsList = document.querySelectorAll(".nav__item");
const button = document.querySelector(".main__button");
const mainImage = document.querySelector(".main");

logo.addEventListener("click", (event) => {
  audio.src = "./assets/audio/forest.mp3";
  mainImage.style.backgroundImage = `url("./assets/img/forest.jpg")`;
  playAudio();
  if (isPlay == false) {
    playAudio();
    turnOnOffSound();
  }
});

button.addEventListener("click", turnOnOffSound);
nav.addEventListener("click", changeMelody);
