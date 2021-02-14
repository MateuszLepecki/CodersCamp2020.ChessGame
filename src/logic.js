"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfchecked = exports.deleteHighlightedSquares = exports.getAreaArrayIndex = exports.listenDOMchessboard = exports.changeArrayCoordinatesToString = exports.createBoardArray = exports.CHECK = exports.AREASARRAY = void 0;
var Piece_1 = require("./Piece");
var King_1 = require("./King");
var Queen_1 = require("./Queen");
var Rook_1 = require("./Rook");
var Bishop_1 = require("./Bishop");
var Pawn_1 = require("./Pawn");
var Knight_1 = require("./Knight");
var bishopW = require('./assets/pieces-svg/bishop_w.svg');
var bishopB = require('./assets/pieces-svg/bishop_b.svg');
exports.AREASARRAY = [];
var BOARD = document.querySelector('.board');
exports.CHECK = false;
var kingsIndexes = [];
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
        this.piece = 0;
    }
    Area.prototype.putPieceHere = function (newPiece) {
        this.piece = newPiece;
    };
    Area.prototype.deletePiece = function () {
        this.piece = 0;
        var querySquare = document.querySelector('.' + exports.changeArrayCoordinatesToString(this.areaCoordinates));
        // querySquare.innerText = '';
        querySquare.innerHTML = '';
    };
    return Area;
}());
var createBoardArray = function () {
    exports.AREASARRAY.splice(0, exports.AREASARRAY.length);
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
    var kingW = new King_1.King('white');
    var kingB = new King_1.King('black');
    var queenW = new Queen_1.Queen('white');
    var queenB = new Queen_1.Queen('black');
    var rockW1 = new Rook_1.Rook('white', [1, 1]);
    var rockW2 = new Rook_1.Rook('white', [8, 1]);
    var rockB1 = new Rook_1.Rook('black', [1, 8]);
    var rockB2 = new Rook_1.Rook('black', [8, 8]);
    var bishopW1 = new Bishop_1.Bishop('white', [3, 1]);
    var bishopW2 = new Bishop_1.Bishop('white', [6, 1]);
    var bishopB1 = new Bishop_1.Bishop('black', [3, 8]);
    var bishopB2 = new Bishop_1.Bishop('black', [6, 8]);
    var knightW1 = new Knight_1.Knight('white', [2, 1]);
    var knightW2 = new Knight_1.Knight('white', [7, 1]);
    var knightB1 = new Knight_1.Knight('black', [2, 8]);
    var knightB2 = new Knight_1.Knight('black', [7, 8]);
    for (var i = 1; i < 9; i++) {
        var pawnW = new Pawn_1.Pawn('white', [i, 2]);
        var pawnB = new Pawn_1.Pawn('black', [i, 7]);
    }
    console.table(exports.AREASARRAY);
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
    var target;
    if (e.target instanceof HTMLElement) {
        target = e.target.parentNode;
        var stringCoordinates = target.classList[0];
        var arr = changeStringCoordinatesToArray(stringCoordinates);
        var index = exports.getAreaArrayIndex(arr);
        exports.deleteHighlightedSquares();
        if (exports.AREASARRAY[index].piece instanceof Piece_1.Piece) {
            selectPiece(arr);
            BOARD.removeEventListener('click', listenSelection);
        }
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
    currentPiece.checkPossibleMoves();
    currentPiece.highlightPossibilities();
    var listenNewPosition = function (e) {
        var target;
        if (e.target instanceof HTMLElement) {
            target = e.target;
            var stringCoordinates = target.classList[0];
            var arr = changeStringCoordinatesToArray(stringCoordinates);
            currentPiece.moveIfPossible(arr);
            exports.checkIfchecked();
            BOARD.removeEventListener('click', listenNewPosition);
            BOARD.addEventListener('click', listenSelection);
        }
    };
    if (currentPiece instanceof Piece_1.Piece) {
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
var deleteHighlightedSquares = function () {
    var highlighted = document.querySelectorAll('.possibileMoves');
    highlighted.forEach(function (el) {
        el.classList.remove('possibileMoves');
    });
};
exports.deleteHighlightedSquares = deleteHighlightedSquares;
var checkIfchecked = function () {
    kingsIndexes = [];
    exports.AREASARRAY.forEach(function (el, index) {
        if (el.piece instanceof Piece_1.Piece && el.piece.type == 'king') {
            kingsIndexes.push(index);
        }
        if (el.piece instanceof Piece_1.Piece && el.piece.type != 'king') {
            el.piece.checkPossibleMoves();
            if (el.piece.check === true) {
                console.log('check');
                exports.CHECK = true;
            }
        }
    });
    if (exports.CHECK == true) {
        kingsIndexes.forEach(function (el, index) {
            var king = exports.AREASARRAY[kingsIndexes[index]].piece;
            if (king instanceof King_1.King) {
                king.checkingIfMate();
            }
        });
    }
    exports.CHECK = false;
};
exports.checkIfchecked = checkIfchecked;
