"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var chessboard_1 = require("../chessboard");
var logic_1 = require("../logic");
var logic_2 = require("../logic");
var App = function (_a) {
    chessboard_1.chessboard();
    logic_2.createBoardArray();
    logic_1.listenDOMchessboard();
};
exports.App = App;
