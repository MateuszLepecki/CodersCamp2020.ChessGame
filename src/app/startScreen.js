"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStartScreen = void 0;
var chess_logo_logo_svg_1 = __importDefault(require("../assets/logo/chess_logo_logo.svg"));
function createStartScreen() {
    createStartScreenStructure();
}
exports.createStartScreen = createStartScreen;
function createStartScreenStructure() {
    var mainWrap = document.getElementById('main-wrap');
    mainWrap.innerHTML = '';
    var startWrap = document.createElement('div');
    startWrap.id = 'startwrap';
    mainWrap.appendChild(startWrap);
    createNewImgElement('logo', chess_logo_logo_svg_1.default, startWrap);
    var housesWrap = createNewElement('div', 'houseswrap', startWrap);
    var housesG = createNewElement('button', 'houses', housesWrap);
    var housesH = createNewElement('button', 'houses', housesWrap);
    var housesR = createNewElement('button', 'houses', housesWrap);
    var housesS = createNewElement('button', 'houses', housesWrap);
    createNewElement('div', 'G housestext', housesG, 'G');
    createNewElement('div', 'H housestext', housesH, 'H');
    createNewElement('div', 'R housestext', housesR, 'R');
    createNewElement('div', 'S housestext', housesS, 'S');
    var START_BTN = 'pick and play';
    var startBtn = createNewElement('button', 'btn startbtn', startWrap, START_BTN);
}
function createNewImgElement(className, source, parent) {
    var newImgElement = document.createElement('img');
    newImgElement.className = className;
    newImgElement.src = source;
    parent.appendChild(newImgElement);
    return newImgElement;
}
function createNewElement(tag, className, parent, text) {
    if (text === void 0) { text = ''; }
    var newElement = document.createElement(tag);
    newElement.className = className;
    newElement.innerHTML = text;
    parent.appendChild(newElement);
    return newElement;
}
