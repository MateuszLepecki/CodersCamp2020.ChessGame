"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTimeScreen = void 0;
var chess_logo_logo_svg_1 = __importDefault(require("./assets/logo/chess_logo_logo.svg"));
var startScreen_1 = require("./app/startScreen");
var App_1 = require("./app/App");
var mainWrap = document.getElementById('main-wrap');
function createTimeScreen() {
    createTimeScreenStructure();
}
exports.createTimeScreen = createTimeScreen;
function createTimeScreenStructure() {
    mainWrap.innerHTML = '';
    var PLAY_BTN = 'go to game';
    var LABEL_TEXT = 'set the time';
    var startWrap = document.createElement('div');
    startWrap.id = 'startwrap';
    mainWrap.appendChild(startWrap);
    var logoWrap = startScreen_1.createNewElement('div', 'logowrap', startWrap);
    startScreen_1.createNewImgElement('logotime', chess_logo_logo_svg_1.default, logoWrap);
    var rangeWrap = startScreen_1.createNewElement('div', 'rangewrap', startWrap);
    var timeInput = createNewRangeInputElement('10', '60', '10', LABEL_TEXT, 'timeset', rangeWrap);
    var timeOutput = document.querySelector('#outputtime');
    chooseTime(timeInput);
    showChosenTime(timeInput, timeOutput);
    var playBtn = startScreen_1.createNewElement('button', 'btn startbtn', startWrap, PLAY_BTN);
    // playBtn.addEventListener('click', async function() {
    //     await chessboard();
    //     createBoardArray();
    //     listenDOMchessboard();
    // })
}
function createNewRangeInputElement(min, max, step, label, id, parent, text) {
    if (text === void 0) { text = ''; }
    var newElement = document.createElement('input');
    var newLabel = document.createElement('label');
    var chosenTimeLabel = document.createElement('output');
    chosenTimeLabel.id = 'outputtime';
    newLabel.innerHTML = label;
    newLabel.htmlFor = id;
    parent.appendChild(newLabel);
    newElement.type = 'range';
    newElement.min = min;
    newElement.max = max;
    newElement.step = step;
    newElement.id = id;
    newElement.innerHTML = text;
    parent.appendChild(newElement);
    parent.appendChild(chosenTimeLabel);
    return newElement;
}
var startWrap = document.getElementById('#startwrap');
function chooseTime(i) {
    i.value = '10';
    i.addEventListener('change', function () {
        App_1.gameSettings.choosenTime = i.valueAsNumber;
        console.log(App_1.gameSettings);
    });
}
function showChosenTime(i, o) {
    o.innerHTML = i.value + 'MINS';
    i.addEventListener('input', function () {
        o.innerHTML = i.value + 'MINS';
    }, false);
}
