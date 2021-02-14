"use strict";
// import logo from '../assets/logo/chess_logo_logo.svg';
Object.defineProperty(exports, "__esModule", { value: true });

exports.createStartScreen = createStartScreen;
function createStartScreenStructure() {
    var mainWrap = document.getElementById('main-wrap');
    mainWrap.innerHTML = '';
    var startWrap = document.createElement('div');
    startWrap.id = 'startwrap';
    mainWrap.appendChild(startWrap);
    // createNewImgElement('logo', logo, startWrap);
    var housesWrap = createNewElement('div', 'houseswrap', startWrap);
    var housesG = createNewElement('button', 'btn houses G', housesWrap);
    var housesH = createNewElement('button', 'btn houses H', housesWrap);
    var housesR = createNewElement('button', 'btn houses R', housesWrap);
    var housesS = createNewElement('button', 'btn houses S', housesWrap);
    createNewElement('div', 'housestext', housesG, 'G');
    createNewElement('div', 'housestext', housesH, 'H');
    createNewElement('div', 'housestext', housesR, 'R');
    createNewElement('div', 'housestext', housesS, 'S');
    var START_BTN = 'pick and play';
    var startBtn = createNewElement('button', 'btn startbtn', startWrap, START_BTN);
    housesG.addEventListener('click', chooseHouseListener);
    housesH.addEventListener('click', chooseHouseListener);
    housesR.addEventListener('click', chooseHouseListener);
    housesS.addEventListener('click', chooseHouseListener);
    startBtn.addEventListener('click', timeRange_1.createTimeScreen);
}
exports.createStartScreenStructure = createStartScreenStructure;
function createNewImgElement(className, source, parent) {
    var newImgElement = document.createElement('img');
    newImgElement.className = className;
    newImgElement.src = source;
    parent.appendChild(newImgElement);
    return newImgElement;
}
exports.createNewImgElement = createNewImgElement;
function createNewElement(tag, className, parent, text) {
    if (text === void 0) { text = ''; }
    var newElement = document.createElement(tag);
    newElement.className = className;
    newElement.innerHTML = text;
    parent.appendChild(newElement);
    return newElement;
}
exports.createNewElement = createNewElement;
function chooseHouseListener() {
    console.log("Clicked: " + this.classList[2]);
    if (this.classList[2] === 'G') {
        App_1.gameSettings.choosenSkin = 'G';
    }
    else if (this.classList[2] === 'H') {
        App_1.gameSettings.choosenSkin = 'H';
    }
    else if (this.classList[2] === 'R') {
        App_1.gameSettings.choosenSkin = 'R';
    }
    else if (this.classList[2] === 'S') {
        App_1.gameSettings.choosenSkin = 'S';
    }
}
exports.chooseHouseListener = chooseHouseListener;
