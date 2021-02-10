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
exports.Queen = void 0;
var Piece_1 = require("./Piece");
var logic_1 = require("./logic");
var logic_2 = require("./logic");
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen(color, location) {
        var _this = this;
        if (color == 'white')
            location = [4, 1];
        else
            location = [4, 8];
        _this = _super.call(this, 'queen', color, location) || this;
        return _this;
    }
    Queen.prototype.checkPossibleMoves = function () {
        this.possibleLocations = [];
        for (var i = 0; i < 8; i++) {
            var dir = [0, 0];
            switch (i) {
                case 0:
                    dir = [1, 0];
                    break;
                case 1:
                    dir = [-1, 0];
                    break;
                case 2:
                    dir = [0, 1];
                    break;
                case 3:
                    dir = [0, -1];
                    break;
                case 4:
                    dir = [1, 1];
                    break;
                case 5:
                    dir = [-1, 1];
                    break;
                case 6:
                    dir = [1, -1];
                    break;
                case 7:
                    dir = [-1, -1];
                    break;
            }
            for (var j = 1; j < 8; j++) {
                var checkingPosition = [this.location[0] + j * dir[0], this.location[1] + j * dir[1]];
                if (checkingPosition[0] < 1 ||
                    checkingPosition[0] > 8 ||
                    checkingPosition[1] < 1 ||
                    checkingPosition[1] > 8)
                    break;
                var PieceOnWay = logic_2.AREASARRAY[logic_1.getAreaArrayIndex(checkingPosition)].piece;
                if (PieceOnWay instanceof Piece_1.Piece && PieceOnWay.color == this.color)
                    break;
                else if (PieceOnWay instanceof Piece_1.Piece && PieceOnWay.color !== this.color) {
                    this.possibleLocations.push(checkingPosition);
                    break;
                }
                this.possibleLocations.push(checkingPosition);
            }
        }
    };
    return Queen;
}(Piece_1.Piece));
exports.Queen = Queen;
