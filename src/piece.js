"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
var logic_1 = require("./logic");
var logic_2 = require("./logic");
var logic_3 = require("./logic");
var Piece = /** @class */ (function () {
    function Piece(type, color, location) {
        var _this = this;
        this.type = 'noneType';
        this.color = 'noneColor';
        this.location = [-1, -1];
        this.possibleLocations = [];
        this.initializePiece = function (place) {
            _this.location = place;
            var index = logic_2.getAreaArrayIndex(place);
            logic_3.AREASARRAY[index].deletePiece();
            logic_3.AREASARRAY[index].putPieceHere(_this);
            var stringCoordinates = logic_1.changeArrayCoordinatesToString(place);
            var querySquare = document.querySelector('.' + stringCoordinates);
            querySquare.innerText = _this.type;
        };
        this.type = type;
        this.color = color;
        this.location = location;
        this.initializePiece(location);
    }
    Piece.prototype.moveIfPossible = function (whereToPlace) {
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
        }
    };
    return Piece;
}());
exports.Piece = Piece;
