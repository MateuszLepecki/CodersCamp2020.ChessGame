import logo from '../assets/logo/chess_logo_logo.svg';
import { createTimeScreen } from '../timeRange'
import { gameSettings } from '../app/App';

export function createStartScreen() {
    createStartScreenStructure();
}

export function createStartScreenStructure() {
    const mainWrap = document.getElementById('main-wrap');
    mainWrap!.innerHTML = '';

    const startWrap = document.createElement('div');
    startWrap.id = 'startwrap';

    mainWrap!.appendChild(startWrap);

    createNewImgElement('logo', logo, startWrap);

    const housesWrap = createNewElement('div', 'houseswrap', startWrap);
    const housesG = createNewElement('button', 'btn houses G', housesWrap);
    const housesH = createNewElement('button', 'btn houses H', housesWrap);
    const housesR = createNewElement('button', 'btn houses R', housesWrap);
    const housesS = createNewElement('button', 'btn houses S', housesWrap);
    createNewElement('div', 'housestext', housesG, 'G');
    createNewElement('div', 'housestext', housesH, 'H');
    createNewElement('div', 'housestext', housesR, 'R');
    createNewElement('div', 'housestext', housesS, 'S');

    const START_BTN = 'pick and play';

    const startBtn = createNewElement('button', 'btn startbtn', startWrap, START_BTN);

    housesG.addEventListener('click', chooseHouseListener);
    housesH.addEventListener('click', chooseHouseListener);
    housesR.addEventListener('click', chooseHouseListener);
    housesS.addEventListener('click', chooseHouseListener);
    startBtn.addEventListener('click', createTimeScreen);

}

export function createNewImgElement(className: string, source: string, parent: HTMLElement) {
    const newImgElement = document.createElement('img');
    newImgElement.className = className;
    newImgElement.src = source;
    parent.appendChild(newImgElement);
    return newImgElement;
}

export function createNewElement(tag: string, className: string, parent: HTMLElement, text: string = '') {
    const newElement = document.createElement(tag);
    newElement.className = className;
    newElement.innerHTML = text;
    parent.appendChild(newElement);
    return newElement;
}

export function chooseHouseListener(this: HTMLElement) {
    console.log(`Clicked: ${this.classList[2]}`);
    if (this.classList[2] === 'G'){
        gameSettings.choosenSkin = 'G';
    } else if (this.classList[2] === 'H'){
        gameSettings.choosenSkin = 'H';
    } else if (this.classList[2] === 'R'){
        gameSettings.choosenSkin = 'R';
    } else if (this.classList[2] === 'S'){
        gameSettings.choosenSkin = 'S';
    }
}