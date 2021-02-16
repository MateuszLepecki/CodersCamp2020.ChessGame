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
// export function obliviete(): void {
//     const takenArea = AREASARRAY.filter((area) => {
//         return area.piece !== 0;
//     });

//     let currentColor = whichColorTurn();
//     if (currentColor === 'black') {
//         const whitePieces = takenArea.filter((area) => {
//             if (area.piece !== 0) {
//                 return area.piece.color == 'white';
//             }
//         });
//         whitePieces.forEach((piece) => {
//             // piece.style.display == 'none';
//         });
//     } else if (currentColor === 'white') {
//         const blackPieces = takenArea.filter((area) => {
//             if (area.piece !== 0) {
//                 return area.piece.color == 'black';
//             }
//         });
//         blackPieces.forEach((piece) => {
//             // piece.style.display == 'none';
//         });
//     }
// }

// function reducio(piece: Piece) {
//     //Reducio - zamienia ciężką figurę na lekką, lekką na pionka)
//     // if (1) {
//     //     const newPiece =  new Bishop(piece.color, piece.location);
//     //     console.log(piece.color);
//     //     piece = newPiece;

//     // }
//     if (piece instanceof Queen || piece instanceof Rook) {
//         let random = getRandomIntInclusive(0, 1);
//         switch (random) {
//             case 0:
//                 // piece = new Bishop(piece.color, piece.location);
//                 console.log("0");
//                 break;
//             case 1:
//                 // piece = new Knight(piece.color, piece.location);
//                 console.log("1");
//                 break;
//         }
//     } else if (piece instanceof Bishop || piece instanceof Knight) {
//         // piece = new Pawn(piece.color, piece.location);
//         console.log("pawn")
//     }
// }

// //Engorgio - zmienia figurę o poziom wyżej (pionka w lekką, lekką w ciężką)
function engorgio(): void {
    // let newPiece = new Bishop('black', [5, 5]);
    console.table(AREASARRAY);
    // let randomAreaIndex = getRandomIntInclusive(0, AREASARRAY.length - 1);

    // while ((AREASARRAY[randomAreaIndex].piece as Piece).type !== 'pawn' || AREASARRAY[randomAreaIndex].piece === 0) {
    //     randomAreaIndex = getRandomIntInclusive(0, AREASARRAY.length - 1);
    // }
    // console.log('KAGUM randomAreaIndex', randomAreaIndex);
    // console.log((AREASARRAY[randomAreaIndex].piece as Piece).type);
    // (AREASARRAY[randomAreaIndex].piece as Piece).type = 'knight';
    // (AREASARRAY[randomAreaIndex].piece as Piece).
    // let random = getRandomIntInclusive(0, 0);
    // const copy = AREASARRAY[randomAreaIndex];
    // AREASARRAY[randomAreaIndex].deletePiece();
    // switch (random) {
    //     case 0:
    //         console.log(copy);
    //         let newPiece = new Bishop('black', (copy.piece as Piece).location);
    //         AREASARRAY[randomAreaIndex].putPieceHere(newPiece);
    //         break;
    //     // case 1:
    //     //     console.log(copy);
    //     //     AREASARRAY[randomAreaIndex].putPieceHere(
    //     //         new Knight((copy.piece as Piece).color, (copy.piece as Piece).location),
    //     //     );
    //     //     break;
    // }
    spellDecriptionDiv.innerText = 'You change a pawn into light piece';
}
// function engorgio(piece: Piece) {
//     if (piece instanceof Bishop || piece instanceof Knight) {
//         let random = getRandomIntInclusive(0, 1);
//         switch (random) {
//             case 0:
//                 piece = new Queen(piece.color, piece.location);
//                 break;
//             case 1:
//                 piece = new Rook(piece.color, piece.location);
//                 break;
//         }
//     } else if (piece instanceof Pawn) {
//         let random = getRandomIntInclusive(0, 1);
//         switch (random) {
//             case 0:
//                 piece = new Bishop(piece.color, piece.location);
//                 break;
//             case 1:
//                 piece = new Knight(piece.color, piece.location);
//                 break;
//         }
//     }
// }
function expalliarmus() {
    //gracz traci kolejkę. Warunek dodany do timer.ts
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
        // let random = getRandomIntInclusive(2, 2);

        // let i = 0;
        // let circle = 0;
        // const time = setInterval(() => {
        //     if (random == i && circle > 0) {
        //         clearInterval(time);
        //         // randomSpell = random;
        //         randomDisplay.innerText = spellList[i];
        //     } else {
        //         randomDisplay.innerText = spellList[i];
        //         if (i == spellList.length - 1) {
        //             if (circle == 0) {
        //                 i = -1;
        //                 circle++;
        //             }
        //         }
        //         i++;
        //     }
        // }, 800);
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
