// SELECIONANDO MINUTOS E SECONDOS
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

// SELECIONANDO BUTTONS DE CONTROLAR O TEMPO 
const buttonPlay = document.querySelector('#play');
const buttonStop = document.querySelector('#stop');
const buttonMore = document.querySelector('#more');
const buttonLess = document.querySelector('#less');

// SECIONANDO BUTTON DE CONTROLE DE ÁUDIO
const buttonForest = document.querySelector('#sonOne');
const buttonRain = document.querySelector('#sonTwo');
const buttonCoffeeShop = document.querySelector('#sonThree');
const buttonFireplace = document.querySelector('#sonFour');

// BUTTONS DE CONTROLE DE ÁUDIO
const buttonVolumeForest = document.querySelector('#volume-forest');
const buttonVolumeRain = document.querySelector('#volume-rain');
const buttonVolumeCoffeeShop = document.querySelector('#volume-coffee-shop');
const buttonVolumeFireplace = document.querySelector('#volume-fireplace');

// AUDIOS DO CONTROLE
const audioForest = new Audio("assets/audios/Floresta.wav");
const audioRain = new Audio('assets/audios/Chuva.wav');
const audioCoffeeShop = new Audio('assets/audios/Cafeteria.wav');
const audioFireplace = new Audio('assets/audios/Lareira.wav');

// VARIÁVEIS QUE INICIAM VAZIAS
let minutes;
let currentMinutes;
let timerTimeOut;

// FUNÇÃO PARA CONTAGEM REGRESSIVA DO TEMPO
function countDown(){
  timerTimeOut = setTimeout(function(){

    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    secondsDisplay.textContent = '00';
  
    if(minutes <= 0){
      return;
    }

    if(seconds <= 0){
      seconds = 60;

      minutesDisplay.textContent = String(minutes - 1).padStart(2,'0');
    }

    secondsDisplay.textContent =  String(seconds - 1).padStart(2, '0');
  
    countDown();

  }, 1000);
}

// BUTTON PARA COMEÇAR O TEMPO
buttonPlay.addEventListener('click', function(){
  countDown();  
});

// BUTTON PARA PAUSA DO TEMPO
buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
});

// BUTTON PARA AUMENTAR 5 MINUTOS DO TEMPO
buttonMore.addEventListener('click', function(){
  currentMinutes = Number(minutesDisplay.textContent) + 5;
  minutesDisplay.textContent = String(currentMinutes).padStart(2, '0');
});

// BUTTON PARA DIMINUIR 5 MINUTOS DO TEMPO
buttonLess.addEventListener('click', function(){
  currentMinutes = Number(minutesDisplay.textContent) - 5;
  minutesDisplay.textContent = String(currentMinutes).padStart(2, '0');

  if(currentMinutes <= 0){
    minutesDisplay.textContent = '00';
  }
});

// BUTTONS DE SONS
buttonForest.addEventListener('click', function(){
  audioForest.play();
  audioRain.pause();
  audioCoffeeShop.pause();
  audioFireplace.pause();

  buttonForest.classList.add('active');
  buttonRain.classList.remove('active');
  buttonCoffeeShop.classList.remove('active');
  buttonFireplace.classList.remove('active');

  buttonVolumeForest.addEventListener("change", function(e) {
    audioForest.volume = e.currentTarget.value / 100;
  });
});

buttonRain.addEventListener('click', function(){
  audioRain.play();  
  audioForest.pause();
  audioCoffeeShop.pause();
  audioFireplace.pause();

  buttonRain.classList.add('active');
  buttonForest.classList.remove('active');
  buttonCoffeeShop.classList.remove('active');
  buttonFireplace.classList.remove('active');

  buttonVolumeRain.addEventListener("change", function(e) {
    audioRain.volume = e.currentTarget.value / 100;
  });
});

buttonCoffeeShop.addEventListener('click', function(){
  audioCoffeeShop.play();
  audioForest.pause();
  audioRain.pause();
  audioFireplace.pause();

  buttonCoffeeShop.classList.add('active');
  buttonForest.classList.remove('active');
  buttonRain.classList.remove('active');
  buttonFireplace.classList.remove('active');

  buttonVolumeCoffeeShop.addEventListener("change", function(e) {
    audioCoffeeShop.volume = e.currentTarget.value / 100;
  });
  
});

buttonFireplace.addEventListener('click', function(){
  audioFireplace.play();
  audioForest.pause();
  audioRain.pause();
  audioCoffeeShop.pause();

  buttonFireplace.classList.add('active');
  buttonForest.classList.remove('active');
  buttonRain.classList.remove('active');
  buttonCoffeeShop.classList.remove('active');

  buttonVolumeFireplace.addEventListener("change", function(e) {
    audioFireplace.volume = e.currentTarget.value / 100;
  });
});

