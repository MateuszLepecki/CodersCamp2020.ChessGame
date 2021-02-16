"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spellSection = void 0;
var Queen_1 = require("./Queen");
var Rook_1 = require("./Rook");
var Bishop_1 = require("./Bishop");
var Pawn_1 = require("./Pawn");
var Knight_1 = require("./Knight");
var timer_1 = require("./app/timer");
var MAIN = document.querySelector('#main-wrap');
function spellSection() {
    createRandomStructure();
}
exports.spellSection = spellSection;
function createRandomStructure() {
    var spellWraper = timer_1.createDOMElement('div', 'spellWraper', MAIN, 'Spel dla testu');
    // createDOMElement("div", "randomDisplay", spellWraper, "Your spell");
    // createDOMElement("button", "randomButton", spellWraper);
}
var lightFigure;
(function (lightFigure) {
    lightFigure[lightFigure["Bishop"] = 0] = "Bishop";
    lightFigure[lightFigure["Knight"] = 1] = "Knight";
})(lightFigure || (lightFigure = {}));
var heavyFigure;
(function (heavyFigure) {
    heavyFigure[heavyFigure["Queen"] = 0] = "Queen";
    heavyFigure[heavyFigure["Rook"] = 1] = "Rook";
})(heavyFigure || (heavyFigure = {}));
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function reducio(piece) {
    //Reducio - zamienia ciężką figurę na lekką, lekką na pionka)
    if (piece instanceof Queen_1.Queen || piece instanceof Rook_1.Rook) {
        var random = getRandomIntInclusive(0, 1);
        switch (random) {
            case 0:
                piece = new Bishop_1.Bishop(piece.color, piece.location);
                break;
            case 1:
                piece = new Knight_1.Knight(piece.color, piece.location);
                break;
        }
    }
    else if (piece instanceof Bishop_1.Bishop || piece instanceof Knight_1.Knight) {
        piece = new Pawn_1.Pawn(piece.color, piece.location);
    }
}
//Engorgio - zmienia figurę o poziom wyżej (pionka w lekką, lekką w ciężką)
function engorgio(piece) {
    if (piece instanceof Bishop_1.Bishop || piece instanceof Knight_1.Knight) {
        var random = getRandomIntInclusive(0, 1);
        switch (random) {
            case 0:
                piece = new Queen_1.Queen(piece.color, piece.location);
                break;
            case 1:
                piece = new Rook_1.Rook(piece.color, piece.location);
                break;
        }
    }
    else if (piece instanceof Pawn_1.Pawn) {
        var random = getRandomIntInclusive(0, 1);
        switch (random) {
            case 0:
                piece = new Bishop_1.Bishop(piece.color, piece.location);
                break;
            case 1:
                piece = new Knight_1.Knight(piece.color, piece.location);
                break;
        }
    }
}
function obliviate() {
    // Obliviate - Gracz widzi tylko swoje pionki
}
function lumos() {
    //Lumos - podwaja zasięg ruchu figury
}
var randomDisplay = document.createElement('div');
randomDisplay.classList.add('randomDiv');
randomDisplay.innerText = 'Your spell..';
var randomButton = document.createElement('button');
randomButton.classList.add('randomButton');
var randomSpell;
var spellList = ['Energio', 'Reducio'];
randomButton.addEventListener('click', function (e) {
    var random = getRandomIntInclusive(0, 1);
    randomButton.disabled = true;
    var i = 0;
    var circle = 0;
    var time = setInterval(function () {
        if (random == i && circle > 0) {
            clearInterval(time);
            randomSpell = random;
        }
        randomDisplay.innerText = spellList[i];
        if (i == spellList.length - 1) {
            if (circle == 0) {
                i = 0;
                circle++;
            }
        }
        i++;
    }, 500);
    function randomPowerUp(piece) {
        switch (randomSpell) {
            case 0:
                reducio(piece); //ten piece teraz na zapełnienie dziury
                break;
            case 1:
                engorgio(piece);
                break;
            case 2:
        }
    }
});
