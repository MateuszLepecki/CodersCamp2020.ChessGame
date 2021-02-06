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
var piece_1 = require("./piece");
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
    };
    return King;
}(piece_1.Piece));
exports.King = King;
