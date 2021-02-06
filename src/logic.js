"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAreaArrayIndex = exports.listenDOMchessboard = exports.changeArrayCoordinatesToString = exports.createBoardArray = exports.AREASARRAY = void 0;
var piece_1 = require("./piece");
var king_1 = require("./king");
var queen_1 = require("./queen");
var rock_1 = require("./rock");
var bishop_1 = require("./bishop");
var pawn_1 = require("./pawn");
var knight_1 = require("./knight");
exports.AREASARRAY = [];
var BOARD = document.querySelector('.board');
var Letters;
(function (Letters) {
    Letters[Letters["A"] = 0] = "A";
    Letters[Letters["B"] = 1] = "B";
    Letters[Letters["C"] = 2] = "C";
    Letters[Letters["D"] = 3] = "D";
    Letters[Letters["E"] = 4] = "E";
    Letters[Letters["F"] = 5] = "F";
    Letters[Letters["G"] = 6] = "G";
    Letters[Letters["H"] = 7] = "H";
})(Letters || (Letters = {}));
var Area = /** @class */ (function () {
    function Area(row, column) {
        this.areaCoordinates = [-1, -1];
        this.areaCoordinates[0] = row;
        this.areaCoordinates[1] = column;
        this.piece = {};
    }
    Area.prototype.putPieceHere = function (newPiece) {
        this.piece = newPiece;
    };
    Area.prototype.deletePiece = function () {
        this.piece = 0;
        var querySquare = document.querySelector('.' + exports.changeArrayCoordinatesToString(this.areaCoordinates));
        querySquare.innerText = '';
    };
    return Area;
}());
var createBoardArray = function () {
    for (var row = 1; row < 9; row++) {
        for (var column = 1; column < 9; column++) {
            var newArea = new Area(row, column);
            exports.AREASARRAY.push(newArea);
        }
    }
    insertPieces();
};
exports.createBoardArray = createBoardArray;
var insertPieces = function () {
    setTimeout(function () {
        var kingW = new king_1.King('white');
        var kingB = new king_1.King('black');
        var queenW = new queen_1.Queen('white');
        var queenB = new queen_1.Queen('black');
        var rockW1 = new rock_1.Rock('white', [1, 1]);
        var rockW2 = new rock_1.Rock('white', [8, 1]);
        var rockB1 = new rock_1.Rock('black', [1, 8]);
        var rockB2 = new rock_1.Rock('black', [8, 8]);
        var bishopW1 = new bishop_1.Bishop('white', [3, 1]);
        var bishopW2 = new bishop_1.Bishop('white', [6, 1]);
        var bishopB1 = new bishop_1.Bishop('black', [3, 8]);
        var bishopB2 = new bishop_1.Bishop('black', [6, 8]);
        var knightW1 = new knight_1.Knight('white', [2, 1]);
        var knightW2 = new knight_1.Knight('white', [7, 1]);
        var knightB1 = new knight_1.Knight('black', [2, 8]);
        var knightB2 = new knight_1.Knight('black', [7, 8]);
        for (var i = 1; i < 9; i++) {
            var pawnW = new pawn_1.Pawn('white', [i, 2]);
            var pawnB = new pawn_1.Pawn('black', [i, 7]);
        }
        console.table(exports.AREASARRAY);
    }, 1000);
};
var changeArrayCoordinatesToString = function (position) {
    var column = Letters[position[0] - 1];
    var row = position[1].toString();
    var resultString = column + row;
    return resultString;
};
exports.changeArrayCoordinatesToString = changeArrayCoordinatesToString;
var changeStringCoordinatesToArray = function (position) {
    var resultArray = [0, 0];
    var ascii = position[0].codePointAt(0);
    resultArray[0] = ascii - 64;
    resultArray[1] = +position[1];
    return resultArray;
};
var listenSelection = function (e) {
    var target = e.target; // WHAT WILL BE THE PROPER TYPE ??
    var stringCoordinates = target.classList[0];
    var arr = changeStringCoordinatesToArray(stringCoordinates);
    var index = exports.getAreaArrayIndex(arr);
    if (exports.AREASARRAY[index].piece instanceof piece_1.Piece) {
        selectPiece(arr);
        BOARD.removeEventListener('click', listenSelection);
    }
};
var listenDOMchessboard = function () {
    BOARD.addEventListener('click', listenSelection);
};
exports.listenDOMchessboard = listenDOMchessboard;
var selectPiece = function (position) {
    BOARD.removeEventListener('click', listenSelection);
    var index = exports.getAreaArrayIndex(position);
    var currentPiece = exports.AREASARRAY[index].piece;
    var listenNewPosition = function (e) {
        var target = e.target; // WHAT WILL BE THE PROPER TYPE ??
        var stringCoordinates = target.classList[0];
        var arr = changeStringCoordinatesToArray(stringCoordinates);
        currentPiece.moveIfPossible(arr);
        BOARD.removeEventListener('click', listenNewPosition);
        BOARD.addEventListener('click', listenSelection);
    };
    if (currentPiece instanceof piece_1.Piece) {
        BOARD.addEventListener('click', listenNewPosition);
    }
    else
        BOARD.addEventListener('click', listenSelection);
};
var getAreaArrayIndex = function (coordinates) {
    var index = exports.AREASARRAY.findIndex(function (e) {
        if (e.areaCoordinates[0] == coordinates[0] && e.areaCoordinates[1] == coordinates[1])
            return e;
    });
    return index;
};
exports.getAreaArrayIndex = getAreaArrayIndex;
