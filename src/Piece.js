"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< Updated upstream
exports.createIMG = exports.Piece = void 0;
var logic_1 = require("./logic");
var timer_1 = require("./app/timer");
var bishopwhite = require('./assets/pieces-svg/bishop_w.svg');
var bishopblack = require('./assets/pieces-svg/bishop_b.svg');
var kingwhite = require('./assets/pieces-svg/king_w.svg');
var kingblack = require('./assets/pieces-svg/king_b.svg');
var knightwhite = require('./assets/pieces-svg/knight_w.svg');
var knightblack = require('./assets/pieces-svg/knight_b.svg');
var pawnwhite = require('./assets/pieces-svg/pawn_w.svg');
var pawnblack = require('./assets/pieces-svg/pawn_b.svg');
var queenwhite = require('./assets/pieces-svg/queen_w.svg');
var queenblack = require('./assets/pieces-svg/queen_b.svg');
var rookwhite = require('./assets/pieces-svg/rook_w.svg');
var rookblack = require('./assets/pieces-svg/rook_b.svg');
=======
exports.Piece = void 0;
var logic_1 = require("./logic");
var logic_2 = require("./logic");
var logic_3 = require("./logic");
>>>>>>> Stashed changes
var Piece = /** @class */ (function () {
    function Piece(type, color, location) {
        var _this = this;
        this.type = 'noneType';
        this.color = 'noneColor';
<<<<<<< Updated upstream
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
            exports.createIMG(eval(_this.type + _this.color), querySquare, stringCoordinates);
        };
        this.highlightPossibilities = function () {
            _this.possibleLocations.forEach(function (e) {
                var possibleSquare = document.querySelector('.' + logic_1.changeArrayCoordinatesToString(e));
                possibleSquare === null || possibleSquare === void 0 ? void 0 : possibleSquare.classList.add('possibileMoves');
            });
=======
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
>>>>>>> Stashed changes
        };
        this.type = type;
        this.color = color;
        this.location = location;
        this.initializePiece(location);
    }
    Piece.prototype.moveIfPossible = function (whereToPlace) {
<<<<<<< Updated upstream
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
                exports.createIMG(eval(this.type + this.color), querySquare, stringCoordinates);
                this.alreadyMoved = true;
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
>>>>>>> Stashed changes
        }
    };
    return Piece;
}());
exports.Piece = Piece;
<<<<<<< Updated upstream
var createIMG = function (imgID, parent, className) {
    var img = document.createElement('img');
    img.className = className;
    img.src = imgID;
    parent.appendChild(img);
};
exports.createIMG = createIMG;
=======
>>>>>>> Stashed changes
