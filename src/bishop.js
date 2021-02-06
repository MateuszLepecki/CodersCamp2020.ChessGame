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
exports.Bishop = void 0;
var piece_1 = require("./piece");
var Bishop = /** @class */ (function (_super) {
    __extends(Bishop, _super);
    function Bishop(color, location) {
        return _super.call(this, 'bishop', color, location) || this;
    }
    return Bishop;
}(piece_1.Piece));
exports.Bishop = Bishop;
