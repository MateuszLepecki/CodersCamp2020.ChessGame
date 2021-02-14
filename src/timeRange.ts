import logo from './assets/logo/chess_logo_logo.svg';
import { createNewElement, createNewImgElement } from './app/startScreen';
import { gameSettings } from './app/App';
import { chessboard } from './chessboard';
import { listenDOMchessboard } from './logic';
import { createBoardArray } from './logic';

const mainWrap = document.getElementById('main-wrap');


export function createTimeScreen() {
    createTimeScreenStructure();
}

function createTimeScreenStructure() {    
    mainWrap!.innerHTML = '';
    
    const PLAY_BTN = 'go to game';
    const LABEL_TEXT = 'set the time';

    const startWrap = document.createElement('div');
    startWrap.id = 'startwrap';
    mainWrap!.appendChild(startWrap);

    const logoWrap = createNewElement('div', 'logowrap', startWrap);
    createNewImgElement('logotime', logo, logoWrap);

    const rangeWrap = createNewElement('div', 'rangewrap', startWrap);
    let timeInput = createNewRangeInputElement('10', '60', '10', LABEL_TEXT, 'timeset', rangeWrap);
    let timeOutput = document.querySelector('#outputtime');
    chooseTime(timeInput);
    showChosenTime(timeInput, timeOutput);

    const playBtn = createNewElement('button', 'btn startbtn', startWrap, PLAY_BTN);
    // playBtn.addEventListener('click', async function() {

    //     await chessboard();

	//     createBoardArray();

	//     listenDOMchessboard();
    // })
}

function createNewRangeInputElement(min: string, max: string, step: string, label: string, id: string, parent: HTMLElement, text: string = '') {
    const newElement = document.createElement('input');
    const newLabel = document.createElement('label');
    const chosenTimeLabel = document.createElement('output');
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

const startWrap = document.getElementById('#startwrap');

function chooseTime(i: HTMLInputElement) {
    i.value = '10';
    i.addEventListener('change', function(){
        gameSettings.choosenTime = i.valueAsNumber;
        console.log(gameSettings);
    });
}

function showChosenTime(i: HTMLInputElement, o: HTMLOutputElement){
    o.innerHTML = i.value + 'MINS';
    i.addEventListener('input', function () {
        o.innerHTML = i.value + 'MINS';
      }, false);
}
