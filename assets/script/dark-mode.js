const elementBody = document.body;
const buttonOff = document.querySelector('#off');
const buttonOn = document.querySelector('#on');

// FUNÇÃO PARA ADICIONAR VERSÃO DO CARD NO DARK-MODE
function addCarDarkMode(){
  buttonForest.classList.add('card-dark-mode');
  buttonForest.classList.add('svg-card-mode');
  buttonVolumeForest.classList.add('buttonSon');


  buttonRain.classList.add('card-dark-mode');
  buttonRain.classList.add('svg-card-mode');
  buttonVolumeRain.classList.add('buttonSon');


  buttonCoffeeShop.classList.add('card-dark-mode');
  buttonCoffeeShop.classList.add('svg-card-mode');
  buttonVolumeCoffeeShop.classList.add('buttonSon');


  buttonFireplace.classList.add('card-dark-mode');
  buttonFireplace.classList.add('svg-card-mode');
  buttonVolumeFireplace.classList.add('buttonSon');

};

// FUNÇÃO PARA REMOVER VERSÃO DO CARD NO DARK-MODE
function removeCarDarkMode(){
  buttonForest.classList.remove('card-dark-mode');
  buttonForest.classList.remove('svg-card-mode');
  buttonVolumeForest.classList.remove('buttonSon');

  buttonRain.classList.remove('card-dark-mode');
  buttonRain.classList.remove('svg-card-mode');
  buttonVolumeRain.classList.remove('buttonSon');

  buttonCoffeeShop.classList.remove('card-dark-mode');
  buttonCoffeeShop.classList.remove('svg-card-mode');
  buttonVolumeCoffeeShop.classList.remove('buttonSon');

  buttonFireplace.classList.remove('card-dark-mode');
  buttonFireplace.classList.remove('svg-card-mode');
  buttonVolumeFireplace.classList.remove('buttonSon');

};

buttonOff.addEventListener('click', function() {
  elementBody.classList.toggle('dark-mode-on');
  buttonOff.classList.add('hide');
  buttonOn.classList.remove('hide');
  addCarDarkMode();
});

buttonOn.addEventListener('click', function() {
  elementBody.classList.toggle('dark-mode-on');
  buttonOn.classList.add('hide');
  buttonOff.classList.remove('hide');
  removeCarDarkMode();
});
