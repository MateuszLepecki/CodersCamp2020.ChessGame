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
exports.Knight = void 0;
var piece_1 = require("./piece");
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(color, location) {
        return _super.call(this, 'knight', color, location) || this;
    }
    return Knight;
}(piece_1.Piece));
exports.Knight = Knight;
