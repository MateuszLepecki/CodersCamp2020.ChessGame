const lightFigure = ["bishop", "knight"];
const heavyFigure = ["queen", "Rook"];

function getRandomIntInclusive(min: number, max: number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function obliviate() {
// Obliviate - Gracz widzi tylko swoje pionki 
}
function lumos() {
  //Lumos - podwaja zasięg ruchu figury
//dostać się do funckjonalności ruchu
}

function reducio() {
  //Reducio - zamienia figurę w pionka (ewentualnie zamienia ciężką figurę na lekką, lekką na pionka) 
// podmienić zmienną na pionka ++
}

function engorgio() {
//Engorgio - zmienia figurę o poziom wyżej (pionka w lekką, lekką w ciężką)
}

function randomPowerUp() {
  let random = getRandomIntInclusive(0,11);
  switch(random) {
    case 0:
      obliviate();
      break;
    case 1:
      lumos();
      break;
    case 2:

  }
  
}
