"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chessboard = void 0;
var logo = require('./assets/logo/chess_logo_logo.svg');
// import logo from './assets/logo/chess_logo_logo.svg';
var main = document.getElementById('main-wrap');
var board = document.createElement('div');
board.classList.add('board');
var img = document.createElement('img');
img.classList.add('img');
img.src = logo;
var outerBoard = document.createElement('div');
outerBoard.classList.add('outerBoard');
var numbers = document.createElement('div');
numbers.classList.add('numbers');
var takenPawns = document.createElement('div');
takenPawns.classList.add('taken-pawns');
var listOfMoves = document.createElement('div');
listOfMoves.classList.add('list-of-moves');
main.appendChild(img);
main.appendChild(numbers);
main.appendChild(outerBoard);
main.appendChild(takenPawns);
main.appendChild(listOfMoves);
var letters = document.createElement('div');
letters.classList.add('letters');
outerBoard.appendChild(letters);
outerBoard.appendChild(board);
function chessboard() {
    function getBoard() {
        for (var i = 8; i >= 1; i--) {
            var row = document.createElement('div');
            row.classList.add('row');
            if (i % 2 !== 0) {
                row.style.flexDirection = 'row-reverse';
            }
            for (var j = 0; j < 8; j++) {
                var square = document.createElement('div');
                var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                var secArr = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
                if (i % 2 === 1) {
                    square.classList.add("" + secArr[j] + i);
                }
                else {
                    square.classList.add("" + arr[j] + i);
                }
                square.classList.add('square');
                if (j % 2 === 0) {
                    square.classList.add('firstColor');
                }
                else {
                    square.classList.add('secondColor');
                }
                row.appendChild(square);
            }
            board.appendChild(row);
        }
    }
    function getNumbers() {
        for (var i = 8; i > 0; i--) {
            var number = document.createElement('div');
            number.classList.add('number');
            number.innerText = "" + i;
            numbers.appendChild(number);
        }
    }
    function getLetters() {
        for (var i = 0; i < 8; i++) {
            var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            var letter = document.createElement('div');
            letter.classList.add('letter');
            letter.innerText = "" + letterArray[i];
            letters.appendChild(letter);
        }
    }
    getBoard();
    getNumbers();
    getLetters();
}
exports.chessboard = chessboard;
