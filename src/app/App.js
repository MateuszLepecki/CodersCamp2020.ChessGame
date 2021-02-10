"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.gameSettings = void 0;
var timer_1 = require("./timer");
exports.gameSettings = {
    choosenTime: 4,
};
var App = function (_a) {
    timer_1.createTimers();
};
exports.App = App;
