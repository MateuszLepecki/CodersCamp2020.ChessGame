"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchTimers = exports.createTimers = exports.Timer = void 0;
var App_1 = require("./App");
var Timer = /** @class */ (function () {
    function Timer(initialTime, color) {
        this.minutes = initialTime;
        this.seconds = 0;
        this.stopped = true;
        this.color = color;
    }
    Timer.prototype.startCounting = function () {
        var _this = this;
        this.stopped = false;
        var interval = setInterval(function () {
            _this.change60secondsTo1Minute();
            if (_this.stopped)
                clearInterval(interval);
            _this.seconds--;
            _this.showRemainingTime();
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
    Timer.prototype.showRemainingTime = function () {
        console.log(this.color + " - time left: " + this.minutes + ":" + this.seconds);
    };
    Timer.prototype.endOfTime = function () {
        console.log('End of time - you lose');
    };
    return Timer;
}());
exports.Timer = Timer;
var createTimers = function () {
    var timerBlack = new Timer(App_1.gameSettings.choosenTime, 'black');
    var timerWhite = new Timer(App_1.gameSettings.choosenTime, 'white');
    timerWhite.startCounting();
    setTimeout(function () {
        exports.switchTimers(timerWhite, timerBlack);
    }, 10000);
    setTimeout(function () {
        exports.switchTimers(timerWhite, timerBlack);
    }, 24000);
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
