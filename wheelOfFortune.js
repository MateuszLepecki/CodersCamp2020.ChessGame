"use strict";
var lightFigure = ["bishop", "knight"];
var heavyFigure = ["queen", "Rook"];
function getRandomIntInclusive(min, max) {
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
    var random = getRandomIntInclusive(0, 11);
    switch (random) {
        case 0:
            obliviate();
            break;
        case 1:
            lumos();
            break;
        case 2:
    }
}
