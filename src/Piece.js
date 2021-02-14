"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var logic_1 = require("./logic");
var timer_1 = require("./app/timer");
var Piece = /** @class */ (function () {
    function Piece(type, color, location) {
        var _this = this;
        this.type = 'noneType';
        this.color = 'noneColor';
        this.check = false;
        this.location = [-1, -1];
        this.possibleLocations = [];
        this.alreadyMoved = false;
        this.initializePiece = function (place) {
            _this.location = place;
            var index = logic_1.getAreaArrayIndex(place);
            logic_1.AREASARRAY[index].deletePiece();
            logic_1.AREASARRAY[index].putPieceHere(_this);
            var stringCoordinates = logic_1.changeArrayCoordinatesToString(place);
            var querySquare = document.querySelector('.' + stringCoordinates);
            querySquare.innerText = _this.type;
        };
        this.highlightPossibilities = function () {
            _this.possibleLocations.forEach(function (e) {
                var possibleSquare = document.querySelector('.' + logic_1.changeArrayCoordinatesToString(e));
                possibleSquare === null || possibleSquare === void 0 ? void 0 : possibleSquare.classList.add('possibileMoves');
            });
        };
        this.type = type;
        this.color = color;
        this.location = location;
        this.initializePiece(location);
    }
    Piece.prototype.moveIfPossible = function (whereToPlace) {
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
        }
    };
    return Piece;
}());
exports.Piece = Piece;
