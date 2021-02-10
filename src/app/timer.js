"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeTimeToString = exports.createDOMElement = exports.insertTimerIntoDOM = exports.switchTimers = exports.createTimers = exports.Timer = void 0;
var App_1 = require("./App");
var MAIN = document.querySelector('#main-wrap');
var DIV_ELEMENT = 'div';
var cancelTimer = false;
var DOMTimers = [];
var Timer = /** @class */ (function () {
    function Timer(initialTime, player) {
        this.minutes = initialTime;
        this.seconds = 0;
        this.stopped = true;
        this.player = player;
    }
    Timer.prototype.startCounting = function () {
        var _this = this;
        this.stopped = false;
        var interval = setInterval(function () {
            _this.change60secondsTo1Minute();
            if (_this.stopped)
                clearInterval(interval);
            _this.seconds--;
            // this.showRemainingTime();
            if (_this.seconds === 0 && _this.minutes === 0) {
                _this.endOfTime();
                clearInterval(interval);
            }
        }, 1000);
    };
    Timer.prototype.stopCounting = function () {
        this.stopped = true;
    };
    Timer.prototype.change60secondsTo1Minute = function () {
        if (this.seconds === 0 && this.minutes > 0) {
            this.minutes--;
            this.seconds = 60;
        }
    };
    // showRemainingTime(): void {
    //     console.log(`${this.color} - time left: ${this.minutes}:${this.seconds}`);
    // }
    Timer.prototype.endOfTime = function () {
        console.log('End of time - you lose');
    };
    return Timer;
}());
exports.Timer = Timer;
var createTimers = function () {
    cancelTimer = false;
    var timerOne = new Timer(App_1.gameSettings.choosenTime, 'one');
    var timerTwo = new Timer(App_1.gameSettings.choosenTime, 'two');
    timerOne.startCounting();
    setTimeout(function () {
        exports.switchTimers(timerOne, timerTwo);
    }, 10000);
    setTimeout(function () {
        exports.switchTimers(timerOne, timerTwo);
    }, 24000);
    DOMTimers = exports.insertTimerIntoDOM(timerOne, timerTwo);
    updateDOMTimer(timerOne, timerTwo);
};
exports.createTimers = createTimers;
var switchTimers = function (timerWhite, timerBlack) {
    if (timerBlack.stopped === true && timerWhite.stopped === false) {
        timerWhite.stopCounting();
        timerBlack.startCounting();
    }
    else {
        timerBlack.stopCounting();
        timerWhite.startCounting();
    }
};
exports.switchTimers = switchTimers;
var insertTimerIntoDOM = function (timerOne, timerTwo) {
    var timersWrapper = exports.createDOMElement(DIV_ELEMENT, 'timerWrapper', MAIN);
    var player1timer = exports.createDOMElement(DIV_ELEMENT, 'player1timer timer', timersWrapper);
    var player2timer = exports.createDOMElement(DIV_ELEMENT, 'player2timer timer', timersWrapper);
    return [player1timer, player2timer];
};
exports.insertTimerIntoDOM = insertTimerIntoDOM;
var createDOMElement = function (type, className, parent, text) {
    if (text === void 0) { text = ''; }
    var newElement = document.createElement(type);
    newElement.className = className;
    newElement.innerText = text;
    parent.appendChild(newElement);
    return newElement;
};
exports.createDOMElement = createDOMElement;
var changeTimeToString = function (minutes, seconds) {
    var stringMinutes = minutes.toString();
    var stringSeconds = seconds.toString();
    if (minutes < 10) {
        stringMinutes = '0' + stringMinutes;
    }
    if (seconds < 10) {
        stringSeconds = '0' + stringSeconds;
    }
    if (seconds == 0)
        stringSeconds = '00';
    if (minutes == 0)
        stringMinutes = '00';
    return stringMinutes + ":" + stringSeconds;
};
exports.changeTimeToString = changeTimeToString;
var updateDOMTimer = function (timerOne, timerTwo) {
    var player1timer = DOMTimers[0];
    var player2timer = DOMTimers[1];
    var interval = setInterval(function () {
        if ((timerOne.minutes === 0 && timerOne.seconds == 0) ||
            (timerTwo.minutes === 0 && timerTwo.seconds == 0) ||
            cancelTimer)
            clearInterval(interval);
        player1timer.innerText = exports.changeTimeToString(timerOne.minutes, timerOne.seconds);
        player2timer.innerText = exports.changeTimeToString(timerTwo.minutes, timerTwo.seconds);
    }, 1000);
};
var turnTimerOffFaster = function () {
    cancelTimer = true;
};
