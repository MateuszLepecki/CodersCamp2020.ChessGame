import image from './../styles/photos/chess_logo_logo.svg';
const main = document.getElementById('main-wrap');
const board = document.createElement('div');
board.classList.add('board');
const img = document.createElement('img');
img.classList.add('img');
img.src = image;
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

export function chessboard() {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let secArr = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    for (let i = 8; i >= 1; i--) {
        let row = document.createElement('div');
        row.classList.add('row');
        if (i % 2 !== 0) {
            row.style.flexDirection = 'row-reverse';
        }
        for (let j = 0; j < 8; j++) {
            let square = document.createElement('div');
            
            if (i % 2 === 1) {
                square.classList.add(`${secArr[j]}${i}`);
            } else {
                square.classList.add(`${arr[j]}${i}`);
            }
            square.classList.add('square');
            if (j % 2 === 0) {
                square.classList.add('firstColor');
                // style.backgroundColor = '#6C1A31';
            } else {
                square.classList.add('secondColor');
                // square.style.backgroundColor = '#D67E03';
            }
            row.appendChild(square);
        }
        board.appendChild(row);
    }
    getNumbers();
    getLetters();
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
