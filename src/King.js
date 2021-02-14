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
exports.King = void 0;
var Piece_1 = require("./Piece");
var logic_1 = require("./logic");
var logic_2 = require("./logic");
var timer_1 = require("./app/timer");
var DIV_ELEMENT = 'div';
var MAIN = document.querySelector('#main-wrap');
var King = /** @class */ (function (_super) {
    __extends(King, _super);
    function King(color, location) {
        var _this = this;
        if (color == 'white')
            location = [5, 1];
        else
            location = [5, 8];
        _this = _super.call(this, 'king', color, location) || this;
        return _this;
    }
    King.prototype.checkPossibleMoves = function () {
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
            var checkingPosition = [this.location[0] + dir[0], this.location[1] + dir[1]];
            if (checkingPosition[0] < 1 ||
                checkingPosition[0] > 8 ||
                checkingPosition[1] < 1 ||
                checkingPosition[1] > 8)
                continue;
            var PieceOnWay = logic_2.AREASARRAY[logic_1.getAreaArrayIndex(checkingPosition)].piece;
            if (PieceOnWay instanceof Piece_1.Piece && PieceOnWay.color == this.color)
                continue;
            else if (PieceOnWay instanceof Piece_1.Piece && PieceOnWay.color !== this.color) {
                this.possibleLocations.push(checkingPosition);
                continue;
            }
            this.possibleLocations.push(checkingPosition);
        }
    };
    King.prototype.checkingIfMate = function () {
        var _this = this;
        var checkCouter = 0;
        this.checkPossibleMoves();
        this.possibleLocations.forEach(function (kingPossibleLocation) {
            var enemyCounter = 0;
            logic_2.AREASARRAY.forEach(function (el) {
                if (el.piece instanceof Piece_1.Piece && el.piece.color != _this.color) {
                    el.piece.checkPossibleMoves();
                    el.piece.possibleLocations.forEach(function (enemyPossibleLoaction) {
                        if (kingPossibleLocation[0] == enemyPossibleLoaction[0] &&
                            kingPossibleLocation[1] == enemyPossibleLoaction[1]) {
                            enemyCounter++;
                            if (enemyCounter == 1)
                                checkCouter++;
                        }
                    });
                }
            });
        });
        if (checkCouter == this.possibleLocations.length || this.possibleLocations.length == 0) {
            console.log('checkmate');
            timer_1.CANCELTIMER.flag = true;
            if (MAIN instanceof HTMLElement) {
                var youLoseDiv = timer_1.createDOMElement(DIV_ELEMENT, 'youLose', MAIN);
                youLoseDiv.innerText = 'YOU LOSE!';
            }
        }
    };
    return King;
}(Piece_1.Piece));
exports.King = King;
