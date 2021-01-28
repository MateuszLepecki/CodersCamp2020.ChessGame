const body = document.getElementById('body');
const board = document.createElement('div');
board.classList.add('board');
const outerBoard = document.createElement('div');
outerBoard.classList.add('outerBoard');
const numbers = document.createElement('div');
numbers.classList.add('numbers');
body!.appendChild(numbers);
body!.appendChild(outerBoard);
outerBoard.appendChild(board);
const letters = document.createElement('div');
letters.classList.add('letters');
outerBoard.appendChild(letters);

export function chessboard() {
    function getBoard() {
        for (let i = 0; i < 8; i++) {
            let row = document.createElement('div');
            row.classList.add('row');
            if (i % 2 !== 0) {
                row.style.flexDirection = 'row-reverse';
            }
            for (let j = 0; j < 8; j++) {
                let square = document.createElement('div');
                square.classList.add('square');
                if (j % 2 === 0) {
                    square.style.backgroundColor = 'white';
                } else {
                    square.style.backgroundColor = 'black';
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
            let letter = document.createElement('div');
            letter.classList.add('number');
            switch (i) {
                case 0:
                    letter.innerText = 'a';
                    break;
                case 1:
                    letter.innerText = 'b';
                    break;
                case 2:
                    letter.innerText = 'c';
                    break;
                case 3:
                    letter.innerText = 'd';
                    break;
                case 4:
                    letter.innerText = 'e';
                    break;
                case 5:
                    letter.innerText = 'f';
                    break;
                case 6:
                    letter.innerText = 'g';
                    break;
                case 7:
                    letter.innerText = 'h';
                    break;
            }
            i;
            letters.appendChild(letter);
        }
    }
    getBoard();
    getNumbers();
    getLetters();
}