const logo = require('./assets/logo/chess_logo_logo.svg');
// import logo from './assets/logo/chess_logo_logo.svg';
import { gameSettings } from './app/App';
import { deleteHighlightedSquares } from './logic';

export function createChessboardScreen() {
    chessboard();
}

export function chessboard() {
    const main = document.getElementById('main-wrap');
    main!.innerHTML = '';
    const board = document.createElement('div');
    board.classList.add('board');
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = logo;
    const outerBoard = document.createElement('div');
    outerBoard.classList.add('outerBoard');
    const numbers = document.createElement('div');
    numbers.classList.add('numbers');
    const takenPawns = document.createElement('div');
    takenPawns.classList.add('taken-pawns');
    const listOfMoves = document.createElement('div');
    listOfMoves.classList.add('list-of-moves');
    main!.appendChild(img);
    main!.appendChild(numbers);
    main!.appendChild(outerBoard);
    main!.appendChild(takenPawns);
    main!.appendChild(listOfMoves);
    const letters = document.createElement('div');
    letters.classList.add('letters');
    outerBoard.appendChild(letters);
    outerBoard.appendChild(board);

    function getBoard() {
        for (let i = 8; i >= 1; i--) {
            let row = document.createElement('div');
            row.classList.add('row');
            if (i % 2 !== 0) {
                row.style.flexDirection = 'row-reverse';
            }
            for (let j = 0; j < 8; j++) {
                let square = document.createElement('div');
                let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                let secArr = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
                if (i % 2 === 1) {
                    square.classList.add(`${secArr[j]}${i}`);
                } else {
                    square.classList.add(`${arr[j]}${i}`);
                }
                square.classList.add('square');
                if (j % 2 === 0) {
                    square.classList.add('firstColor');
                } else {
                    square.classList.add('secondColor');
                }
                row.appendChild(square);
            }
            board.appendChild(row);
        }
    }
    function getNumbers() {
        for (let i = 8; i > 0; i--) {
            let number = document.createElement('div');
            number.classList.add('number');
            number.innerText = `${i}`;
            numbers.appendChild(number);
        }
    }
    function getLetters() {
        for (let i = 0; i < 8; i++) {
            let letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            let letter = document.createElement('div');
            letter.classList.add('letter');
            letter.innerText = `${letterArray[i]}`;
            letters.appendChild(letter);
        }
    }

    function showMoves() {
        let titlemoves = document.createElement('div');
        titlemoves.classList.add('moves-title');
        titlemoves.innerText = 'Moves:';
        listOfMoves.appendChild(titlemoves);

        let allmoves = document.createElement('ol');
        allmoves.classList.add('moves-list');
        listOfMoves.appendChild(allmoves);
   }
    getBoard();
    getNumbers();
    getLetters();
    showMoves();
    setBoardColor();
}

function setBoardColor() {
    let root = document.documentElement;

    if (gameSettings.choosenSkin === 'G') {
        root.style.setProperty('--f', '#d67e03');
        root.style.setProperty('--s', '#6c1a31');
    } else if (gameSettings.choosenSkin === 'H') {
        root.style.setProperty('--f', '#5e3225');
        root.style.setProperty('--s', '#ba7625');
    } else if (gameSettings.choosenSkin === 'R') {
        root.style.setProperty('--f', '#7b9bc1');
        root.style.setProperty('--s', '#063f53');
    } else if (gameSettings.choosenSkin === 'S') {
        root.style.setProperty('--f', '#8b8a8f');
        root.style.setProperty('--s', '#134731');
    }
}
