"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var logic_1 = require("./logic");
<<<<<<< HEAD
var timer_1 = require("./app/timer");
=======
var logic_2 = require("./logic");
var logic_3 = require("./logic");
>>>>>>> mainScreen
var Piece = /** @class */ (function () {
    function Piece(type, color, location) {
        var _this = this;
        this.type = 'noneType';
        this.color = 'noneColor';
<<<<<<< HEAD
        this.check = false;
        this.location = [-1, -1];
        this.possibleLocations = [];
        this.alreadyMoved = false;
        this.initializePiece = function (place) {
            _this.location = place;
            var index = logic_1.getAreaArrayIndex(place);
            logic_1.AREASARRAY[index].deletePiece();
            logic_1.AREASARRAY[index].putPieceHere(_this);
=======
        this.location = [-1, -1];
        this.possibleLocations = [];
        this.initializePiece = function (place) {
            _this.location = place;
            var index = logic_2.getAreaArrayIndex(place);
            logic_3.AREASARRAY[index].deletePiece();
            logic_3.AREASARRAY[index].putPieceHere(_this);
>>>>>>> mainScreen
            var stringCoordinates = logic_1.changeArrayCoordinatesToString(place);
            var querySquare = document.querySelector('.' + stringCoordinates);
            querySquare.innerText = _this.type;
        };
<<<<<<< HEAD
        this.highlightPossibilities = function () {
            _this.possibleLocations.forEach(function (e) {
                var possibleSquare = document.querySelector('.' + logic_1.changeArrayCoordinatesToString(e));
                possibleSquare === null || possibleSquare === void 0 ? void 0 : possibleSquare.classList.add('possibileMoves');
            });
        };
=======
>>>>>>> mainScreen
        this.type = type;
        this.color = color;
        this.location = location;
        this.initializePiece(location);
    }
    Piece.prototype.moveIfPossible = function (whereToPlace) {
<<<<<<< HEAD
        if (this.color == timer_1.whichColorTurn()) {
            if (this.possibleLocations.findIndex(function (e) {
                return e[0] == whereToPlace[0] && e[1] == whereToPlace[1];
            }) != -1) {
                var currentIndex = logic_1.getAreaArrayIndex(this.location);
                logic_1.AREASARRAY[currentIndex].deletePiece();
                this.location = whereToPlace;
                var index = logic_1.getAreaArrayIndex(whereToPlace);
                logic_1.AREASARRAY[index].deletePiece();
                logic_1.AREASARRAY[index].putPieceHere(this);
                var stringCoordinates = logic_1.changeArrayCoordinatesToString(whereToPlace);
                var querySquare = document.querySelector('.' + stringCoordinates);
                querySquare.innerText = this.type;
                this.alreadyMoved = true;
                // checkIfchecked();
                logic_1.deleteHighlightedSquares();
                timer_1.switchTimers();
            }
=======
        this.checkPossibleMoves();
        if (this.possibleLocations.findIndex(function (e) {
            return e[0] == whereToPlace[0] && e[1] == whereToPlace[1];
        }) != -1) {
            var currentIndex = logic_2.getAreaArrayIndex(this.location);
            logic_3.AREASARRAY[currentIndex].deletePiece();
            this.location = whereToPlace;
            var index = logic_2.getAreaArrayIndex(whereToPlace);
            logic_3.AREASARRAY[index].deletePiece();
            logic_3.AREASARRAY[index].putPieceHere(this);
            var stringCoordinates = logic_1.changeArrayCoordinatesToString(whereToPlace);
            var querySquare = document.querySelector('.' + stringCoordinates);
            querySquare.innerText = this.type;
>>>>>>> mainScreen
        }
    };
    return Piece;
}());
exports.Piece = Piece;
