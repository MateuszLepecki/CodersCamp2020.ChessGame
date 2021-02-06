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
exports.Rock = void 0;
var piece_1 = require("./piece");
var Rock = /** @class */ (function (_super) {
    __extends(Rock, _super);
    function Rock(color, location) {
        return _super.call(this, 'rock', color, location) || this;
    }
    return Rock;
}(piece_1.Piece));
exports.Rock = Rock;
