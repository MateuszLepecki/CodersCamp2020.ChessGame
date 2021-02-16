import { coordinates } from './Piece';
import { Piece } from './Piece';
import { King } from './King';
import { Queen } from './Queen';
import { Rook } from './Rook';
import { Bishop } from './Bishop';
import { Pawn } from './Pawn';
import { Knight } from './Knight';
import { createDOMElement } from './app/timer';
import { whichColorTurn } from './app/timer';
import { AREASARRAY } from './logic';

const MAIN = document.querySelector('#main-wrap')! as HTMLElement;
let spellWraper: HTMLElement;
let randomDisplay: HTMLElement;
let randomButton: HTMLElement;
let spellDecriptionDiv: HTMLElement;

function createRandomStructure() {
    spellWraper = createDOMElement('div', 'spellWraper', MAIN);
    randomDisplay = createDOMElement('div', 'randomDisplay', spellWraper, 'Your spell...');
    randomButton = createDOMElement('button', 'randomButton', spellWraper, "Let's spell");
    spellDecriptionDiv = createDOMElement('div', 'spellDescription', spellWraper, '...');
}
export function spellSection() {
    createRandomStructure();
    changingSpellDisplay();
}

enum lightFigure {
    Bishop,
    Knight,
}
enum heavyFigure {
    Queen,
    Rook,
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function avadaKedavra(): void {
    let randomAreaIndex = getRandomIntInclusive(0, AREASARRAY.length - 1);
    console.log(AREASARRAY[randomAreaIndex]);

    while (
        (AREASARRAY[randomAreaIndex].piece as Piece).type === 'queen' ||
        (AREASARRAY[randomAreaIndex].piece as Piece).type === 'king' ||
        AREASARRAY[randomAreaIndex].piece === 0
    ) {
        randomAreaIndex = getRandomIntInclusive(0, AREASARRAY.length - 1);
    }
    AREASARRAY[randomAreaIndex].deletePiece();
    if (randomSpell === 0) {
        spellDecriptionDiv.innerText = 'You loose your turn and kill a random piece';
    } else {
        spellDecriptionDiv.innerText = 'You kill a random piece';
    }
}

function expalliarmus() {
    spellDecriptionDiv.innerText = "You 've lost your turn";
}

export let randomSpell = -1;
let spellList = ['Expalliarmus', 'Avada Kadavra'];

export async function changingSpellDisplay() {
    randomButton.addEventListener('click', (e) => {
        runPowerUp();
        randomDisplay.classList.add('startAnimation');
        spellDecriptionDiv.classList.add('startAnimation');
        setTimeout(endAnimation, 1000);
        function endAnimation() {
            randomDisplay.classList.remove('startAnimation');
            spellDecriptionDiv.classList.remove('startAnimation');
        }
    });
}
function runPowerUp() {
    let random = getRandomIntInclusive(0, 1);
    randomDisplay.innerText = spellList[random];
    randomSpell = random;
    console.log('runPowerUp', randomSpell);
    switch (randomSpell) {
        case 0:
            expalliarmus();
        case 1:
            avadaKedavra();
    }
}
