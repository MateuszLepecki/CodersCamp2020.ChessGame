"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.turnTimerOffFaster = exports.updateDOMTimer = exports.changeTimeToString = exports.createDOMElement = exports.insertTimerIntoDOM = exports.switchTimers = exports.createTimers = exports.whichColorTurn = exports.Timer = exports.DOMTimers = exports.CANCELTIMER = void 0;
var App_1 = require("./App");
var MAIN = document.querySelector('#main-wrap');
var DIV_ELEMENT = 'div';
exports.CANCELTIMER = {
    flag: false,
};
exports.DOMTimers = [];
var Timers = [];
var Timer = /** @class */ (function () {
    function Timer(initialTime, player) {
        this.endOftime = false;
=======
exports.changeTimeToString = exports.createDOMElement = exports.insertTimerIntoDOM = exports.switchTimers = exports.createTimers = exports.Timer = void 0;
var App_1 = require("./App");
var MAIN = document.querySelector('#main-wrap');
var DIV_ELEMENT = 'div';
var cancelTimer = false;
var DOMTimers = [];
var Timer = /** @class */ (function () {
    function Timer(initialTime, player) {
>>>>>>> mainScreen
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
<<<<<<< HEAD
                _this.endOfTimeMethod();
=======
                _this.endOfTime();
>>>>>>> mainScreen
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
<<<<<<< HEAD
    Timer.prototype.endOfTimeMethod = function () {
        this.endOftime = true;
        console.log('End of time - you lose');
        if (MAIN instanceof HTMLElement) {
            var youLoseDiv = exports.createDOMElement(DIV_ELEMENT, 'youLose', MAIN);
            youLoseDiv.innerText = "YOU LOSE!";
        }
=======
    Timer.prototype.endOfTime = function () {
        console.log('End of time - you lose');
>>>>>>> mainScreen
    };
    return Timer;
}());
exports.Timer = Timer;
<<<<<<< HEAD
var whichColorTurn = function () {
    if (Timers[0].stopped === false)
        return 'white';
    if (Timers[0].endOftime === true || Timers[1].endOftime === true || exports.CANCELTIMER.flag === true)
        return 'endOfTime';
    else
        return 'black';
};
exports.whichColorTurn = whichColorTurn;
var createTimers = function () {
    Timers[0] = new Timer(App_1.gameSettings.choosenTime, 'white');
    Timers[1] = new Timer(App_1.gameSettings.choosenTime, 'black');
    Timers[0].startCounting();
    exports.insertTimerIntoDOM();
    exports.updateDOMTimer();
};
exports.createTimers = createTimers;
var switchTimers = function () {
    if (Timers[1].stopped === true && Timers[0].stopped === false) {
        Timers[0].stopCounting();
        Timers[1].startCounting();
    }
    else {
        Timers[1].stopCounting();
        Timers[0].startCounting();
    }
};
exports.switchTimers = switchTimers;
var insertTimerIntoDOM = function () {
    var timersWrapper = exports.createDOMElement(DIV_ELEMENT, 'timerWrapper', MAIN);
    var player1timer = exports.createDOMElement(DIV_ELEMENT, 'player1timer timer', timersWrapper);
    var player2timer = exports.createDOMElement(DIV_ELEMENT, 'player2timer timer', timersWrapper);
    exports.DOMTimers = [player1timer, player2timer];
=======
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
>>>>>>> mainScreen
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
<<<<<<< HEAD
var updateDOMTimer = function () {
    var player1timer = exports.DOMTimers[0];
    var player2timer = exports.DOMTimers[1];
    var interval = setInterval(function () {
        if ((Timers[0].minutes === 0 && Timers[0].seconds == 0) ||
            (Timers[1].minutes === 0 && Timers[1].seconds == 0) ||
            exports.CANCELTIMER.flag)
            clearInterval(interval);
        player1timer.innerText = exports.changeTimeToString(Timers[0].minutes, Timers[0].seconds);
        player2timer.innerText = exports.changeTimeToString(Timers[1].minutes, Timers[1].seconds);
    }, 1000);
};
exports.updateDOMTimer = updateDOMTimer;
var turnTimerOffFaster = function () {
    exports.CANCELTIMER.flag = true;
};
exports.turnTimerOffFaster = turnTimerOffFaster;
=======
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
>>>>>>> mainScreen
