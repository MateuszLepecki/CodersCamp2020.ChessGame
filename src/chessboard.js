"use strict";
exports.__esModule = true;
exports.chessboard = void 0;
// import image from './../styles/photos/chess_logo_logo.svg';
var main = document.getElementById('main-wrap');
var board = document.createElement('div');
board.classList.add('board');
var img = document.createElement('img');
img.classList.add('img');
img.src = './../styles/photos/chess_logo_logo.svg';
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
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var secArr = ['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    for (var i = 8; i >= 1; i--) {
        var row = document.createElement('div');
        row.classList.add('row');
        if (i % 2 !== 0) {
            row.style.flexDirection = 'row-reverse';
        }
        for (var j = 0; j < 8; j++) {
            var square = document.createElement('div');
            if (i % 2 === 1) {
                square.classList.add("" + secArr[j] + i);
            }
            else {
                square.classList.add("" + arr[j] + i);
            }
            square.classList.add('square');
            if (j % 2 === 0) {
                square.style.backgroundColor = '#6C1A31';
            }
            else {
                square.style.backgroundColor = '#D67E03';
            }
            row.appendChild(square);
        }
        board.appendChild(row);
    }
    getNumbers();
    getLetters();
}
exports.chessboard = chessboard;
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