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
var PieceClass_1 = require("./PieceClass");
var logic_1 = require("./logic");
var logic_2 = require("./logic");
var Pawn = /** @class */ (function (_super) {
    __extends(Pawn, _super);
    function Pawn(color, location) {
        return _super.call(this, 'pawn', color, location) || this;
    }
    Pawn.prototype.checkPossibleMoves = function () {
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
            var PieceOnWay = logic_2.AREASARRAY[logic_1.getAreaArrayIndex(checkingPosition)].piece;
            if (PieceOnWay instanceof PieceClass_1.Piece && PieceOnWay.color == this.color)
                continue;
            else if ((i === 0 || i === 2) && PieceOnWay instanceof PieceClass_1.Piece && PieceOnWay.color !== this.color) {
                this.possibleLocations.push(checkingPosition);
                continue;
            }
            else if (i === 0 ||
                i === 2 ||
                (i === 1 && PieceOnWay instanceof PieceClass_1.Piece && PieceOnWay.color !== this.color)) {
                continue;
            }
            this.possibleLocations.push(checkingPosition);
        }
    };
    return Pawn;
}(PieceClass_1.Piece));
exports.Pawn = Pawn;
