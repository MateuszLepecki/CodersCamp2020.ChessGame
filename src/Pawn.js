"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
var Piece_1 = require("./Piece");
var logic_1 = require("./logic");
var logic_2 = require("./logic");
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(color, location) {
        return _super.call(this, 'pawn', color, location) || this;
    }
    Pawn.prototype.checkPossibleMoves = function () {
<<<<<<< Updated upstream
        this.check = false;
=======
>>>>>>> Stashed changes
        this.possibleLocations = [];
        var dir = 0;
        if (this.color == 'white')
            dir = 1;
        else
            dir = -1;
        for (var i = 0; i < 3; i++) {
            var checkingPosition = [this.location[0] - 1 + i, this.location[1] + dir];
            if (checkingPosition[0] < 1 ||
                checkingPosition[0] > 8 ||
                checkingPosition[1] < 1 ||
                checkingPosition[1] > 8)
                continue;
<<<<<<< Updated upstream
            var pieceOnWay = logic_2.AREASARRAY[logic_1.getAreaArrayIndex(checkingPosition)].piece;
            if (pieceOnWay instanceof Piece_1.Piece && pieceOnWay.color == this.color)
                continue;
            else if ((i === 0 || i === 2) && pieceOnWay instanceof Piece_1.Piece && pieceOnWay.color !== this.color) {
                if (pieceOnWay.type == 'king')
                    this.check = true;
=======
            var PieceOnWay = logic_2.AREASARRAY[logic_1.getAreaArrayIndex(checkingPosition)].piece;
            if (PieceOnWay instanceof Piece_1.Piece && PieceOnWay.color == this.color)
                continue;
            else if ((i === 0 || i === 2) && PieceOnWay instanceof Piece_1.Piece && PieceOnWay.color !== this.color) {
>>>>>>> Stashed changes
                this.possibleLocations.push(checkingPosition);
                continue;
            }
            else if (i === 0 ||
                i === 2 ||
<<<<<<< Updated upstream
                (i === 1 && pieceOnWay instanceof Piece_1.Piece && pieceOnWay.color !== this.color)) {
=======
                (i === 1 && PieceOnWay instanceof Piece_1.Piece && PieceOnWay.color !== this.color)) {
>>>>>>> Stashed changes
                continue;
            }
            this.possibleLocations.push(checkingPosition);
        }
<<<<<<< Updated upstream
        if (this.alreadyMoved == false) {
            if (this.color == 'white')
                dir = 2;
            else
                dir = -2;
            var checkingPosition = [this.location[0], this.location[1] + dir];
            var PieceOnWay = logic_2.AREASARRAY[logic_1.getAreaArrayIndex(checkingPosition)].piece;
            if (PieceOnWay === 0) {
                this.possibleLocations.push(checkingPosition);
            }
        }
=======
>>>>>>> Stashed changes
    };
    return Pawn;
}(Piece_1.Piece));
exports.Pawn = Pawn;
