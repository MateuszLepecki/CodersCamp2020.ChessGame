import logo from '../assets/logo/chess_logo_logo.svg';

export function createStartScreen() {
    createStartScreenStructure();
}

function createStartScreenStructure() {
    const mainWrap = document.getElementById('main-wrap');
    mainWrap!.innerHTML = '';

    const startWrap = document.createElement('div');
    startWrap.id = 'startwrap';

    mainWrap!.appendChild(startWrap);

    createNewImgElement('logo', logo, startWrap);

    const housesWrap = createNewElement('div', 'houseswrap', startWrap);
    const housesG = createNewElement('button', 'houses', housesWrap);
    const housesH = createNewElement('button', 'houses', housesWrap);
    const housesR = createNewElement('button', 'houses', housesWrap);
    const housesS = createNewElement('button', 'houses', housesWrap);
    createNewElement('div', 'G housestext', housesG, 'G');
    createNewElement('div', 'H housestext', housesH, 'H');
    createNewElement('div', 'R housestext', housesR, 'R');
    createNewElement('div', 'S housestext', housesS, 'S');

    const START_BTN = 'pick and play';

    const startBtn = createNewElement('button', 'btn startbtn', startWrap, START_BTN);


}

function createNewImgElement(className: string, source: string, parent: HTMLElement) {
    const newImgElement = document.createElement('img');
    newImgElement.className = className;
    newImgElement.src = source;
    parent.appendChild(newImgElement);
    return newImgElement;
}

function createNewElement(tag: string, className: string, parent: HTMLElement, text: string = '') {
    const newElement = document.createElement(tag);
    newElement.className = className;
    newElement.innerHTML = text;
    parent.appendChild(newElement);
    return newElement;
}

